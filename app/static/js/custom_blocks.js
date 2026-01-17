
// Custom Blocks for Telegram Bot Builder

// 1. Setup Block
Blockly.Blocks['telegram_bot_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🤖 Telegram Bot Setup");
        this.appendValueInput("TOKEN")
            .setCheck("String")
            .appendField("Bot Token");
        this.appendStatementInput("HANDLERS")
            .setCheck(null)
            .appendField("Handlers");
        this.setColour(230);
        this.setTooltip("The main container for your bot. Place all event handlers here.");
        this.setHelpUrl("");
    }
};

// 2. On Command Block (e.g., /start)
Blockly.Blocks['telegram_on_command'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("⚡ On Command")
            .appendField(new Blockly.FieldTextInput("start"), "COMMAND");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Triggers when a specific command is sent (e.g., /start).");
        this.setHelpUrl("");
    }
};

// 3. On Message Block (Text)
Blockly.Blocks['telegram_on_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📨 On Text Message");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Triggers when the bot receives a text message.");
        this.setHelpUrl("");
    }
};

// 4. Reply Text Block
Blockly.Blocks['telegram_reply_text'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("💬 Reply with Text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a text reply to the user who triggered the event.");
        this.setHelpUrl("");
    }
};

// 5. Get User ID Block
Blockly.Blocks['telegram_get_user_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🆔 User ID");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Returns the ID of the user who sent the message.");
        this.setHelpUrl("");
    }
};

// 6. Get User Name Block
Blockly.Blocks['telegram_get_user_name'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("👤 User Name");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Returns the first name of the user.");
        this.setHelpUrl("");
    }
};

// 7. Get Message Text Block
Blockly.Blocks['telegram_get_message_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📝 Message Text");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Returns the text of the message received.");
        this.setHelpUrl("");
    }
};

// 8. DB Set Data
Blockly.Blocks['telegram_db_set'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("💾 Save Data");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("Key");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("Value");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("Saves a value to the database.");
        this.setHelpUrl("");
    }
};

// 9. DB Get Data
Blockly.Blocks['telegram_db_get'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🔎 Get Data");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("Key");
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip("Retrieves a value from the database.");
        this.setHelpUrl("");
    }
};

// 10. API Request Block
Blockly.Blocks['api_request'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🌐 API Request");
        this.appendDummyInput()
            .appendField("Method")
            .appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"]]), "METHOD");
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField("URL");
        this.appendValueInput("DATA")
            .setCheck("String")
            .appendField("JSON Data (optional)");
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip("Allows you to make HTTP requests. Returns the response text.");
        this.setHelpUrl("");
    }
};

// 11. Parse JSON Block
Blockly.Blocks['json_parse'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📦 Parse JSON");
        this.appendValueInput("JSON_STR")
            .setCheck("String")
            .appendField("JSON String");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("Key");
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("Parses a JSON string and extracts a value by key.");
        this.setHelpUrl("");
    }
};

