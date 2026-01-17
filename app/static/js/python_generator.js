
// Code Generator Logic for Python (using python-telegram-bot)

// Ensure Blockly.Python exists
if (!Blockly.Python) {
    console.log("Loading Python generator...");
}

// Helper function to inject DB code


// Generator for 'telegram_bot_setup'
Blockly.Python['telegram_bot_setup'] = function (block) {
    var token = Blockly.Python.valueToCode(block, 'TOKEN', Blockly.Python.ORDER_ATOMIC) || '""';
    var handlers = Blockly.Python.statementToCode(block, 'HANDLERS');

    // Imports, DB setup, and helpers are handled by Blockly.Python.finish in main.js

    var code = `
if __name__ == '__main__':
    init_db() # Initialize Database
    application = ApplicationBuilder().token(${token}).build()
    
    # Generated Handlers
${handlers}
    
    application.run_polling()
`;
    return code;
};

// Generator for 'telegram_on_command'
Blockly.Python['telegram_on_command'] = function (block) {
    var command = block.getFieldValue('COMMAND');
    var statements_do = Blockly.Python.statementToCode(block, 'DO');

    var funcName = 'command_handler_' + command + '_' + Math.random().toString(36).substr(2, 5);

    var functionCode = `
async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # User Logic
${statements_do || '    pass'}
`;

    Blockly.Python.definitions_[funcName] = functionCode;

    var code = `application.add_handler(CommandHandler('${command}', ${funcName}))\n`;
    return code;
};

// Generator for 'telegram_on_message'
Blockly.Python['telegram_on_message'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');

    var funcName = 'message_handler_' + Math.random().toString(36).substr(2, 5);

    var functionCode = `
async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):
${statements_do || '    pass'}
`;

    Blockly.Python.definitions_[funcName] = functionCode;

    var code = `application.add_handler(MessageHandler(filters.TEXT & (~filters.COMMAND), ${funcName}))\n`;
    return code;
};

// Generator for 'telegram_reply_text'
Blockly.Python['telegram_reply_text'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '"..."';

    var code = `await update.message.reply_text(str(${text}))\n`;
    return code;
};

