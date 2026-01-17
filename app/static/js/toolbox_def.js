var TOOLBOX_CONFIG = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category", "name": "Bot Setup", "colour": "230",
            "contents": [{ "kind": "block", "type": "telegram_bot_setup" }]
        },

        {
            "kind": "category", "name": "Events", "colour": "120",
            "contents": [
                { "kind": "block", "type": "telegram_on_command" },
                { "kind": "block", "type": "telegram_on_message" },
                { "kind": "block", "type": "telegram_on_photo" },
                { "kind": "block", "type": "telegram_on_video" },
                { "kind": "block", "type": "telegram_on_document" },
                { "kind": "block", "type": "telegram_on_voice" },
                { "kind": "block", "type": "telegram_on_chat_member" },
                { "kind": "block", "type": "telegram_on_callback" },
                { "kind": "block", "type": "telegram_on_inline_query" }
            ]
        },
        {
            "kind": "category", "name": "Conversation & State", "colour": "290",
            "contents": [
                { "kind": "block", "type": "telegram_set_user_state" },
                { "kind": "block", "type": "telegram_get_user_state" },
                { "kind": "block", "type": "telegram_clear_user_state" }
            ]
        },
        {
            "kind": "category", "name": "Actions", "colour": "160",
            "contents": [
                { "kind": "block", "type": "telegram_reply_text" },
                { "kind": "block", "type": "telegram_reply_text_get_id" },
                { "kind": "block", "type": "telegram_send_photo" },
                { "kind": "block", "type": "telegram_edit_message" },
                { "kind": "block", "type": "telegram_delete_message" },
                { "kind": "block", "type": "telegram_forward_message" },
                { "kind": "block", "type": "telegram_db_set" },
                { "kind": "block", "type": "telegram_kick_user" },
                { "kind": "block", "type": "telegram_send_poll" }
            ]
        },
        {
            "kind": "category", "name": "Rich Media", "colour": "160",
            "contents": [
                { "kind": "block", "type": "telegram_send_video" },
                { "kind": "block", "type": "telegram_send_document" },
                { "kind": "block", "type": "telegram_send_audio" },
                { "kind": "block", "type": "telegram_send_sticker" },
                { "kind": "block", "type": "telegram_send_location" },
                { "kind": "block", "type": "telegram_download_file" }
            ]
        },
        {
            "kind": "category", "name": "Group Admin", "colour": "0",
            "contents": [
                { "kind": "block", "type": "telegram_ban_member" },
                { "kind": "block", "type": "telegram_unban_member" },
                { "kind": "block", "type": "telegram_restrict_member" },
                { "kind": "block", "type": "telegram_pin_message" },
                { "kind": "block", "type": "telegram_unpin_message" }
            ]
        },
        {
            "kind": "category", "name": "Channel Mgmt", "colour": "280",
            "contents": [
                { "kind": "block", "type": "telegram_channel_post" },
                { "kind": "block", "type": "telegram_channel_edit" },
                { "kind": "block", "type": "telegram_handle_join" } // Note: Not fully impl but in list
            ]
        },
        {
            "kind": "category", "name": "Scheduling", "colour": "230",
            "contents": [
                { "kind": "block", "type": "utils_wait" },
                { "kind": "block", "type": "telegram_schedule_interval" }, // Not impl
                { "kind": "block", "type": "telegram_schedule_daily" } // Not impl
            ]
        },
        {
            "kind": "category", "name": "Permissions", "colour": "210",
            "contents": [
                { "kind": "block", "type": "telegram_is_admin" }
            ]
        },
        {
            "kind": "category", "name": "Utilities", "colour": "60",
            "contents": [
                { "kind": "block", "type": "text_regex_extract" },
                { "kind": "block", "type": "utils_log" },
                { "kind": "block", "type": "env_get_var" },
                { "kind": "block", "type": "utils_exec_python" },
                { "kind": "block", "type": "py_custom_code" }
            ]
        },
        {
            "kind": "category", "name": "Buttons & Inline", "colour": "30",
            "contents": [
                { "kind": "block", "type": "telegram_send_inline_keyboard" },
                { "kind": "block", "type": "telegram_inline_button" },
                { "kind": "block", "type": "telegram_answer_inline_query" },
                { "kind": "block", "type": "telegram_inline_result_article" }
            ]
        },
        { "kind": "sep" },
        {
            "kind": "category", "name": "Logic & Loops", "colour": "210",
            "contents": [
                { "kind": "block", "type": "controls_if" },
                { "kind": "block", "type": "controls_repeat_ext", "inputs": { "TIMES": { "block": { "type": "math_number", "fields": { "NUM": 10 } } } } },
                { "kind": "block", "type": "controls_whileUntil" },
                { "kind": "block", "type": "controls_forEach" },
                { "kind": "block", "type": "logic_boolean" },
                { "kind": "block", "type": "logic_compare" },
                { "kind": "block", "type": "logic_operation" },
                { "kind": "block", "type": "control_try_except" }
            ]
        },
        {
            "kind": "category", "name": "Math & Random", "colour": "230",
            "contents": [
                { "kind": "block", "type": "math_number" },
                { "kind": "block", "type": "math_arithmetic" },
                { "kind": "block", "type": "math_random_range" },
                { "kind": "block", "type": "math_advanced" }, // Not impl in logic
                { "kind": "block", "type": "math_modulo" }
            ]
        },
        {
            "kind": "category", "name": "Text & Dates", "colour": "160",
            "contents": [
                { "kind": "block", "type": "text" },
                { "kind": "block", "type": "text_join" },
                { "kind": "block", "type": "text_print" },
                { "kind": "block", "type": "text_split" },
                { "kind": "block", "type": "text_replace" },
                { "kind": "block", "type": "text_check_matches" },
                { "kind": "block", "type": "text_change_case" },
                { "kind": "block", "type": "text_fstring" },
                { "kind": "block", "type": "datetime_now" },
                { "kind": "block", "type": "datetime_advanced" } // Not impl
            ]
        },
        {
            "kind": "category", "name": "Lists & Files", "colour": "260",
            "contents": [
                { "kind": "block", "type": "lists_create_with" },
                { "kind": "block", "type": "lists_getIndex" },
                { "kind": "block", "type": "lists_length" },
                { "kind": "block", "type": "list_def" },
                { "kind": "block", "type": "list_append" },
                { "kind": "block", "type": "list_remove" },
                { "kind": "block", "type": "file_write" },
                { "kind": "block", "type": "file_read" },
                { "kind": "block", "type": "file_manage" } // Not impl
            ]
        },
        {
            "kind": "category", "name": "Dicts, Tuples, Cast", "colour": "45",
            "contents": [
                { "kind": "block", "type": "dict_new" },
                { "kind": "block", "type": "dict_def" },
                { "kind": "block", "type": "dict_set" },
                { "kind": "block", "type": "dict_get" },
                { "kind": "block", "type": "dict_keys" },
                { "kind": "block", "type": "tuple_create" },
                { "kind": "block", "type": "type_cast" },
                { "kind": "block", "type": "json_stringify" }
            ]
        },
        {
            "kind": "category", "name": "Functions", "colour": "290", "custom": "PROCEDURE"
        },
        {
            "kind": "category", "name": "Classes", "colour": "300",
            "contents": [
                { "kind": "block", "type": "class_def" },
                { "kind": "block", "type": "class_obj_new" }
            ]
        },
        {
            "kind": "category", "name": "Variables", "custom": "VARIABLE", "colour": "330"
        },
        {
            "kind": "category", "name": "Telegram Data", "colour": "290",
            "contents": [
                { "kind": "block", "type": "telegram_get_chat_id" },
                { "kind": "block", "type": "telegram_get_user_id" },
                { "kind": "block", "type": "telegram_get_user_name" },
                { "kind": "block", "type": "telegram_get_message_text" },
                { "kind": "block", "type": "telegram_db_get" },
                { "kind": "block", "type": "telegram_get_chat_member_count" },
                { "kind": "block", "type": "telegram_get_chat_type" },
                { "kind": "block", "type": "telegram_mention_user" },
                { "kind": "block", "type": "telegram_incoming_message_id" },
                { "kind": "block", "type": "telegram_get_deep_link_payload" },
                { "kind": "block", "type": "telegram_get_file_id" }
            ]
        },
        {
            "kind": "category", "name": "Network", "colour": "210",
            "contents": [
                { "kind": "block", "type": "api_request" },
                { "kind": "block", "type": "json_parse" }
            ]
        }
    ]
};