// 12. Wait/Sleep Block
Blockly.Blocks['utils_wait'] = {
    init: function () {
        this.appendValueInput("SECONDS")
            .setCheck("Number")
            .appendField("⏳ Wait (seconds)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260); // Time color
        this.setTooltip("Pauses execution for the specified number of seconds.");
        this.setHelpUrl("");
    }
};

// 13. Kick User Block (Moderation)
Blockly.Blocks['telegram_kick_user'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🚫 Kick User");
        this.appendValueInput("USER_ID")
            .setCheck("Number")
            .appendField("User ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0); // Red for danger/moderation
        this.setTooltip("Kicks a user from the group. Bot must have admin rights.");
        this.setHelpUrl("");
    }
};

// 14. Send Photo Block
Blockly.Blocks['telegram_send_photo'] = {
    init: function () {
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField("📸 Send Photo (URL)");
        this.appendValueInput("CAPTION")
            .setCheck("String")
            .appendField("Caption (optional)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a photo from a URL.");
        this.setHelpUrl("");
    }
};

// 15. Dictionaries
Blockly.Blocks['dict_new'] = {
    init: function () {
        this.appendDummyInput().appendField("New Dictionary {}");
        this.setOutput(true, "Dictionary");
        this.setColour(45);
        this.setTooltip("Creates a new empty dictionary.");
    }
};

// 16. Dict Definition using Variable
Blockly.Blocks['dict_def'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Initialize Dict")
            .appendField(new Blockly.FieldVariable("my_dict"), "VAR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("Creates a new empty dictionary variable.");
    }
};

// 17. Dict Set Key-Value
Blockly.Blocks['dict_set'] = {
    init: function () {
        this.appendValueInput("DICT").setCheck(null).appendField("in dict");
        this.appendValueInput("KEY").setCheck("String").appendField("set key");
        this.appendValueInput("VALUE").appendField("to value");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("Sets a key-value pair in a dictionary.");
    }
};

// 18. Dict Get Value
Blockly.Blocks['dict_get'] = {
    init: function () {
        this.appendValueInput("DICT").setCheck(null).appendField("in dict");
        this.appendValueInput("KEY").setCheck("String").appendField("get key");
        this.setOutput(true, null);
        this.setColour(45);
        this.setTooltip("Gets a value from a dictionary by key.");
    }
};

// 19. List Definition
Blockly.Blocks['list_def'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Initialize List")
            .appendField(new Blockly.FieldVariable("my_list"), "VAR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("Creates a new empty list variable.");
    }
};

// 20. Tuples
Blockly.Blocks['tuple_create'] = {
    init: function () {
        this.appendValueInput("ITEM0").appendField("New Tuple (");
        this.appendValueInput("ITEM1").appendField(",");
        this.appendDummyInput().appendField(")");
        this.setOutput(true, "Tuple");
        this.setColour(65);
        this.setInputsInline(true);
        this.setTooltip("Creates a simple 2-item tuple.");
    }
};

// 21. Text Split
Blockly.Blocks['text_split'] = {
    init: function () {
        this.appendValueInput("TEXT").setCheck("String").appendField("split text");
        this.appendValueInput("DELIM").setCheck("String").appendField("by delimiter");
        this.setOutput(true, "Array");
        this.setColour(160);
        this.setTooltip("Splits text into a list based on a delimiter.");
    }
};

// 22. Text Replace
Blockly.Blocks['text_replace'] = {
    init: function () {
        this.appendValueInput("TEXT").setCheck("String").appendField("in text");
        this.appendValueInput("FROM").setCheck("String").appendField("replace");
        this.appendValueInput("TO").setCheck("String").appendField("with");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Replaces all occurrences of a substring with another.");
    }
};

// 34. Check Text Matches (Contains, StartsWith, EndsWith)
Blockly.Blocks['text_check_matches'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("text");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["contains", "IN"],
                ["starts with", "STARTSWITH"],
                ["ends with", "ENDSWITH"]
            ]), "OP");
        this.appendValueInput("SUB")
            .setCheck("String");
        this.setOutput(true, "Boolean");
        this.setColour(160);
        this.setInputsInline(true);
        this.setTooltip("Checks if text contains, starts with, or ends with a substring.");
    }
};

// 35. Change Text Case (Upper, Lower, Title)
Blockly.Blocks['text_change_case'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("change text");
        this.appendDummyInput()
            .appendField("to")
            .appendField(new Blockly.FieldDropdown([
                ["UPPER CASE", "UPPER"],
                ["lower case", "LOWER"],
                ["Title Case", "TITLE"]
            ]), "CASE");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Changes the case of the text string.");
    }
};

// 23. f-string parts
Blockly.Blocks['fstring_part'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("f-string part { }");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(160);
    }
};

// 24. f-string container (for mutator)
Blockly.Blocks['fstring_container'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("f-string parts");
        this.appendStatementInput("STACK");
        this.setColour(160);
    }
};

