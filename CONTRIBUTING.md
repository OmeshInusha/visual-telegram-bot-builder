# Contributing to Telegram Bot Builder

Thank you for your interest in contributing! 🎉

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/telegram-bot-builder/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, Python version, browser)

### Suggesting Features

1. Open a new issue with the `enhancement` label
2. Describe the feature and why it would be useful
3. Include mockups or examples if possible

### Pull Requests

1. **Fork** the repository
2. **Clone** your fork locally
3. Create a **feature branch**: `git checkout -b feature/your-feature-name`
4. Make your changes
5. **Test** your changes thoroughly
6. **Commit** with clear messages: `git commit -m "Add: brief description"`
7. **Push** to your fork: `git push origin feature/your-feature-name`
8. Open a **Pull Request** against `main`

## Development Setup

```bash
# Clone
git clone https://github.com/yourusername/telegram-bot-builder.git
cd telegram-bot-builder

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Run in development mode
python app.py
```

## Code Style

- **Python**: Follow PEP 8 guidelines
- **JavaScript**: Use consistent formatting (2 or 4 spaces)
- **HTML**: Proper indentation, use semantic elements
- **Comments**: Write clear comments for complex logic

## Adding New Blocks

To add a new block:

1. Define the block in `static/js/custom_blocks.js`
2. Add the Python generator in `static/js/python_generator.js`
3. Add it to the toolbox in `static/js/toolbox_def.js`
4. Test thoroughly!

## Adding to Block Store

To contribute a block package:

1. Create a folder in `store_data/your_package/`
2. Add block JSON files
3. Update `store_data/manifest.json`
4. Include proper `imports` and `methods` in block definitions
5. Document any pip dependencies

## Questions?

Feel free to open a [Discussion](https://github.com/yourusername/telegram-bot-builder/discussions) or reach out!

---

Thank you for helping make Telegram Bot Builder better! 🚀
