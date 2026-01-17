# Creating Custom Blocks

This guide explains how to create custom blocks for the Telegram Bot Builder.

## Block Structure

Each custom block is a JSON file with the following structure:

```json
{
    "type": "my_custom_block",
    "message0": "Do something with %1",
    "args0": [
        {
            "type": "input_value",
            "name": "INPUT",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Description of what this block does",
    "category": "My Category",
    "python": "print({INPUT})"
}
```

## Field Types

### Input Value (Connected Block)
```json
{
    "type": "input_value",
    "name": "MY_INPUT",
    "check": "String"  // "Number", "Boolean", "Array", null (any)
}
```

### Text Field
```json
{
    "type": "field_input",
    "name": "TEXT",
    "text": "default value"
}
```

### Dropdown
```json
{
    "type": "field_dropdown",
    "name": "OPTION",
    "options": [
        ["Option 1", "opt1"],
        ["Option 2", "opt2"]
    ]
}
```

### Statement Input (Nested Blocks)
```json
{
    "type": "input_statement",
    "name": "DO"
}
```

## Output Types

### Statement Block (Has previous/next connections)
```json
{
    "previousStatement": null,
    "nextStatement": null
}
```

### Value Block (Returns a value)
```json
{
    "output": "String"  // "Number", "Boolean", null (any)
}
```

## Python Code Generation

Use placeholders matching your input names:

```json
{
    "python": "result = do_something({INPUT})"
}
```

Placeholders are replaced with actual values at runtime.

## Advanced: Imports and Helper Functions

For blocks requiring external libraries:

```json
{
    "type": "openai_chat",
    "message0": "Ask ChatGPT %1",
    "args0": [
        {"type": "input_value", "name": "PROMPT", "check": "String"}
    ],
    "output": "String",
    "colour": 120,
    "category": "OpenAI",
    
    "imports": ["import openai"],
    
    "methods": {
        "call_gpt": "def call_gpt(prompt):\n    response = openai.ChatCompletion.create(model='gpt-3.5-turbo', messages=[{'role': 'user', 'content': prompt}])\n    return response.choices[0].message.content"
    },
    
    "python": "call_gpt({PROMPT})"
}
```

- **imports**: List of import statements (placed at file top)
- **methods**: Helper functions (defined once, reusable)
- **python**: The actual code using the helpers

## Using the Block Builder UI

1. Navigate to **Block Builder** from the main workspace
2. Fill in the form:
   - Block Type ID (unique identifier)
   - Display Message (with %1, %2 placeholders)
   - Arguments configuration
   - Python code
3. Click **Save Block**
4. Your block appears in the toolbox under the selected category

## Example: Weather Block

```json
{
    "type": "get_weather",
    "message0": "Get weather for city %1",
    "args0": [
        {
            "type": "input_value",
            "name": "CITY",
            "check": "String"
        }
    ],
    "output": "String",
    "colour": 210,
    "tooltip": "Fetches current weather for a city",
    "category": "API",
    "imports": ["import requests"],
    "python": "requests.get(f'https://wttr.in/{CITY}?format=3').text"
}
```

## Tips

1. **Test thoroughly** before sharing
2. **Use descriptive type names** (prefix with your package name)
3. **Include proper error handling** in methods
4. **Document dependencies** clearly