// 25. f-string
// Define the mixin for the mutator
const F_STRING_MUTATOR_MIXIN = {
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('parts', this.partCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.partCount_ = parseInt(xmlElement.getAttribute('parts'), 10);
        this.updateShape_();
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('fstring_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.partCount_; i++) {
            var partsBlock = workspace.newBlock('fstring_part');
            partsBlock.initSvg();
            connection.connect(partsBlock.previousConnection);
            connection = partsBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        var partsBlock = containerBlock.getInputTargetBlock('STACK');
        this.partCount_ = 0;
        var connections = [];
        while (partsBlock) {
            this.partCount_++;
            partsBlock = partsBlock.nextConnection &&
                partsBlock.nextConnection.targetBlock();
        }
        this.updateShape_();
    },
    updateShape_: function () {
        // Remove old inputs
        var i = 0;
        while (this.getInput('TEXT' + i)) {
            this.removeInput('TEXT' + i);
            this.removeInput('EXPR' + i);
            this.removeInput('END' + i);
            i++;
        }
        if (this.getInput('FINAL')) this.removeInput('FINAL');

        // Build new inputs
        for (var i = 0; i < this.partCount_; i++) {
            this.appendValueInput('TEXT' + i)
                .setCheck("String")
                .appendField(i === 0 ? ' "' : '');

            this.appendValueInput('EXPR' + i)
                .appendField('{');

            this.appendDummyInput('END' + i).appendField('}');
        }

        this.appendValueInput('TEXT' + this.partCount_)
            .setCheck("String");

        this.appendDummyInput('FINAL').appendField('"');
    }
};


// Register the mutator
if (!Blockly.Extensions.isRegistered('fstring_mutator')) {
    Blockly.Extensions.registerMutator('fstring_mutator', F_STRING_MUTATOR_MIXIN, null, ['fstring_part']);
}

Blockly.Blocks['text_fstring'] = {
    init: function () {
        this.partCount_ = 1;
        this.appendDummyInput("START")
            .appendField("f-string");
        this.setOutput(true, "String");
        this.setColour(160);

        // Use jsonInit to attach the registered mutator by name
        this.jsonInit({
            "mutator": "fstring_mutator"
        });

        // Ensure shape update happens after mutation application
        this.updateShape_();
    }
};

// 26. Class Definition
Blockly.Blocks['class_def'] = {
    init: function () {
        this.appendDummyInput().appendField("Class").appendField(new Blockly.FieldTextInput("MyClass"), "NAME");
        this.appendStatementInput("MEMBERS").setCheck(null);
        this.setColour(300);
        this.setTooltip("Defines a new class.");
    }
};

// 27. New Class Instance
Blockly.Blocks['class_obj_new'] = {
    init: function () {
        this.appendDummyInput().appendField("New Instance of").appendField(new Blockly.FieldTextInput("MyClass"), "NAME");
        this.setOutput(true, null);
        this.setColour(300);
        this.setTooltip("Creates a new instance of a class.");
    }
};

// 28. Random Range
Blockly.Blocks['math_random_range'] = {
    init: function () {
        this.appendValueInput("MIN").setCheck("Number").appendField("Random Int from");
        this.appendValueInput("MAX").setCheck("Number").appendField("to");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Generates a random integer between min and max.");
    }
};

// 29. Current DateTime
Blockly.Blocks['datetime_now'] = {
    init: function () {
        this.appendValueInput("FMT").setCheck("String").appendField("Current Time (Format)");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Returns current date/time formatted as a string (e.g. %Y-%m-%d).");
    }
};

// 30. Try/Except
Blockly.Blocks['control_try_except'] = {
    init: function () {
        this.appendStatementInput("TRY").appendField("Try");
        this.appendStatementInput("EXCEPT").appendField("Except");
        this.appendStatementInput("FINALLY").appendField("Finally");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Try-Except-Finally error handling block.");
    }
};

// 31. Type Casting
Blockly.Blocks['type_cast'] = {
    init: function () {
        this.appendValueInput("VAL").appendField("Convert to");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["String", "str"], ["Integer", "int"], ["Float", "float"], ["Boolean", "bool"]]), "TYPE");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("Casts a value to a specific type.");
    }
};