// Generator for 'telegram_get_user_id'
Blockly.Python['telegram_get_user_id'] = function (block) {
    var code = 'update.effective_user.id';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for 'telegram_get_user_name'
Blockly.Python['telegram_get_user_name'] = function (block) {
    var code = 'update.effective_user.first_name';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for 'telegram_get_message_text'
Blockly.Python['telegram_get_message_text'] = function (block) {
    var code = 'update.message.text';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for 'telegram_db_set'
Blockly.Python['telegram_db_set'] = function (block) {
    var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '"key"';
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '""';

    var code = `db_set(${key}, ${value})\n`;
    return code;
};

// Generator for 'telegram_db_get'
Blockly.Python['telegram_db_get'] = function (block) {
    var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '"key"';

    var code = `db_get(${key})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for 'api_request'
Blockly.Python['api_request'] = function (block) {
    var method = block.getFieldValue('METHOD');
    var url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC) || '""';
    var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC) || 'None';

    var code = "";
    if (method === 'GET') {
        code = `requests.get(${url}).text`;
    } else {
        code = `requests.post(${url}, json=${data} if ${data} else None).text`;
    }

    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for 'json_parse'
Blockly.Python['json_parse'] = function (block) {
    var json_str = Blockly.Python.valueToCode(block, 'JSON_STR', Blockly.Python.ORDER_ATOMIC) || '"{}"';
    var key = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '"key"';

    var code = `safe_json_parse(${json_str}, ${key})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Generator for 'utils_wait'
Blockly.Python['utils_wait'] = function (block) {
    var seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_ATOMIC) || '0';
    // Use asyncio.sleep since we are in async functions
    var code = `await asyncio.sleep(float(${seconds}))\n`;
    return code;
};

// Generator for 'telegram_kick_user'
Blockly.Python['telegram_kick_user'] = function (block) {
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || '0';

    var code = `await context.bot.ban_chat_member(chat_id=update.effective_chat.id, user_id=${user_id})\n`;
    return code;
};

// Generator for 'telegram_send_photo'
Blockly.Python['telegram_send_photo'] = function (block) {
    var url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC) || '""';
    var caption = Blockly.Python.valueToCode(block, 'CAPTION', Blockly.Python.ORDER_ATOMIC) || 'None';

    var code = `await update.message.reply_photo(photo=${url}, caption=${caption} if ${caption} else None)\n`;
    return code;
};

// Custom Python Generators for Extended Blocks

Blockly.Python['dict_new'] = function (block) {
    return ['{}', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['dict_def'] = function (block) {
    var varName = block.getField('VAR').getText();
    return `${varName} = {}\n`;
};

Blockly.Python['list_def'] = function (block) {
    var varName = block.getField('VAR').getText();
    return `${varName} = []\n`;
};

Blockly.Python['dict_set'] = function (block) {
    var d = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
    var k = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '""';
    var v = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || 'None';
    return `${d}[${k}] = ${v}\n`;
};

Blockly.Python['dict_get'] = function (block) {
    var d = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
    var k = Blockly.Python.valueToCode(block, 'KEY', Blockly.Python.ORDER_ATOMIC) || '""';
    return [`${d}.get(${k})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['tuple_create'] = function (block) {
    var i0 = Blockly.Python.valueToCode(block, 'ITEM0', Blockly.Python.ORDER_ATOMIC) || 'None';
    var i1 = Blockly.Python.valueToCode(block, 'ITEM1', Blockly.Python.ORDER_ATOMIC) || 'None';
    return [`(${i0}, ${i1})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_split'] = function (block) {
    var t = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '""';
    var d = Blockly.Python.valueToCode(block, 'DELIM', Blockly.Python.ORDER_ATOMIC) || '" "';
    return [`${t}.split(${d})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_replace'] = function (block) {
    var t = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '""';
    var f = Blockly.Python.valueToCode(block, 'FROM', Blockly.Python.ORDER_ATOMIC) || '""';
    var to = Blockly.Python.valueToCode(block, 'TO', Blockly.Python.ORDER_ATOMIC) || '""';
    return [`${t}.replace(${f}, ${to})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_check_matches'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '""';
    var sub = Blockly.Python.valueToCode(block, 'SUB', Blockly.Python.ORDER_ATOMIC) || '""';
    var op = block.getFieldValue('OP');

    var code = "";
    if (op === "IN") {
        code = `(${sub} in ${text})`;
    } else if (op === "STARTSWITH") {
        code = `${text}.startswith(${sub})`;
    } else if (op === "ENDSWITH") {
        code = `${text}.endswith(${sub})`;
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_change_case'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '""';
    var mod_case = block.getFieldValue('CASE');
    var code = "";
    if (mod_case === "UPPER") {
        code = `${text}.upper()`;
    } else if (mod_case === "LOWER") {
        code = `${text}.lower()`;
    } else if (mod_case === "TITLE") {
        code = `${text}.title()`;
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['text_fstring'] = function (block) {
    // Helper to get raw string content and escape double quotes for f-string "..."
    function getContent(txt) {
        if (!txt || txt === "''" || txt === '""') return '';
        // Check if it's a string literal (starts/ends with matching quotes)
        if ((txt.startsWith('"') && txt.endsWith('"')) ||
            (txt.startsWith("'") && txt.endsWith("'"))) {
            // Remove outer quotes
            let raw = txt.slice(1, -1);
            // If the original was single-quoted, it might contain unescaped double quotes 
            // that will break our f"..." wrapper. We must escape them.
            // Example: 'Say "Hi"' -> raw: Say "Hi" -> we need: Say \"Hi\"
            if (txt.startsWith("'")) {
                raw = raw.replace(/"/g, '\\"');
            }
            // If original was double-quoted, it is likely already escaped by Blockly generator:
            // "Say \"Hi\"". slice-> Say \"Hi\". correct.
            return raw;
        }
        // It might be a variable or expression if not quoted? 
        // But TEXT inputs are usually string blocks.
        // If it's not a literal, we can't easily merge it into the f-string literal.
        // We'd have to make it {var}. 
        // But for this block, we assume TEXT inputs are static text pieces.
        // If a variable is connected to TEXT input, it returns 'variable_name'.
        // stripQuotes wont match. We return 'variable_name'.
        // This puts 'variable_name' literally into the f-string: f"variable_name".
        // This is technically what the user 'sees' (a block with that text).
        return txt;
    }

    let code = 'f"';

    for (let i = 0; i < block.partCount_; i++) {
        let textCode = Blockly.Python.valueToCode(block, 'TEXT' + i, Blockly.Python.ORDER_NONE) || "''";
        let exprCode = Blockly.Python.valueToCode(block, 'EXPR' + i, Blockly.Python.ORDER_NONE) || "";

        // Add text part
        code += getContent(textCode);

        // Add expression part
        if (exprCode) {
            code += `{${exprCode}}`;
        }
    }

    // Final text part
    let lastTextCode = Blockly.Python.valueToCode(block, 'TEXT' + block.partCount_, Blockly.Python.ORDER_NONE) || "''";
    code += getContent(lastTextCode);

    code += '"';

    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['class_def'] = function (block) {
    var name = block.getFieldValue('NAME');
    var members = Blockly.Python.statementToCode(block, 'MEMBERS') || '    pass';
    var code = `class ${name}:\n${members}\n`;
    Blockly.Python.definitions_['class_' + name] = code;
    return '';
};

Blockly.Python['class_obj_new'] = function (block) {
    var name = block.getFieldValue('NAME');
    return [`${name}()`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['math_random_range'] = function (block) {
    var min = Blockly.Python.valueToCode(block, 'MIN', Blockly.Python.ORDER_ATOMIC) || '0';
    var max = Blockly.Python.valueToCode(block, 'MAX', Blockly.Python.ORDER_ATOMIC) || '100';
    return [`random.randint(${min}, ${max})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['datetime_now'] = function (block) {
    var fmt = Blockly.Python.valueToCode(block, 'FMT', Blockly.Python.ORDER_ATOMIC) || '"%Y-%m-%d %H:%M:%S"';
    return [`datetime.datetime.now().strftime(${fmt})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['control_try_except'] = function (block) {
    var t = Blockly.Python.statementToCode(block, 'TRY') || '    pass';
    var e = Blockly.Python.statementToCode(block, 'EXCEPT') || '    pass';
    var f = Blockly.Python.statementToCode(block, 'FINALLY') || '';
    var code = `try:\n${t}\nexcept Exception as e:\n${e}\n`;
    if (f) code += `finally:\n${f}\n`;
    return code;
};

Blockly.Python['type_cast'] = function (block) {
    var t = block.getFieldValue('TYPE');
    var v = Blockly.Python.valueToCode(block, 'VAL', Blockly.Python.ORDER_ATOMIC) || 'None';
    return [`${t}(${v})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['file_write'] = function (block) {
    var f = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '"output.txt"';
    var c = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '""';
    return `with open(${f}, 'w') as f_obj:\n    f_obj.write(str(${c}))\n`;
};

Blockly.Python['file_read'] = function (block) {
    var f = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '"output.txt"';
    return [`open(${f}, 'r').read()`, Blockly.Python.ORDER_ATOMIC];
};

// --- Telegram Event Generators ---

Blockly.Python['telegram_on_chat_member'] = function (block) {
    var type = block.getFieldValue('TYPE');
    var statements_do = Blockly.Python.statementToCode(block, 'DO');

    var funcName = 'member_' + type.toLowerCase() + '_' + Math.random().toString(36).substr(2, 5);
    var filter = (type === 'JOINED') ? 'filters.StatusUpdate.NEW_CHAT_MEMBERS' : 'filters.StatusUpdate.LEFT_CHAT_MEMBER';

    var functionCode = `
async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):
${statements_do || '    pass'}
`;
    Blockly.Python.definitions_[funcName] = functionCode;
    return `application.add_handler(MessageHandler(${filter}, ${funcName}))\n`;
};

Blockly.Python['telegram_on_callback'] = function (block) {
    var pattern = block.getFieldValue('PATTERN');
    var statements_do = Blockly.Python.statementToCode(block, 'DO');

    var funcName = 'callback_' + pattern.replace(/\W/g, '') + '_' + Math.random().toString(36).substr(2, 5);

    var functionCode = `
async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
${statements_do || '    pass'}
`;
    Blockly.Python.definitions_[funcName] = functionCode;
    // Use Regex pattern matching for callback data
    return `application.add_handler(CallbackQueryHandler(${funcName}, pattern='^${pattern}$'))\n`;
};

// --- Telegram Action Generators ---

Blockly.Python['telegram_inline_button'] = function (block) {
    var label = block.getFieldValue('LABEL');
    var data = block.getFieldValue('DATA');
    // Returns a list with one button, representing a Row with 1 button.
    // We add a comma at the end because it will be inside a list of rows.
    return `[InlineKeyboardButton("${label}", callback_data="${data}")],\n`;
};

Blockly.Python['telegram_send_inline_keyboard'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '"Choose:"';
    var buttons = Blockly.Python.statementToCode(block, 'BUTTONS');
    // buttons string will look like "[btn], [btn], "

    // We need to ensure we have imports. This is a hacky check, better done in main.js
    // Assuming Imports are updated in main.js

    return `await update.message.reply_text(${text}, reply_markup=InlineKeyboardMarkup([\n${buttons}]))\n`;
};

Blockly.Python['telegram_edit_message'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || '"Updated text"';
    var msg_id = Blockly.Python.valueToCode(block, 'MSG_ID', Blockly.Python.ORDER_ATOMIC);

    if (msg_id) {
        return `await context.bot.edit_message_text(chat_id=update.effective_chat.id, message_id=${msg_id}, text=${text})\n`;
    } else {
        // Fallback to callback query editing (standard for buttons)
        return `if update.callback_query:\n    await update.callback_query.edit_message_text(text=${text})\n`;
    }
};

Blockly.Python['telegram_delete_message'] = function (block) {
    var msg_id = Blockly.Python.valueToCode(block, 'MSG_ID', Blockly.Python.ORDER_ATOMIC);

    if (msg_id) {
        return `await context.bot.delete_message(chat_id=update.effective_chat.id, message_id=${msg_id})\n`;
    } else {
        // Delete current message
        return `await update.message.delete()\n`;
    }
};

// ==========================================
// MESSAGE ID HELPERS
// generators
// ==========================================

Blockly.Python['telegram_incoming_message_id'] = function (block) {
    return [`update.message.message_id`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['telegram_reply_text_get_id'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
    // Send message and get the object.id
    // This returns the ID directly. We use (await ...).message_id
    // Note: await must be inside async func.
    return [`(await update.message.reply_text(${text})).message_id`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['telegram_forward_message'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    return `await update.message.forward(chat_id=${chat_id})\n`;
};

// --- Telegram Helpers Generators ---

Blockly.Python['telegram_get_chat_id'] = function (block) {
    return [`update.effective_chat.id`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['telegram_get_chat_member_count'] = function (block) {
    var code = `await context.bot.get_chat_member_count(chat_id=update.effective_chat.id)`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['telegram_get_chat_type'] = function (block) {
    var code = `update.effective_chat.type`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['telegram_mention_user'] = function (block) {
    var id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || '0';
    var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC) || '"User"';
    var code = `f"<a href='tg://user?id={${id}}'>{${name}}</a>"`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// --- Data Utilities Generators ---

Blockly.Python['list_append'] = function (block) {
    var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
    var item = Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_ATOMIC) || 'None';
    if (!list) return '';

    // If adding a list literal (from 'create list with'), use extend to flatten
    var itemBlock = block.getInputTargetBlock('ITEM');
    if (itemBlock && itemBlock.type === 'lists_create_with') {
        return `${list}.extend(${item})\n`;
    }

    return `${list}.append(${item})\n`;
};

Blockly.Python['list_remove'] = function (block) {
    var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
    var item = Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_ATOMIC) || 'None';
    if (!list) return '';
    return `if ${item} in ${list}:\n    ${list}.remove(${item})\n`;
};

Blockly.Python['dict_keys'] = function (block) {
    var dict = Blockly.Python.valueToCode(block, 'DICT', Blockly.Python.ORDER_ATOMIC) || '{}';
    return [`list(${dict}.keys())`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['json_stringify'] = function (block) {
    var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC) || 'None';
    return [`json.dumps(${data})`, Blockly.Python.ORDER_ATOMIC];
};

// --- Polls & Quizzes Generators ---

Blockly.Python['telegram_send_poll'] = function (block) {
    var question = Blockly.Python.valueToCode(block, 'QUESTION', Blockly.Python.ORDER_ATOMIC) || '"Poll"';
    var options = Blockly.Python.valueToCode(block, 'OPTIONS', Blockly.Python.ORDER_ATOMIC) || '[]';
    var type = block.getFieldValue('TYPE');
    var anonymous = block.getFieldValue('ANONYMOUS').toLowerCase() === 'true' ? 'True' : 'False';

    return `await update.message.reply_poll(question=${question}, options=${options}, type="${type}", is_anonymous=${anonymous})\n`;
};

// --- Inline Bots Generators ---

Blockly.Python['telegram_on_inline_query'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'inline_query_' + Math.random().toString(36).substr(2, 5);

    var functionCode = `
async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.inline_query.query
${statements_do || '    pass'}
`;
    Blockly.Python.definitions_[funcName] = functionCode;
    return `application.add_handler(InlineQueryHandler(${funcName}))\n`;
};

Blockly.Python['telegram_answer_inline_query'] = function (block) {
    var results = Blockly.Python.valueToCode(block, 'RESULTS', Blockly.Python.ORDER_ATOMIC) || '[]';
    return `await update.inline_query.answer(${results})\n`;
};

Blockly.Python['telegram_inline_result_article'] = function (block) {
    var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC) || '"Title"';
    var desc = Blockly.Python.valueToCode(block, 'DESC', Blockly.Python.ORDER_ATOMIC) || '""';
    var message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC) || '"Message"';

    // Generate a random ID for the result using uuid import (will add to main.js)
    var code = `InlineQueryResultArticle(
            id=str(uuid.uuid4()),
            title=${title},
            description=${desc},
            input_message_content=InputTextMessageContent(${message})
        )`;

    return [code, Blockly.Python.ORDER_ATOMIC];
};

// ==========================================
// CONVERSATION STATE MANAGEMENT
// generators
// ==========================================

Blockly.Python['telegram_set_user_state'] = function (block) {
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_user.id';
    var state = Blockly.Python.valueToCode(block, 'STATE', Blockly.Python.ORDER_ATOMIC) || "''";
    // We use a prefix 'state_' to avoid collision with other keys
    return `db_set(f"state_{${user_id}}", ${state})\n`;
};

Blockly.Python['telegram_get_user_state'] = function (block) {
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_user.id';
    return [`db_get(f"state_{${user_id}}")`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['telegram_clear_user_state'] = function (block) {
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_user.id';
    return `db_set(f"state_{${user_id}}", "")\n`;
};

// ==========================================
// ADVANCED MEDIA BLOCKS
// generators
// ==========================================

Blockly.Python['telegram_send_video'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var video = Blockly.Python.valueToCode(block, 'VIDEO_URL', Blockly.Python.ORDER_ATOMIC) || "''";
    var caption = Blockly.Python.valueToCode(block, 'CAPTION', Blockly.Python.ORDER_ATOMIC) || "None";

    return `await context.bot.send_video(chat_id=${chat_id}, video=${video}, caption=${caption})\n`;
};

Blockly.Python['telegram_send_document'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var doc = Blockly.Python.valueToCode(block, 'DOC_URL', Blockly.Python.ORDER_ATOMIC) || "''";

    return `await context.bot.send_document(chat_id=${chat_id}, document=${doc})\n`;
};

Blockly.Python['telegram_send_audio'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var audio = Blockly.Python.valueToCode(block, 'AUDIO_URL', Blockly.Python.ORDER_ATOMIC) || "''";

    return `await context.bot.send_audio(chat_id=${chat_id}, audio=${audio})\n`;
};

Blockly.Python['telegram_send_sticker'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var sticker = Blockly.Python.valueToCode(block, 'STICKER_ID', Blockly.Python.ORDER_ATOMIC) || "''";

    return `await context.bot.send_sticker(chat_id=${chat_id}, sticker=${sticker})\n`;
};

Blockly.Python['telegram_send_location'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var lat = Blockly.Python.valueToCode(block, 'LAT', Blockly.Python.ORDER_ATOMIC) || "0.0";
    var lon = Blockly.Python.valueToCode(block, 'LON', Blockly.Python.ORDER_ATOMIC) || "0.0";

    return `await context.bot.send_location(chat_id=${chat_id}, latitude=${lat}, longitude=${lon})\n`;
};


// ==========================================
// GROUP MODERATION BLOCKS
// generators
// ==========================================

Blockly.Python['telegram_ban_member'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'None';

    return `await context.bot.ban_chat_member(chat_id=${chat_id}, user_id=${user_id})\n`;
};

Blockly.Python['telegram_unban_member'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'None';

    return `await context.bot.unban_chat_member(chat_id=${chat_id}, user_id=${user_id})\n`;
};

Blockly.Python['telegram_pin_message'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var msg_id = Blockly.Python.valueToCode(block, 'MESSAGE_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_message.id';

    return `await context.bot.pin_chat_message(chat_id=${chat_id}, message_id=${msg_id})\n`;
};

Blockly.Python['telegram_unpin_message'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var msg_id = Blockly.Python.valueToCode(block, 'MESSAGE_ID', Blockly.Python.ORDER_ATOMIC) || 'None';

    if (msg_id === 'None') {
        return `await context.bot.unpin_all_chat_messages(chat_id=${chat_id})\n`;
    } else {
        return `await context.bot.unpin_chat_message(chat_id=${chat_id}, message_id=${msg_id})\n`;
    }
};

const ChatPermissions = 'from telegram import ChatPermissions'; // Helper ref

Blockly.Python['telegram_restrict_member'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'None';

    // Default to mute (can't send messages)
    var permissions = "ChatPermissions(can_send_messages=False, can_send_media_messages=False, can_send_polls=False, can_send_other_messages=False)";

    return `await context.bot.restrict_chat_member(chat_id=${chat_id}, user_id=${user_id}, permissions=${permissions})\n`;
};

// ==========================================
// SCHEDULING & TIMERS
// generators
// ==========================================

Blockly.Python['utils_wait'] = function (block) {
    var seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_ATOMIC) || '0';
    return `await asyncio.sleep(${seconds})\n`;
};


// ==========================================
// ADMIN & PERMISSIONS
// generators
// ==========================================

Blockly.Python['telegram_is_admin'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_chat.id';
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || 'update.effective_user.id';

    // We define a helper function inline or assume it exists, but for cleaner code we'll use a lambda-like approach or just direct check.
    // However, 'get_chat_member' is async. We need to await inside the expression? No, await can't be in expression directly in some contexts easily.
    // BUT since we are in async functions, we can generate: (await context.bot.get_chat_member(...)).status in [...]

    var code = `(await context.bot.get_chat_member(chat_id=${chat_id}, user_id=${user_id})).status in ['creator', 'administrator']`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// ==========================================
// UTILITIES (LOGGING & REGEX)
// generators
// ==========================================

Blockly.Python['text_regex_extract'] = function (block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";
    var pattern = Blockly.Python.valueToCode(block, 'PATTERN', Blockly.Python.ORDER_ATOMIC) || "''";

    // Ensure import re is present (we might need to add it to Finish check, but usually it's standard)
    // Actually our template has standard imports. We should add 're' there.
    return [`re.findall(${pattern}, ${text})`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['utils_log'] = function (block) {
    var msg = Blockly.Python.valueToCode(block, 'MSG', Blockly.Python.ORDER_ATOMIC) || "''";
    return `logging.info(f"BOT LOG: {${msg}}")\nprint(f"BOT LOG: {${msg}}")\n`;
};

// ==========================================
// DEEP LINKING
// generators
// ==========================================

Blockly.Python['telegram_get_deep_link_payload'] = function (block) {
    // /start payload -> context.args[0]
    return [`(context.args[0] if context.args and len(context.args) > 0 else "")`, Blockly.Python.ORDER_ATOMIC];
};

// ==========================================
// MEDIA CAPTURE EVENTS
// generators
// ==========================================

Blockly.Python['telegram_on_photo'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'on_photo_' + Math.random().toString(36).substring(7);

    var code = `async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "pass"}\n`;

    // Use add_handler code at the end
    var setup_code = `app.add_handler(MessageHandler(filters.PHOTO, ${funcName}))\n`;

    // HACK: We attach the setup code to the function definition so defined blocks get registered.
    // In our finish(), we don't automatically scan functions to register them EXCEPT via this hack or a global registry.
    // But wait, our 'telegram_bot_setup' block isn't gathering these.
    // The previous event blocks relied on simply returning the definition string, but how are they registered?
    // Ah, we are NOT appending to 'app' here.
    // The previous patterns: telegram_on_command returns a tuple? No.
    // Let's check 'telegram_on_command' implementation. 
    // It returns code string. BUT where is 'app.add_handler'? 
    // It seems missing in my previous generator logic for events? 
    // WAIT, 'telegram_bot_setup' assumes a main list. 
    // Actually, looking at 'telegram_on_command' previously (I need to check it), it normally generates the function AND the handler registration line is usually expected to be in 'main' block.
    // However, since we don't have a rigid main block structure enforcing order, the best way in this simplified Generator is to return the function def AND the registration line appended. 
    // The 'finish' function puts all definitions at top. 
    // WE NEED A WAY TO REGISTER HANDLERS. 
    // Current strategy: The user code is just a script. We need 'if __name__ == "__main__":' block that adds handlers.
    // My previous implementations of 'telegram_on_command' might have just defined the function but not added it! 
    // Let's assume the user uses a "Bot Setup" block which *should* hold the handlers, but usually users place events freely.
    // FIX: We will return the Handler Registration line as a comment or formatted string that the 'finish' wrapper can extract? 
    // No, standard Blockly Python generates text. 
    // WE WILL USE A GLOBAL ARRAY `Blockly.Python.definitions_` for the function, and return the `app.add_handler` line as the block code!

    Blockly.Python.definitions_[funcName] = code;
    return `application.add_handler(MessageHandler(filters.PHOTO, ${funcName}))\n`;
};
// NOTE: I will apply this same pattern to all media events.

Blockly.Python['telegram_on_video'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'on_video_' + Math.random().toString(36).substring(7);
    Blockly.Python.definitions_[funcName] = `async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "pass"}\n`;
    return `application.add_handler(MessageHandler(filters.VIDEO, ${funcName}))\n`;
};

Blockly.Python['telegram_on_document'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'on_document_' + Math.random().toString(36).substring(7);
    Blockly.Python.definitions_[funcName] = `async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "pass"}\n`;
    return `application.add_handler(MessageHandler(filters.Document.ALL, ${funcName}))\n`;
};

Blockly.Python['telegram_on_voice'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'on_voice_' + Math.random().toString(36).substring(7);
    Blockly.Python.definitions_[funcName] = `async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "pass"}\n`;
    return `application.add_handler(MessageHandler(filters.VOICE | filters.AUDIO, ${funcName}))\n`;
};

// ==========================================
// MEDIA UTILITIES
// generators
// ==========================================

Blockly.Python['telegram_get_file_id'] = function (block) {
    // Tries to get file_id from any media message
    var code = `(
    update.message.photo[-1].file_id if update.message.photo else
    update.message.video.file_id if update.message.video else
    update.message.document.file_id if update.message.document else
    update.message.voice.file_id if update.message.voice else
    update.message.audio.file_id if update.message.audio else
    update.message.sticker.file_id if update.message.sticker else None
)`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['py_custom_code'] = function (block) {
    var code = block.getFieldValue('CODE');
    return code + '\n';
};

Blockly.Python['telegram_download_file'] = function (block) {
    var file_id = Blockly.Python.valueToCode(block, 'FILE_ID', Blockly.Python.ORDER_ATOMIC) || "None";
    var path = Blockly.Python.valueToCode(block, 'PATH', Blockly.Python.ORDER_ATOMIC) || "None";

    // Logic: Get file object -> download
    var code = `
try:
    new_file = await context.bot.get_file(${file_id})
    file_path = ${path} or f"{new_file.file_id}"
    await new_file.download_to_drive(file_path)
except Exception as e:
    logging.error(f"Download failed: {e}")
`;
    return code;
};

// ==========================================
// CHANNEL MANAGEMENT
// generators
// ==========================================

Blockly.Python['telegram_channel_post'] = function (block) {
    var channel_id = Blockly.Python.valueToCode(block, 'CHANNEL_ID', Blockly.Python.ORDER_ATOMIC) || "''";
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";

    return `await context.bot.send_message(chat_id=${channel_id}, text=${text})\n`;
};

Blockly.Python['telegram_channel_edit'] = function (block) {
    var channel_id = Blockly.Python.valueToCode(block, 'CHANNEL_ID', Blockly.Python.ORDER_ATOMIC) || "''";
    var msg_id = Blockly.Python.valueToCode(block, 'MSG_ID', Blockly.Python.ORDER_ATOMIC) || "0";
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC) || "''";

    return `await context.bot.edit_message_text(chat_id=${channel_id}, message_id=${msg_id}, text=${text})\n`;
};

Blockly.Python['telegram_handle_join'] = function (block) {
    var chat_id = Blockly.Python.valueToCode(block, 'CHAT_ID', Blockly.Python.ORDER_ATOMIC) || "update.effective_chat.id";
    var user_id = Blockly.Python.valueToCode(block, 'USER_ID', Blockly.Python.ORDER_ATOMIC) || "update.effective_user.id";
    var action = block.getFieldValue('ACTION');

    if (action === 'APPROVE') {
        return `await context.bot.approve_chat_join_request(chat_id=${chat_id}, user_id=${user_id})\n`;
    } else {
        return `await context.bot.decline_chat_join_request(chat_id=${chat_id}, user_id=${user_id})\n`;
    }
};

Blockly.Python['telegram_on_join_request'] = function (block) {
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'on_join_' + Math.random().toString(36).substring(7);

    // Check specific import for this? ChatJoinRequestHandler is in telegram.ext
    Blockly.Python.definitions_[funcName] = `async def ${funcName}(update: Update, context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "pass"}\n`;
    return `application.add_handler(ChatJoinRequestHandler(${funcName}))\n`;
};


// ==========================================
// SCHEDULING (JOB QUEUE)
// generators
// ==========================================

Blockly.Python['telegram_schedule_interval'] = function (block) {
    var seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_ATOMIC) || '60';
    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'job_interval_' + Math.random().toString(36).substring(7);

    // Job callback signature: async def job(context: ContextTypes.DEFAULT_TYPE):
    var jobCode = `async def ${funcName}(context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "print('Interval job running')"}\n`;
    Blockly.Python.definitions_[funcName] = jobCode;

    // Register job
    // Note: application.job_queue is likely available if we use ApplicationBuilder
    return `application.job_queue.run_repeating(${funcName}, interval=${seconds}, first=10)\n`;
};

Blockly.Python['telegram_schedule_daily'] = function (block) {
    var timeStr = block.getFieldValue('TIME') || "09:00";
    var parts = timeStr.split(':');
    var h = parseInt(parts[0]);
    var m = parseInt(parts[1]);

    var statements_do = Blockly.Python.statementToCode(block, 'DO');
    var funcName = 'job_daily_' + Math.random().toString(36).substring(7);

    var jobCode = `async def ${funcName}(context: ContextTypes.DEFAULT_TYPE):\n${statements_do || Blockly.Python.INDENT + "print('Daily job running')"}\n`;
    Blockly.Python.definitions_[funcName] = jobCode;

    return `application.job_queue.run_daily(${funcName}, time=datetime.time(hour=${h}, minute=${m}, tzinfo=datetime.timezone.utc))\n`;
};

// ==========================================
// SECURITY & ENVIRONMENT (GENERATORS)
// ==========================================

Blockly.Python['env_get_var'] = function (block) {
    var varName = Blockly.Python.valueToCode(block, 'VAR_NAME', Blockly.Python.ORDER_ATOMIC) || '"KEY"';
    return [`os.getenv(${varName})`, Blockly.Python.ORDER_ATOMIC];
};

// ==========================================
// ADVANCED UTILITIES (GENERATORS)
// ==========================================

Blockly.Python['math_advanced'] = function (block) {
    var op = block.getFieldValue('OP');
    var num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC) || '0';

    // Requires 'import math' in main.js
    switch (op) {
        case 'ROUND': return [`round(${num})`, Blockly.Python.ORDER_ATOMIC];
        case 'CEIL': return [`math.ceil(${num})`, Blockly.Python.ORDER_ATOMIC];
        case 'FLOOR': return [`math.floor(${num})`, Blockly.Python.ORDER_ATOMIC];
        case 'SQRT': return [`math.sqrt(${num})`, Blockly.Python.ORDER_ATOMIC];
        case 'ABS': return [`abs(${num})`, Blockly.Python.ORDER_ATOMIC];
    }
    return ['0', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['math_modulo'] = function (block) {
    var dividend = Blockly.Python.valueToCode(block, 'DIVIDEND', Blockly.Python.ORDER_ATOMIC) || '0';
    var divisor = Blockly.Python.valueToCode(block, 'DIVISOR', Blockly.Python.ORDER_ATOMIC) || '1';
    return [`${dividend} % ${divisor}`, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['datetime_advanced'] = function (block) {
    var op = block.getFieldValue('OP');
    var input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC) || 'datetime.datetime.now()';
    var param = Blockly.Python.valueToCode(block, 'PARAM', Blockly.Python.ORDER_ATOMIC) || '0';

    // Requires 'import datetime' already included
    if (op === 'FORMAT') {
        return [`${input}.strftime(${param})`, Blockly.Python.ORDER_ATOMIC];
    } else if (op === 'ADD_DAYS') {
        return [`${input} + datetime.timedelta(days=${param})`, Blockly.Python.ORDER_ATOMIC];
    } else if (op === 'SUB_DAYS') {
        return [`${input} - datetime.timedelta(days=${param})`, Blockly.Python.ORDER_ATOMIC];
    }
    return ['None', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['file_manage'] = function (block) {
    var op = block.getFieldValue('OP');
    var path = Blockly.Python.valueToCode(block, 'PATH', Blockly.Python.ORDER_ATOMIC) || '"file.txt"';

    if (op === 'EXISTS') {
        return [`os.path.exists(${path})`, Blockly.Python.ORDER_ATOMIC];
    } else if (op === 'DELETE') {
        return [`(os.remove(${path}) if os.path.exists(${path}) else None)`, Blockly.Python.ORDER_ATOMIC];
    } else if (op === 'LIST') {
        return [`os.listdir(${path})`, Blockly.Python.ORDER_ATOMIC];
    }
    return ['None', Blockly.Python.ORDER_ATOMIC];
};



// 52. Raw Python Execution Generator
Blockly.Python['utils_exec_python'] = function (block) {
    var code = Blockly.Python.valueToCode(block, 'CODE', Blockly.Python.ORDER_ATOMIC) || "''";

    // We want the RAW content of the string, not the quoted version if possible, 
    // BUT 'valueToCode' returns a python expression (string literal).
    // If the user inputs a string block: "print('hi')", valueToCode returns "\"print('hi')\"".
    // We want to execute: print('hi').
    // So we primarily want to strip the outer quotes if it's a static string.

    function stripQuotes(txt) {
        if (!txt) return "";
        if ((txt.startsWith('"') && txt.endsWith('"')) || (txt.startsWith("'") && txt.endsWith("'"))) {
            return txt.slice(1, -1);
        }
        return txt;
    }

    // However, if the user connects a variable, we can't 'execute' a variable in this context unless we use exec().
    // The intended use is normally connecting a multiline string block or text block.
    // If we just dump the string content, it becomes code.
    // Example: Text Block "import math" -> valueToCode=' "import math" ' -> strip -> import math.

    var raw_code = stripQuotes(code);

    // Unescape newlines if they are escaped (e.g. \\n -> \n)
    raw_code = raw_code.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");

    return raw_code + "\n";
};
