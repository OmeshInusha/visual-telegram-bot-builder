from flask import Flask, render_template, request, jsonify
import sys
import subprocess
import os
import signal
import glob
import json
import zipfile
import io

app = Flask(__name__)

# Dictionary to store running bot processes: {bot_name: subprocess.Popen}
running_bots = {}

PROJECTS_DIR = 'projects'
BOTS_DIR = 'bots'
CUSTOM_BLOCKS_DIR = 'custom_blocks'

# Ensure directories exist
os.makedirs(PROJECTS_DIR, exist_ok=True)
os.makedirs(BOTS_DIR, exist_ok=True)
os.makedirs(CUSTOM_BLOCKS_DIR, exist_ok=True)

def get_python_runtime():
    """Returns the path to the Python executable to use for running bots."""
    if getattr(sys, 'frozen', False):
        # Bundled App Mode (PyInstaller)
        # Look for 'python_runtime/python.exe' next to the executable
        base_dir = os.path.dirname(sys.executable)
        runtime_python = os.path.join(base_dir, 'python_runtime', 'python.exe')
        
        if os.path.exists(runtime_python):
            return runtime_python
        else:
            # Fallback (Might fail if no global python)
            return "python" 
    else:
        # Dev Mode
        return sys.executable

@app.route('/')
def index():
    return render_template('welcome.html')

@app.route('/workspace')
def workspace():
    return render_template('index.html')

@app.route('/builder')
def block_builder():
    return render_template('builder.html')

@app.route('/custom-blocks', methods=['GET'])
def list_custom_blocks():
    blocks = []
    files = glob.glob(os.path.join(CUSTOM_BLOCKS_DIR, '*.json'))
    for f in files:
        with open(f, 'r') as file:
            try: blocks.append(json.load(file))
            except: pass
    return jsonify({'blocks': blocks})

