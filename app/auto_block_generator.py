import inspect
import json
import telegram
from telegram import Bot

# Configuration
OUTPUT_BLOCKS_FILE = "static/js/auto_generated_blocks.js"
OUTPUT_PYTHON_FILE = "static/js/auto_generated_python.js"
BLOCK_COLOR = 210  # Hue for auto-generated blocks

def get_methods(cls):
    """Get all public methods of a class."""
    methods = []
    for name, func in inspect.getmembers(cls, predicate=inspect.isfunction):
        if not name.startswith('_'):
            methods.append((name, func))
    return methods

def map_type_to_block_check(annotation):
    """Map Python types to Blockly checks."""
    if annotation == int:
        return "Number"
    if annotation == str:
        return "String"
    if annotation == bool:
        return "Boolean"
    if annotation == float:
        return "Number"
    return None # Accept generic

def generate_js_files():
    blocks_js = []
    python_js = []
    
    blocks_js.append("// Auto-generated Block Definitions for python-telegram-bot")
    python_js.append("// Auto-generated Python Generators for python-telegram-bot")

    # Categorization Logic
    def get_category_and_color(name):
        n = name.lower()
        if n.startswith('send'): return "Sending (API)", 160
        if n.startswith('get') or n.startswith('get_'): return "Getting (API)", 290
        if n.startswith('edit'): return "Editing (API)", 210
        if n.startswith('delete') or n.startswith('remove'): return "Deleting (API)", 0
        if n.startswith('answer'): return "answering (API)", 120
        if any(x in n for x in ['set', 'pin', 'unpin', 'restrict', 'promote', 'ban']): return "Management (API)", 60
        return "Misc (API)", 230

    methods = get_methods(Bot)
    print(f"Found {len(methods)} methods in telegram.Bot")

    for name, func in methods:
        sig = inspect.signature(func)
        doc = inspect.getdoc(func) or "No description."
        doc_short = doc.split('\n')[0].replace('"', "'")
        
        block_type = f"auto_{name}"
        category_name, color = get_category_and_color(name)
        
        # --- Build Block JSON ---
        args0 = []
        message0 = f"🤖 {name}"
        input_count = 1
        
        # Inputs... (Keep existing logic)
        params = list(sig.parameters.values())
        args_data = [] 
        
        for param in params:
            if param.name == 'self': continue
            if param.kind in [inspect.Parameter.VAR_POSITIONAL, inspect.Parameter.VAR_KEYWORD]: continue
            
            # Skip advanced parameters user won't use
            if param.name in ['api_kwargs', 'read_timeout', 'write_timeout', 'connect_timeout', 'pool_timeout']: 
                continue
            if param.name.endswith('_timeout'):
                continue
            
            check = map_type_to_block_check(param.annotation)
            
            label = param.name
            if param.default != inspect.Parameter.empty:
                label += " (optional)" 
            
            message0 += f" {label} %{input_count}"
            args0.append({
                "type": "input_value",
                "name": param.name.upper(),
                "check": check
            })
            args_data.append(param.name)
            input_count += 1
            
        # --- Output Block Logic ---
        is_output_block = (category_name == "Getting (API)")
        
        block_def = {
            "type": block_type,
            "message0": message0,
            "args0": args0,
            "colour": color,
            "tooltip": doc_short,
            "helpUrl": f"https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.{name}",
            "auto_category": category_name 
        }
        
        if is_output_block:
            block_def["output"] = None # Any type
        else:
            block_def["previousStatement"] = None
            block_def["nextStatement"] = None
        
        # JS Definition
        js_def = f"""
Blockly.Blocks['{block_type}'] = {{
    init: function() {{
        this.jsonInit({json.dumps(block_def)});
    }},
    auto_category: "{category_name}"
}};
"""
        blocks_js.append(js_def)
        
        # --- Build Python Generator ---
        py_lines = []
        py_lines.append(f"Blockly.Python['{block_type}'] = function(block) {{")
        
        func_call_args = []
        
        for arg_name in args_data:
            arg_input = arg_name.upper()
            py_lines.append(f"    var {arg_name} = Blockly.Python.valueToCode(block, '{arg_input}', Blockly.Python.ORDER_ATOMIC);")
            
        py_lines.append("    var args = [];")
        
        for arg_name in args_data:
            py_lines.append(f"    if ({arg_name} && {arg_name} !== 'None') args.push('{arg_name}=' + {arg_name});")
            
        py_lines.append(f"    var code = 'await context.bot.{name}(' + args.join(', ') + ')';")
        
        if is_output_block:
            py_lines.append("    return [code, Blockly.Python.ORDER_ATOMIC];")
        else:
            py_lines.append("    return code + '\\n';")
            
        py_lines.append("};")
        
        python_js.append("\n".join(py_lines))

    # Write files
    with open(OUTPUT_BLOCKS_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(blocks_js))
        
    with open(OUTPUT_PYTHON_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(python_js))
        
    print(f"Successfully generated blocks for {len(methods)} methods.")
    print(f"Files saved to:\n- {OUTPUT_BLOCKS_FILE}\n- {OUTPUT_PYTHON_FILE}")

if __name__ == "__main__":
    generate_js_files()