// 32. File Write
Blockly.Blocks['file_write'] = {
    init: function () {
        this.appendValueInput("FILENAME").setCheck("String").appendField("Write to File");
        this.appendValueInput("CONTENT").setCheck("String").appendField("Content");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("Writes content to a file.");
    }
};

// 33. File Read
Blockly.Blocks['file_read'] = {
    init: function () {
        this.appendValueInput("FILENAME").setCheck("String").appendField("Read from File");
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip("Reads content from a file.");
    }
};

// 36. On Chat Member Update (Join/Leave)
Blockly.Blocks['telegram_on_chat_member'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("👥 On Member")
            .appendField(new Blockly.FieldDropdown([["Joined", "JOINED"], ["Left", "LEFT"]]), "TYPE");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Triggers when a user joins or leaves the chat.");
    }
};

// 37. On Callback Query (Button Click)
Blockly.Blocks['telegram_on_callback'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🖱️ On Button Click (Callback)")
            .appendField("Pattern")
            .appendField(new Blockly.FieldTextInput("btn_click"), "PATTERN");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Triggers when an inline button with this data pattern is clicked.");
    }
};

// 38. Send Inline Keyboard
Blockly.Blocks['telegram_send_inline_keyboard'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("⌨️ Send Buttons with Text");
        this.appendStatementInput("BUTTONS")
            .setCheck("InlineButton")
            .appendField("Buttons");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a text message with inline buttons.");
    }
};

// 39. Inline Button
Blockly.Blocks['telegram_inline_button'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Button Label")
            .appendField(new Blockly.FieldTextInput("Click Me"), "LABEL")
            .appendField("Data")
            .appendField(new Blockly.FieldTextInput("btn_click"), "DATA");
        this.setPreviousStatement(true, "InlineButton");
        this.setNextStatement(true, "InlineButton");
        this.setColour(160);
        this.setTooltip("A button to be placed inside the 'Send Buttons' block.");
    }
};

// 40. Edit Message Text
Blockly.Blocks['telegram_edit_message'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("✏️ Edit Message Text");
        this.appendValueInput("MSG_ID")
            .setCheck(null)
            .appendField("Message ID (Optional)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Edits the text of the message. If ID is empty, edits the current bot message.");
    }
};

// 41. Delete Message
Blockly.Blocks['telegram_delete_message'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🗑️ Delete Message");
        this.appendValueInput("MSG_ID")
            .setCheck(null)
            .appendField("ID (Empty = Current)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Deletes a message. If ID is empty, deletes the message that triggered this.");
    }
};

// 99. Custom Python Code
Blockly.Blocks['py_custom_code'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Python Code")
            .appendField(new Blockly.FieldMultilineInput("# Write python code here..."), "CODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Injects raw Python code directly into the script.");
    }
};

// ==========================================
// MESSAGE ID HELPERS
// ==========================================

// 84. Get Incoming Message ID
Blockly.Blocks['telegram_incoming_message_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🆔 Get Incoming Message ID");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Returns the ID of the user's message that triggered this event.");
    }
};

// 85. Send Text & Return ID
Blockly.Blocks['telegram_reply_text_get_id'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("📤 Send Text & Get ID");
        this.setOutput(true, "Number");
        this.setColour(160);
        this.setTooltip("Sends a message and RETURNS its new Message ID (so you can edit/delete it later).");
    }
};

// 42. Forward Message
Blockly.Blocks['telegram_forward_message'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("⏩ Forward Message to Chat ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Forwards the current message to another chat.");
    }
};

