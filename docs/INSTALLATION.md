# Installation Guide

## Requirements

- **Python 3.8+** (3.10+ recommended)
- **pip** (Python package manager)
- Modern web browser (Chrome, Firefox, Edge)

## Standard Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/telegram-bot-builder.git
cd telegram-bot-builder
```

### 2. Create a Virtual Environment (Recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
python app.py
```

### 5. Open in Browser

Navigate to: `http://localhost:5000`

---

## Desktop App (Electron)

If you want to run as a standalone desktop application:

### Prerequisites
- Node.js 18+
- npm

### Build Steps

```bash
# Navigate to electron directory
cd electron

# Install Node dependencies
npm install

# Run in development
npm start

# Build for production (creates installer)
npm run package-win   # Windows
npm run package-mac   # macOS
npm run package-linux # Linux
```

---

## Docker Installation (Coming Soon)

```dockerfile
# Dockerfile example
FROM python:3.10-slim
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]
```

---

## Troubleshooting

### Port Already in Use
If port 5000 is occupied, edit `app.py` and change:
```python
app.run(debug=True, port=5001)  # Use a different port
```

### Missing Dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

### Permission Errors (Linux/Mac)
```bash
chmod +x app.py
sudo pip install -r requirements.txt
```

---

## Next Steps

- Read [Creating Custom Blocks](CREATING_BLOCKS.md)
- Explore the [Block Store](BLOCK_STORE.md)
- Check the [API Reference](API_REFERENCE.md)