@app.route('/save-block', methods=['POST'])
def save_custom_block():
    data = request.json
    block_type = data.get('type')
    if not block_type:
        return jsonify({'status': 'error', 'message': 'Block Type ID required'}), 400
    
    filename = os.path.join(CUSTOM_BLOCKS_DIR, f"{block_type}.json")
    try:
        with open(filename, 'w') as f:
            json.dump(data, f, indent=2)
        return jsonify({'status': 'success', 'message': 'Block Saved!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/projects', methods=['GET'])
def list_projects():
    files = glob.glob(os.path.join(PROJECTS_DIR, '*.xml'))
    projects = [os.path.basename(f).replace('.xml', '') for f in files]
    return jsonify({'projects': projects})

@app.route('/save', methods=['POST'])
def save_project():
    data = request.json
    xml_content = data.get('xml')
    project_name = data.get('name')
    
    if not project_name:
        return jsonify({'status': 'error', 'message': 'Project name is required'}), 400

    filename = os.path.join(PROJECTS_DIR, f"{project_name}.xml")
    try:
        with open(filename, 'w') as f:
            f.write(xml_content)
        return jsonify({'status': 'success', 'message': f'Project "{project_name}" saved successfully!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/load', methods=['GET'])
def load_project():
    project_name = request.args.get('name')
    if not project_name:
        return jsonify({'status': 'error', 'message': 'Project name is required'}), 400
        
    filename = os.path.join(PROJECTS_DIR, f"{project_name}.xml")
    if os.path.exists(filename):
        with open(filename, 'r') as f:
            return jsonify({'status': 'success', 'xml': f.read()})
    else:
        return jsonify({'status': 'error', 'message': 'Project not found'}), 404

@app.route('/run', methods=['POST'])
def run_bot():
    data = request.json
    code = data.get('code')
    bot_name = data.get('name')

    if not bot_name:
        return jsonify({'status': 'error', 'message': 'Bot name is required'}), 400

    # Stop existing instance if running
    if bot_name in running_bots:
        stop_bot_process(bot_name)

    filename = os.path.join(BOTS_DIR, f"{bot_name}_bot.py")
    try:
        with open(filename, 'w') as f:
            f.write(code)
            
        # Launch process
        python_exe = get_python_runtime()
        if sys.platform == "win32":
            proc = subprocess.Popen([python_exe, filename], creationflags=subprocess.CREATE_NEW_CONSOLE)
        else:
            proc = subprocess.Popen([python_exe, filename])
            
        running_bots[bot_name] = proc
        return jsonify({'status': 'success', 'message': f'Bot "{bot_name}" started!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/stop', methods=['POST'])
def stop_bot():
    bot_name = request.json.get('name')
    if not bot_name:
        return jsonify({'status': 'error', 'message': 'Bot name is required'}), 400

    if bot_name in running_bots:
        stop_bot_process(bot_name)
        return jsonify({'status': 'success', 'message': f'Bot "{bot_name}" stopped.'})
    else:
        return jsonify({'status': 'info', 'message': f'Bot "{bot_name}" is not running.'})

def stop_bot_process(bot_name):
    proc = running_bots.get(bot_name)
    if proc:
        proc.poll()
        if proc.returncode is None:
            proc.terminate()
            try:
                proc.wait(timeout=2)
            except subprocess.TimeoutExpired:
                proc.kill()
        del running_bots[bot_name]

@app.route('/explorer')
def block_explorer():
    return render_template('explorer.html')

@app.route('/resources')
def resources_page():
    return render_template('resources.html')

@app.route('/store')
def store_page():
    return render_template('store.html')

@app.route('/delete-block', methods=['POST'])
def delete_custom_block():
    data = request.json
    block_type = data.get('type')
    filename = os.path.join(CUSTOM_BLOCKS_DIR, f"{block_type}.json")
    if os.path.exists(filename):
        os.remove(filename)
        return jsonify({'status': 'success', 'message': 'Block Deleted!'})
    return jsonify({'status': 'error', 'message': 'Block not found'}), 404

@app.route('/upload-block', methods=['POST'])
def upload_custom_block():
    if 'file' not in request.files:
        return jsonify({'status': 'error', 'message': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'status': 'error', 'message': 'No selected file'}), 400
    if file and file.filename.endswith('.json'):
        # Validate content simply (check if json)
        try:
             # Just save it
            file.save(os.path.join(CUSTOM_BLOCKS_DIR, file.filename))
            return jsonify({'status': 'success', 'message': 'Block Uploaded successfully!'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)}), 500
            
    return jsonify({'status': 'error', 'message': 'Invalid file type'}), 400

@app.route('/get-block', methods=['GET'])
def get_custom_block():
    block_type = request.args.get('type')
    if not block_type: return jsonify({'status': 'error'}), 400
    
    filename = os.path.join(CUSTOM_BLOCKS_DIR, f"{block_type}.json")
    if os.path.exists(filename):
        with open(filename, 'r') as f:
            return jsonify(json.load(f))
    return jsonify({'status': 'error', 'message': 'Not found'}), 404

@app.route('/libraries', methods=['GET'])
def list_libraries():
    try:
        # Use pip freeze to get installed packages
        result = subprocess.check_output([get_python_runtime(), "-m", "pip", "list", "--format=json"]).decode('utf-8')
        return jsonify({'status': 'success', 'packages': json.loads(result)})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/install-library', methods=['POST'])
def install_library():
    package_name = request.json.get('name')
    if not package_name:
        return jsonify({'status': 'error', 'message': 'Package name required'}), 400
    
    try:
        subprocess.check_call([get_python_runtime(), "-m", "pip", "install", package_name])
        return jsonify({'status': 'success', 'message': f'Installed {package_name}'})
    except subprocess.CalledProcessError as e:
        return jsonify({'status': 'error', 'message': f'Failed to install: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/uninstall-library', methods=['POST'])
def uninstall_library():
    package_name = request.json.get('name')
    if not package_name:
        return jsonify({'status': 'error', 'message': 'Package name required'}), 400
    
    try:
        # -y to confirm uninstall automatically
        subprocess.check_call([get_python_runtime(), "-m", "pip", "uninstall", "-y", package_name])
        return jsonify({'status': 'success', 'message': f'Uninstalled {package_name}'})
    except subprocess.CalledProcessError as e:
        return jsonify({'status': 'error', 'message': f'Failed to uninstall: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/export-zip', methods=['POST'])
def export_zip():
    data = request.json
    code = data.get('code')
    bot_name = data.get('name')

    if not bot_name or not code:
        return jsonify({'status': 'error', 'message': 'Bot name and code are required'}), 400

    # Sanitize bot name for filename usage (same logic as in JS)
    safe_name = "".join(c for c in bot_name if c.isalnum() or c == '_')
    db_filename = f"{safe_name}_data.db"
    
    # Create in-memory zip
    memory_file = io.BytesIO()
    with zipfile.ZipFile(memory_file, 'w', zipfile.ZIP_DEFLATED) as zf:
        # 1. Add Bot Script
        zf.writestr(f"{safe_name}_bot.py", code)
        
        # 2. Add Requirements
        requirements = """python-telegram-bot
requests
"""
        zf.writestr("requirements.txt", requirements)
        
        # 3. Add Instructions
        instructions = f"""How to Host Your Telegram Bot ({bot_name})
=======================================

1. Install Python (if not already installed).
   Download from https://www.python.org/downloads/

2. Install Dependencies:
   Open a terminal/command prompt in this folder and run:
   pip install -r requirements.txt

3. Run the Bot:
   python {safe_name}_bot.py

4. Keep it running:
   The bot will run as long as the terminal window is open.
   To host it 24/7, consider using a VPS (Virtual Private Server) like DigitalOcean, Linode, or AWS EC2, or a service like Heroku or Railway.

Database:
Your bot uses a local SQLite database named '{db_filename}'.
If you are moving this bot to a new server, make sure to copy the '{db_filename}' file along with the script if you want to keep your existing data.
"""
        zf.writestr("README.txt", instructions)
        
        # 4. Add Database (if it exists)
        if os.path.exists(db_filename):
            zf.write(db_filename, arcname=db_filename)

    memory_file.seek(0)
    
    from flask import send_file
    return send_file(
        memory_file,
        mimetype='application/zip',
        as_attachment=True,
        download_name=f'{safe_name}_package.zip'
    )

@app.route('/store/packages', methods=['GET'])
def list_store_packages():
    manifest_path = os.path.join('store_data', 'manifest.json')
    if os.path.exists(manifest_path):
        with open(manifest_path, 'r') as f:
            return jsonify({'status': 'success', 'packages': json.load(f)})
    return jsonify({'status': 'success', 'packages': []})

@app.route('/store/install', methods=['POST'])
def install_package():
    data = request.json
    package_id = data.get('id')
    
    manifest_path = os.path.join('store_data', 'manifest.json')
    if not os.path.exists(manifest_path):
        return jsonify({'status': 'error', 'message': 'Store manifest missing'}), 500
        
    with open(manifest_path, 'r') as f:
        packages = json.load(f)
        
    package = next((p for p in packages if p['id'] == package_id), None)
    if not package:
        return jsonify({'status': 'error', 'message': 'Package not found'}), 404
        
    # Copy blocks
    try:
        if 'blocks' in package:
            for block_file in package['blocks']:
                # block_file is relative to store_data/ (e.g. openai/chat.json)
                src = os.path.join('store_data', extract_package_path(package_id, block_file)) 
                # Wait, my manifest structure was "blocks": ["openai_chat.json"] inside "openai" folder logic?
                # In manifest I wrote: "blocks": ["openai_chat.json"]... wait let me check what I wrote.
                # I wrote: "blocks": ["openai_chat.json", "openai_image.json"] inside the manifest object.
                # But physically I put them in `store_data/openai/`.
                # So I need to construct source path: `store_data/<package_id>/<block_file>`.
                
                src = os.path.join('store_data', package_id, block_file)
                dst = os.path.join(CUSTOM_BLOCKS_DIR, block_file) # Flatten into custom_blocks root
                
                if os.path.exists(src):
                    import shutil
                    shutil.copy(src, dst)
                    
        return jsonify({'status': 'success', 'message': f'Installed {package["name"]} blocks!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

def extract_package_path(package_id, filename):
    # simplistic helper if needed, but the logic above seems fine
    return filename


# Background Store Update Logic
# Background Store Update Logic
def update_store_data():
    import urllib.request
    import shutil
    
    url = "https://telegramindex.org/blocks/zip"
    target_dir = 'store_data'
    
    print("Starting background store update...")
    try:
        # Download ZIP
        req = urllib.request.Request(url, headers={'User-Agent': "TelegramBotBuilder/2.0"})
        with urllib.request.urlopen(req) as response:
            zip_content = response.read()
            
        print(f"Downloaded store update ({len(zip_content)} bytes)")
        
        # Extract to temp directory
        temp_extract_dir = "temp_store_update"
        if os.path.exists(temp_extract_dir):
            shutil.rmtree(temp_extract_dir)
            
        with zipfile.ZipFile(io.BytesIO(zip_content)) as zip_ref:
            zip_ref.extractall(temp_extract_dir)
            
            # Determine root
            source_root = temp_extract_dir
            items = os.listdir(temp_extract_dir)
            if len(items) == 1 and os.path.isdir(os.path.join(temp_extract_dir, items[0])):
                 possible_root = os.path.join(temp_extract_dir, items[0])
                 if os.path.exists(os.path.join(possible_root, 'manifest.json')):
                     source_root = possible_root

            # Check for manifest and copy
            if os.path.exists(os.path.join(source_root, 'manifest.json')):
                 os.makedirs(target_dir, exist_ok=True)
                 # Use shutil.copytree with dirs_exist_ok=True (Python 3.8+)
                 shutil.copytree(source_root, target_dir, dirs_exist_ok=True)
                 print("Store data updated successfully.")
            else:
                print("Invalid store zip structure: manifest.json not found.")
            
    except Exception as e:
        print(f"Failed to update store data: {e}")
    finally:
        # Cleanup
        if os.path.exists("temp_store_update"):
            try: shutil.rmtree("temp_store_update")
            except: pass

if __name__ == '__main__':
    # Only start thread in the reloader worker process (or if no debug)
    # This prevents running it twice (once in main, once in reloader)
    if os.environ.get('WERKZEUG_RUN_MAIN') == 'true' or not app.debug:
        import threading
        update_thread = threading.Thread(target=update_store_data, daemon=True)
        update_thread.start()

    app.run(debug=True)