// 86. Get Chat ID
Blockly.Blocks['telegram_get_chat_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🆔 Get Current Chat ID");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Returns the ID of the current group, channel, or private chat.");
    }
};

// --- Telegram Helpers ---

// 43. Get Chat Member Count
Blockly.Blocks['telegram_get_chat_member_count'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("👥 Get Member Count");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip("Returns the number of members in the current chat.");
    }
};

// 44. Get Chat Type
Blockly.Blocks['telegram_get_chat_type'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("ℹ️ Chat Type");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Returns 'private', 'group', 'supergroup', or 'channel'.");
    }
};

// 45. Mention User
Blockly.Blocks['telegram_mention_user'] = {
    init: function () {
        this.appendValueInput("USER_ID")
            .setCheck("Number")
            .appendField("🔗 Mention User ID");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("Name");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("Creates a text link mentioning the user.");
    }
};

// --- Data Structure Utilities ---

// 46. List Append
Blockly.Blocks['list_append'] = {
    init: function () {
        this.appendValueInput("LIST")
            .setCheck("Array")
            .appendField("in list");
        this.appendValueInput("ITEM")
            .appendField("add item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("Adds an item to the end of a list.");
    }
};

// 47. List Remove
Blockly.Blocks['list_remove'] = {
    init: function () {
        this.appendValueInput("LIST")
            .setCheck("Array")
            .appendField("in list");
        this.appendValueInput("ITEM")
            .appendField("remove item");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("Removes the first occurrence of the item from the list.");
    }
};

// 48. Dict Keys
Blockly.Blocks['dict_keys'] = {
    init: function () {
        this.appendValueInput("DICT")
            .setCheck("Dictionary")
            .appendField("get keys of dict");
        this.setOutput(true, "Array");
        this.setColour(45);
        this.setTooltip("Returns a list of all keys in the dictionary.");
    }
};

// 49. JSON Stringify
Blockly.Blocks['json_stringify'] = {
    init: function () {
        this.appendValueInput("DATA")
            .appendField("📦 Convert to JSON String");
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip("Converts a list or dictionary to a JSON text string.");
    }
};

// --- Polls & Quizzes ---

// 50. Send Poll
Blockly.Blocks['telegram_send_poll'] = {
    init: function () {
        this.appendValueInput("QUESTION")
            .setCheck("String")
            .appendField("📊 Send Poll");
        this.appendValueInput("OPTIONS")
            .setCheck("Array")
            .appendField("Options (List)");
        this.appendDummyInput()
            .appendField("Type")
            .appendField(new Blockly.FieldDropdown([["Regular", "regular"], ["Quiz", "quiz"]]), "TYPE")
            .appendField("Anonymous?")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "ANONYMOUS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a poll or quiz to the chat.");
    }
};

// --- Inline Bots ---

// 51. On Inline Query
Blockly.Blocks['telegram_on_inline_query'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🔍 On Inline Query");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Triggers when a user types @YourBot query...");
    }
};

// 52. Answer Inline Query
Blockly.Blocks['telegram_answer_inline_query'] = {
    init: function () {
        this.appendValueInput("RESULTS")
            .setCheck("Array")
            .appendField("✅ Answer Inline Query with Results");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends the list of results back to the inline query.");
    }
};

// 53. Inline Result Article
Blockly.Blocks['telegram_inline_result_article'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📄 Inline Article Result");
        this.appendValueInput("TITLE")
            .setCheck("String")
            .appendField("Title");
        this.appendValueInput("DESC")
            .setCheck("String")
            .appendField("Description");
        this.appendValueInput("MESSAGE")
            .setCheck("String")
            .appendField("Message to Send");
        this.setOutput(true, "InlineResult");
        this.setColour(160);
        this.setTooltip("Creates a simple text article result for inline queries.");
    }
};


// ==========================================
// CONVERSATION STATE MANAGEMENT
// ==========================================

// 54. Set User State
Blockly.Blocks['telegram_set_user_state'] = {
    init: function () {
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("🧠 Set State for User ID");
        this.appendValueInput("STATE")
            .setCheck("String")
            .appendField("to State Name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("Saves the user's current conversation step/state to the database.");
    }
};

// 55. Get User State
Blockly.Blocks['telegram_get_user_state'] = {
    init: function () {
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("🧠 Get State of User ID");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Retrieves the user's current conversation step/state.");
    }
};

// 56. Clear User State
Blockly.Blocks['telegram_clear_user_state'] = {
    init: function () {
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("🧠 Clear State for User ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("Removes the saved state for a user (resets conversation).");
    }
};


// ==========================================
// ADVANCED MEDIA BLOCKS
// ==========================================

// 57. Send Video
Blockly.Blocks['telegram_send_video'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🎬 Send Video to Chat ID");
        this.appendValueInput("VIDEO_URL")
            .setCheck("String")
            .appendField("Video URL/File ID");
        this.appendValueInput("CAPTION")
            .setCheck("String")
            .appendField("Caption (Optional)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a video file or URL to the chat.");
    }
};

// 58. Send Document
Blockly.Blocks['telegram_send_document'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("📁 Send Document to Chat ID");
        this.appendValueInput("DOC_URL")
            .setCheck("String")
            .appendField("File URL/File ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a general file (PDF, Zip, etc.).");
    }
};

// 59. Send Audio
Blockly.Blocks['telegram_send_audio'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🎵 Send Audio to Chat ID");
        this.appendValueInput("AUDIO_URL")
            .setCheck("String")
            .appendField("Audio URL/File ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends an audio track/song.");
    }
};

// 60. Send Sticker
Blockly.Blocks['telegram_send_sticker'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("😀 Send Sticker to Chat ID");
        this.appendValueInput("STICKER_ID")
            .setCheck("String")
            .appendField("Sticker File ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a Telegram sticker using its File ID.");
    }
};

// 61. Send Location
Blockly.Blocks['telegram_send_location'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("📍 Send Location to Chat ID");
        this.appendValueInput("LAT")
            .setCheck("Number")
            .appendField("Latitude");
        this.appendValueInput("LON")
            .setCheck("Number")
            .appendField("Longitude");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a map location.");
    }
};


// ==========================================
// GROUP MODERATION BLOCKS
// ==========================================

// 62. Ban Member
Blockly.Blocks['telegram_ban_member'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🚫 Ban Member in Chat ID");
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("User ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Bans a user from the group.");
    }
};

// 63. Unban Member
Blockly.Blocks['telegram_unban_member'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🤝 Unban Member in Chat ID");
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("User ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Unbans a user, allowing them to join again.");
    }
};

// 64. Pin Message
Blockly.Blocks['telegram_pin_message'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("📌 Pin Message in Chat ID");
        this.appendValueInput("MESSAGE_ID")
            .setCheck(null)
            .appendField("Message ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Pins the specified message to the top of the chat.");
    }
};

// 65. Unpin Message
Blockly.Blocks['telegram_unpin_message'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("📍 Unpin Message in Chat ID");
        this.appendValueInput("MESSAGE_ID")
            .setCheck(null)
            .appendField("Message ID (Optional)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Unpins a specific message, or all if empty.");
    }
};

// 66. Restrict/Mute Member
Blockly.Blocks['telegram_restrict_member'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🤐 Mute/Restrict Member in Chat ID");
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("User ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Restrict a user from sending messages (Mute).");
    }
};

// ==========================================
// SCHEDULING & TIMERS
// ==========================================

// 67. Wait (Async Sleep)
Blockly.Blocks['utils_wait'] = {
    init: function () {
        this.appendValueInput("SECONDS")
            .setCheck("Number")
            .appendField("⏳ Wait for");
        this.appendDummyInput()
            .appendField("seconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Pauses the execution for the specified time (Non-blocking).");
    }
};

// ==========================================
// ADMIN & PERMISSIONS
// ==========================================

// 68. Is User Admin? (Boolean)
Blockly.Blocks['telegram_is_admin'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🛡️ Is User Admin in Chat");
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("User ID");
        this.setOutput(true, "Boolean");
        this.setColour(210);
        this.setTooltip("Returns True if the user is an administrator in the specific chat.");
    }
};

// ==========================================
// UTILITIES (LOGGING & REGEX)
// ==========================================

// 69. Regex Extract
Blockly.Blocks['text_regex_extract'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("🔍 Extract from");
        this.appendValueInput("PATTERN")
            .setCheck("String")
            .appendField("using Regex Pattern");
        this.setOutput(true, "List");
        this.setColour(160);
        this.setTooltip("Returns a list of all matches found using the Regex pattern.");
    }
};

// 70. Console Log (Debug)
Blockly.Blocks['utils_log'] = {
    init: function () {
        this.appendValueInput("MSG")
            .setCheck(null)
            .appendField("🖨️ Log to Console");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Prints a message to the bot's running console for debugging.");
    }
};

// ==========================================
// DEEP LINKING
// ==========================================

// 71. Get Deep Link Payload
Blockly.Blocks['telegram_get_deep_link_payload'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🔗 Get Deep Link Parameter");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Gets the parameter sent with /start (e.g., /start ref123 -> returns 'ref123').");
    }
};

// ==========================================
// MEDIA CAPTURE EVENTS
// ==========================================

// 72. On Photo Received
Blockly.Blocks['telegram_on_photo'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📸 When User Sends Photo");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setColour(120);
        this.setTooltip("Triggers when the bot receives a photo.");
    }
};

// 73. On Video Received
Blockly.Blocks['telegram_on_video'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🎥 When User Sends Video");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setColour(120);
        this.setTooltip("Triggers when the bot receives a video.");
    }
};

// 74. On Document Received
Blockly.Blocks['telegram_on_document'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📁 When User Sends Document");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setColour(120);
        this.setTooltip("Triggers when the bot receives a file/document.");
    }
};

// 75. On Voice/Audio Received
Blockly.Blocks['telegram_on_voice'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🎤 When User Sends Voice/Audio");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setColour(120);
        this.setTooltip("Triggers when the bot receives a voice note or audio file.");
    }
};

// ==========================================
// MEDIA UTILITIES
// ==========================================

// 76. Get File ID
Blockly.Blocks['telegram_get_file_id'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🆔 Get Received File ID");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Gets the File ID of the photo/video/doc just received.");
    }
};

// 77. Download File
Blockly.Blocks['telegram_download_file'] = {
    init: function () {
        this.appendValueInput("FILE_ID")
            .setCheck("String")
            .appendField("⬇️ Download File ID");
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("to Path (Optional)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("Downloads the file to the local server.");
    }
};

// ==========================================
// CHANNEL MANAGEMENT
// ==========================================

// 78. Send Channel Post
Blockly.Blocks['telegram_channel_post'] = {
    init: function () {
        this.appendValueInput("CHANNEL_ID")
            .setCheck(null)
            .appendField("📢 Post to Channel ID");
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("Message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Sends a message to a public channel (Bot must be Admin).");
    }
};

// 79. Edit Channel Post
Blockly.Blocks['telegram_channel_edit'] = {
    init: function () {
        this.appendValueInput("CHANNEL_ID")
            .setCheck(null)
            .appendField("✏️ Edit Channel Post ID");
        this.appendValueInput("MSG_ID")
            .setCheck(null)
            .appendField("Message ID");
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("New Text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Edits a specific message in a channel.");
    }
};

// 80. Respond to Join Request
Blockly.Blocks['telegram_handle_join'] = {
    init: function () {
        this.appendValueInput("CHAT_ID")
            .setCheck(null)
            .appendField("🤝 Handle Join Request | Chat ID");
        this.appendValueInput("USER_ID")
            .setCheck(null)
            .appendField("User ID");
        this.appendDummyInput()
            .appendField("Action")
            .appendField(new Blockly.FieldDropdown([["Approve", "APPROVE"], ["Decline", "DECLINE"]]), "ACTION");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Approves or declines a user's request to join a private channel/group.");
    }
};

// 81. On Join Request Event
Blockly.Blocks['telegram_on_join_request'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🚪 On Join Request Received");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do");
        this.setColour(120);
        this.setTooltip("Triggers when a user requests to join.");
    }
};


// ==========================================
// SCHEDULING (JOB QUEUE)
// ==========================================

// 82. Scheduled Task (Interval)
Blockly.Blocks['telegram_schedule_interval'] = {
    init: function () {
        this.appendValueInput("SECONDS")
            .setCheck("Number")
            .appendField("⏲️ Every");
        this.appendDummyInput()
            .appendField("seconds, do:");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("Repeats a task every X seconds.");
    }
};

// 83. Scheduled Task (Daily)
Blockly.Blocks['telegram_schedule_daily'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📅 Every Day at")
            .appendField(new Blockly.FieldTextInput("09:00"), "TIME");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("do:");
        this.setColour(230);
        this.setTooltip("Runs a task once a day at the specified time (HH:MM in 24h format).");
    }
};

// ==========================================
// SECURITY & ENVIRONMENT
// ==========================================

// 90. Get Environment Variable
Blockly.Blocks['env_get_var'] = {
    init: function () {
        this.appendValueInput("VAR_NAME")
            .setCheck("String")
            .appendField("🔐 Get Env Variable");
        this.setOutput(true, "String");
        this.setColour(290);
        this.setTooltip("Gets a secret value from OS Environment Variables (secure).");
    }
};

// ==========================================
// ADVANCED UTILITIES
// ==========================================

// 91. Advanced Math (Round, Sqrt, Mod)
Blockly.Blocks['math_advanced'] = {
    init: function () {
        this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["Round", "ROUND"], ["Ceiling", "CEIL"], ["Floor", "FLOOR"], ["Square Root", "SQRT"], ["Absolute", "ABS"]]), "OP");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Performs advanced math operations.");
    }
};

// 92. Modulo (Remainder)
Blockly.Blocks['math_modulo'] = {
    init: function () {
        this.appendValueInput("DIVIDEND")
            .setCheck("Number")
            .appendField("remainder of");
        this.appendValueInput("DIVISOR")
            .setCheck("Number")
            .appendField("÷");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Returns the remainder (modulo) of division.");
    }
};

// 93. Date Operations (Add, Format)
Blockly.Blocks['datetime_advanced'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🕒 Date Operation");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Format (Text)", "FORMAT"], ["Add Days", "ADD_DAYS"], ["Subtitle Days", "SUB_DAYS"]]), "OP");
        this.appendValueInput("INPUT")
            .setCheck(null)
            .appendField("Input");
        this.appendValueInput("PARAM")
            .setCheck(null)
            .appendField("Param (Format/Days)");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("Format: '%Y-%m-%d'. Add/Sub: Number of days.");
    }
};

// 94. File Management
Blockly.Blocks['file_manage'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("📂 File:")
            .appendField(new Blockly.FieldDropdown([["Check Exists", "EXISTS"], ["Delete", "DELETE"], ["List Directory", "LIST"]]), "OP");
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("Path");
        this.setOutput(true, null); // Returns Bool for exists, None for delete, List for list
        this.setColour(260);
        this.setTooltip("Manages files on the server.");
    }
};
// 51. Raw Python Execution
Blockly.Blocks['utils_exec_python'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("🐍 Unsafe Python");
        this.appendValueInput("CODE")
            .setCheck("String")
            .appendField("Code");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Executes raw Python code. Use with caution.");
    }
};
