// Auto-generated Block Definitions for python-telegram-bot

Blockly.Blocks['auto_addStickerToSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_addStickerToSet", "message0": "\ud83e\udd16 addStickerToSet user_id %1 name %2 sticker %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "STICKER", "check": null}], "colour": 60, "tooltip": "Use this method to add a new sticker to a set created by the bot. The format of the added", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.addStickerToSet", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_add_sticker_to_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_add_sticker_to_set", "message0": "\ud83e\udd16 add_sticker_to_set user_id %1 name %2 sticker %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "STICKER", "check": null}], "colour": 60, "tooltip": "Use this method to add a new sticker to a set created by the bot. The format of the added", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.add_sticker_to_set", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_answerCallbackQuery'] = {
    init: function() {
        this.jsonInit({"type": "auto_answerCallbackQuery", "message0": "\ud83e\udd16 answerCallbackQuery callback_query_id %1 text (optional) %2 show_alert (optional) %3 url (optional) %4 cache_time (optional) %5", "args0": [{"type": "input_value", "name": "CALLBACK_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "TEXT", "check": null}, {"type": "input_value", "name": "SHOW_ALERT", "check": null}, {"type": "input_value", "name": "URL", "check": null}, {"type": "input_value", "name": "CACHE_TIME", "check": null}], "colour": 120, "tooltip": "Use this method to send answers to callback queries sent from inline keyboards. The answer", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answerCallbackQuery", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answerInlineQuery'] = {
    init: function() {
        this.jsonInit({"type": "auto_answerInlineQuery", "message0": "\ud83e\udd16 answerInlineQuery inline_query_id %1 results %2 cache_time (optional) %3 is_personal (optional) %4 next_offset (optional) %5 button (optional) %6 current_offset (optional) %7", "args0": [{"type": "input_value", "name": "INLINE_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "RESULTS", "check": null}, {"type": "input_value", "name": "CACHE_TIME", "check": null}, {"type": "input_value", "name": "IS_PERSONAL", "check": null}, {"type": "input_value", "name": "NEXT_OFFSET", "check": null}, {"type": "input_value", "name": "BUTTON", "check": null}, {"type": "input_value", "name": "CURRENT_OFFSET", "check": null}], "colour": 120, "tooltip": "Use this method to send answers to an inline query. No more than", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answerInlineQuery", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answerPreCheckoutQuery'] = {
    init: function() {
        this.jsonInit({"type": "auto_answerPreCheckoutQuery", "message0": "\ud83e\udd16 answerPreCheckoutQuery pre_checkout_query_id %1 ok %2 error_message (optional) %3", "args0": [{"type": "input_value", "name": "PRE_CHECKOUT_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "OK", "check": "Boolean"}, {"type": "input_value", "name": "ERROR_MESSAGE", "check": null}], "colour": 120, "tooltip": "Once the user has confirmed their payment and shipping details, the Bot API sends the final", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answerPreCheckoutQuery", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answerShippingQuery'] = {
    init: function() {
        this.jsonInit({"type": "auto_answerShippingQuery", "message0": "\ud83e\udd16 answerShippingQuery shipping_query_id %1 ok %2 shipping_options (optional) %3 error_message (optional) %4", "args0": [{"type": "input_value", "name": "SHIPPING_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "OK", "check": "Boolean"}, {"type": "input_value", "name": "SHIPPING_OPTIONS", "check": null}, {"type": "input_value", "name": "ERROR_MESSAGE", "check": null}], "colour": 120, "tooltip": "If you sent an invoice requesting a shipping address and the parameter", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answerShippingQuery", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answerWebAppQuery'] = {
    init: function() {
        this.jsonInit({"type": "auto_answerWebAppQuery", "message0": "\ud83e\udd16 answerWebAppQuery web_app_query_id %1 result %2", "args0": [{"type": "input_value", "name": "WEB_APP_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "RESULT", "check": null}], "colour": 120, "tooltip": "Use this method to set the result of an interaction with a Web App and send a", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answerWebAppQuery", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answer_callback_query'] = {
    init: function() {
        this.jsonInit({"type": "auto_answer_callback_query", "message0": "\ud83e\udd16 answer_callback_query callback_query_id %1 text (optional) %2 show_alert (optional) %3 url (optional) %4 cache_time (optional) %5", "args0": [{"type": "input_value", "name": "CALLBACK_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "TEXT", "check": null}, {"type": "input_value", "name": "SHOW_ALERT", "check": null}, {"type": "input_value", "name": "URL", "check": null}, {"type": "input_value", "name": "CACHE_TIME", "check": null}], "colour": 120, "tooltip": "Use this method to send answers to callback queries sent from inline keyboards. The answer", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answer_callback_query", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answer_inline_query'] = {
    init: function() {
        this.jsonInit({"type": "auto_answer_inline_query", "message0": "\ud83e\udd16 answer_inline_query inline_query_id %1 results %2 cache_time (optional) %3 is_personal (optional) %4 next_offset (optional) %5 button (optional) %6 current_offset (optional) %7", "args0": [{"type": "input_value", "name": "INLINE_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "RESULTS", "check": null}, {"type": "input_value", "name": "CACHE_TIME", "check": null}, {"type": "input_value", "name": "IS_PERSONAL", "check": null}, {"type": "input_value", "name": "NEXT_OFFSET", "check": null}, {"type": "input_value", "name": "BUTTON", "check": null}, {"type": "input_value", "name": "CURRENT_OFFSET", "check": null}], "colour": 120, "tooltip": "Use this method to send answers to an inline query. No more than", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answer_inline_query", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answer_pre_checkout_query'] = {
    init: function() {
        this.jsonInit({"type": "auto_answer_pre_checkout_query", "message0": "\ud83e\udd16 answer_pre_checkout_query pre_checkout_query_id %1 ok %2 error_message (optional) %3", "args0": [{"type": "input_value", "name": "PRE_CHECKOUT_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "OK", "check": "Boolean"}, {"type": "input_value", "name": "ERROR_MESSAGE", "check": null}], "colour": 120, "tooltip": "Once the user has confirmed their payment and shipping details, the Bot API sends the final", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answer_pre_checkout_query", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answer_shipping_query'] = {
    init: function() {
        this.jsonInit({"type": "auto_answer_shipping_query", "message0": "\ud83e\udd16 answer_shipping_query shipping_query_id %1 ok %2 shipping_options (optional) %3 error_message (optional) %4", "args0": [{"type": "input_value", "name": "SHIPPING_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "OK", "check": "Boolean"}, {"type": "input_value", "name": "SHIPPING_OPTIONS", "check": null}, {"type": "input_value", "name": "ERROR_MESSAGE", "check": null}], "colour": 120, "tooltip": "If you sent an invoice requesting a shipping address and the parameter", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answer_shipping_query", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_answer_web_app_query'] = {
    init: function() {
        this.jsonInit({"type": "auto_answer_web_app_query", "message0": "\ud83e\udd16 answer_web_app_query web_app_query_id %1 result %2", "args0": [{"type": "input_value", "name": "WEB_APP_QUERY_ID", "check": "String"}, {"type": "input_value", "name": "RESULT", "check": null}], "colour": 120, "tooltip": "Use this method to set the result of an interaction with a Web App and send a", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.answer_web_app_query", "auto_category": "answering (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "answering (API)"
};


Blockly.Blocks['auto_approveChatJoinRequest'] = {
    init: function() {
        this.jsonInit({"type": "auto_approveChatJoinRequest", "message0": "\ud83e\udd16 approveChatJoinRequest chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to approve a chat join request.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.approveChatJoinRequest", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_approveSuggestedPost'] = {
    init: function() {
        this.jsonInit({"type": "auto_approveSuggestedPost", "message0": "\ud83e\udd16 approveSuggestedPost chat_id %1 message_id %2 send_date (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "SEND_DATE", "check": null}], "colour": 230, "tooltip": "Use this method to approve a suggested post in a direct messages chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.approveSuggestedPost", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_approve_chat_join_request'] = {
    init: function() {
        this.jsonInit({"type": "auto_approve_chat_join_request", "message0": "\ud83e\udd16 approve_chat_join_request chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to approve a chat join request.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.approve_chat_join_request", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_approve_suggested_post'] = {
    init: function() {
        this.jsonInit({"type": "auto_approve_suggested_post", "message0": "\ud83e\udd16 approve_suggested_post chat_id %1 message_id %2 send_date (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "SEND_DATE", "check": null}], "colour": 230, "tooltip": "Use this method to approve a suggested post in a direct messages chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.approve_suggested_post", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_banChatMember'] = {
    init: function() {
        this.jsonInit({"type": "auto_banChatMember", "message0": "\ud83e\udd16 banChatMember chat_id %1 user_id %2 until_date (optional) %3 revoke_messages (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "UNTIL_DATE", "check": null}, {"type": "input_value", "name": "REVOKE_MESSAGES", "check": null}], "colour": 60, "tooltip": "Use this method to ban a user from a group, supergroup or a channel. In the case of", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.banChatMember", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_banChatSenderChat'] = {
    init: function() {
        this.jsonInit({"type": "auto_banChatSenderChat", "message0": "\ud83e\udd16 banChatSenderChat chat_id %1 sender_chat_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "SENDER_CHAT_ID", "check": "Number"}], "colour": 60, "tooltip": "Use this method to ban a channel chat in a supergroup or a channel. Until the chat is", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.banChatSenderChat", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_ban_chat_member'] = {
    init: function() {
        this.jsonInit({"type": "auto_ban_chat_member", "message0": "\ud83e\udd16 ban_chat_member chat_id %1 user_id %2 until_date (optional) %3 revoke_messages (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "UNTIL_DATE", "check": null}, {"type": "input_value", "name": "REVOKE_MESSAGES", "check": null}], "colour": 60, "tooltip": "Use this method to ban a user from a group, supergroup or a channel. In the case of", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.ban_chat_member", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_ban_chat_sender_chat'] = {
    init: function() {
        this.jsonInit({"type": "auto_ban_chat_sender_chat", "message0": "\ud83e\udd16 ban_chat_sender_chat chat_id %1 sender_chat_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "SENDER_CHAT_ID", "check": "Number"}], "colour": 60, "tooltip": "Use this method to ban a channel chat in a supergroup or a channel. Until the chat is", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.ban_chat_sender_chat", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_close'] = {
    init: function() {
        this.jsonInit({"type": "auto_close", "message0": "\ud83e\udd16 close", "args0": [], "colour": 230, "tooltip": "Use this method to close the bot instance before moving it from one local server to", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.close", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_closeForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_closeForumTopic", "message0": "\ud83e\udd16 closeForumTopic chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to close an open topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.closeForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_closeGeneralForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_closeGeneralForumTopic", "message0": "\ud83e\udd16 closeGeneralForumTopic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to close an open 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.closeGeneralForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_close_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_close_forum_topic", "message0": "\ud83e\udd16 close_forum_topic chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to close an open topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.close_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_close_general_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_close_general_forum_topic", "message0": "\ud83e\udd16 close_general_forum_topic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to close an open 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.close_general_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_convertGiftToStars'] = {
    init: function() {
        this.jsonInit({"type": "auto_convertGiftToStars", "message0": "\ud83e\udd16 convertGiftToStars business_connection_id %1 owned_gift_id %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "OWNED_GIFT_ID", "check": "String"}], "colour": 230, "tooltip": "Converts a given regular gift to Telegram Stars. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.convertGiftToStars", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_convert_gift_to_stars'] = {
    init: function() {
        this.jsonInit({"type": "auto_convert_gift_to_stars", "message0": "\ud83e\udd16 convert_gift_to_stars business_connection_id %1 owned_gift_id %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "OWNED_GIFT_ID", "check": "String"}], "colour": 230, "tooltip": "Converts a given regular gift to Telegram Stars. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.convert_gift_to_stars", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_copyMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_copyMessage", "message0": "\ud83e\udd16 copyMessage chat_id %1 from_chat_id %2 message_id %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 disable_notification (optional) %7 reply_markup (optional) %8 protect_content (optional) %9 message_thread_id (optional) %10 reply_parameters (optional) %11 show_caption_above_media (optional) %12 allow_paid_broadcast (optional) %13 video_start_timestamp (optional) %14 direct_messages_topic_id (optional) %15 suggested_post_parameters (optional) %16 allow_sending_without_reply (optional) %17 reply_to_message_id (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "VIDEO_START_TIMESTAMP", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 230, "tooltip": "Use this method to copy messages of any kind. Service messages, paid media messages,", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.copyMessage", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_copyMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_copyMessages", "message0": "\ud83e\udd16 copyMessages chat_id %1 from_chat_id %2 message_ids %3 disable_notification (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 remove_caption (optional) %7 direct_messages_topic_id (optional) %8", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REMOVE_CAPTION", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}], "colour": 230, "tooltip": "Use this method to copy messages of any kind. If some of the specified messages can't be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.copyMessages", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_copy_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_copy_message", "message0": "\ud83e\udd16 copy_message chat_id %1 from_chat_id %2 message_id %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 disable_notification (optional) %7 reply_markup (optional) %8 protect_content (optional) %9 message_thread_id (optional) %10 reply_parameters (optional) %11 show_caption_above_media (optional) %12 allow_paid_broadcast (optional) %13 video_start_timestamp (optional) %14 direct_messages_topic_id (optional) %15 suggested_post_parameters (optional) %16 allow_sending_without_reply (optional) %17 reply_to_message_id (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "VIDEO_START_TIMESTAMP", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 230, "tooltip": "Use this method to copy messages of any kind. Service messages, paid media messages,", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.copy_message", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_copy_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_copy_messages", "message0": "\ud83e\udd16 copy_messages chat_id %1 from_chat_id %2 message_ids %3 disable_notification (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 remove_caption (optional) %7 direct_messages_topic_id (optional) %8", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REMOVE_CAPTION", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}], "colour": 230, "tooltip": "Use this method to copy messages of any kind. If some of the specified messages can't be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.copy_messages", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_createChatInviteLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_createChatInviteLink", "message0": "\ud83e\udd16 createChatInviteLink chat_id %1 expire_date (optional) %2 member_limit (optional) %3 name (optional) %4 creates_join_request (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "EXPIRE_DATE", "check": null}, {"type": "input_value", "name": "MEMBER_LIMIT", "check": null}, {"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "CREATES_JOIN_REQUEST", "check": null}], "colour": 230, "tooltip": "Use this method to create an additional invite link for a chat. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.createChatInviteLink", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_createChatSubscriptionInviteLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_createChatSubscriptionInviteLink", "message0": "\ud83e\udd16 createChatSubscriptionInviteLink chat_id %1 subscription_period %2 subscription_price %3 name (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "SUBSCRIPTION_PERIOD", "check": null}, {"type": "input_value", "name": "SUBSCRIPTION_PRICE", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": null}], "colour": 230, "tooltip": "Use this method to create a `subscription invite link <https://telegram.org/blog/        superchannels-star-reactions-subscriptions#star-subscriptions>`_ for a channel chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.createChatSubscriptionInviteLink", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_createForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_createForumTopic", "message0": "\ud83e\udd16 createForumTopic chat_id %1 name %2 icon_color (optional) %3 icon_custom_emoji_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "ICON_COLOR", "check": null}, {"type": "input_value", "name": "ICON_CUSTOM_EMOJI_ID", "check": null}], "colour": 230, "tooltip": "Use this method to create a topic in a forum supergroup chat. The bot must be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.createForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_createInvoiceLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_createInvoiceLink", "message0": "\ud83e\udd16 createInvoiceLink title %1 description %2 payload %3 currency %4 prices %5 provider_token (optional) %6 max_tip_amount (optional) %7 suggested_tip_amounts (optional) %8 provider_data (optional) %9 photo_url (optional) %10 photo_size (optional) %11 photo_width (optional) %12 photo_height (optional) %13 need_name (optional) %14 need_phone_number (optional) %15 need_email (optional) %16 need_shipping_address (optional) %17 send_phone_number_to_provider (optional) %18 send_email_to_provider (optional) %19 is_flexible (optional) %20 subscription_period (optional) %21 business_connection_id (optional) %22", "args0": [{"type": "input_value", "name": "TITLE", "check": "String"}, {"type": "input_value", "name": "DESCRIPTION", "check": "String"}, {"type": "input_value", "name": "PAYLOAD", "check": "String"}, {"type": "input_value", "name": "CURRENCY", "check": "String"}, {"type": "input_value", "name": "PRICES", "check": null}, {"type": "input_value", "name": "PROVIDER_TOKEN", "check": null}, {"type": "input_value", "name": "MAX_TIP_AMOUNT", "check": null}, {"type": "input_value", "name": "SUGGESTED_TIP_AMOUNTS", "check": null}, {"type": "input_value", "name": "PROVIDER_DATA", "check": null}, {"type": "input_value", "name": "PHOTO_URL", "check": null}, {"type": "input_value", "name": "PHOTO_SIZE", "check": null}, {"type": "input_value", "name": "PHOTO_WIDTH", "check": null}, {"type": "input_value", "name": "PHOTO_HEIGHT", "check": null}, {"type": "input_value", "name": "NEED_NAME", "check": null}, {"type": "input_value", "name": "NEED_PHONE_NUMBER", "check": null}, {"type": "input_value", "name": "NEED_EMAIL", "check": null}, {"type": "input_value", "name": "NEED_SHIPPING_ADDRESS", "check": null}, {"type": "input_value", "name": "SEND_PHONE_NUMBER_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "SEND_EMAIL_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "IS_FLEXIBLE", "check": null}, {"type": "input_value", "name": "SUBSCRIPTION_PERIOD", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 230, "tooltip": "Use this method to create a link for an invoice.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.createInvoiceLink", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_createNewStickerSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_createNewStickerSet", "message0": "\ud83e\udd16 createNewStickerSet user_id %1 name %2 title %3 stickers %4 sticker_type (optional) %5 needs_repainting (optional) %6", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "TITLE", "check": "String"}, {"type": "input_value", "name": "STICKERS", "check": null}, {"type": "input_value", "name": "STICKER_TYPE", "check": null}, {"type": "input_value", "name": "NEEDS_REPAINTING", "check": null}], "colour": 60, "tooltip": "Use this method to create new sticker set owned by a user.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.createNewStickerSet", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_create_chat_invite_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_create_chat_invite_link", "message0": "\ud83e\udd16 create_chat_invite_link chat_id %1 expire_date (optional) %2 member_limit (optional) %3 name (optional) %4 creates_join_request (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "EXPIRE_DATE", "check": null}, {"type": "input_value", "name": "MEMBER_LIMIT", "check": null}, {"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "CREATES_JOIN_REQUEST", "check": null}], "colour": 230, "tooltip": "Use this method to create an additional invite link for a chat. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.create_chat_invite_link", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_create_chat_subscription_invite_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_create_chat_subscription_invite_link", "message0": "\ud83e\udd16 create_chat_subscription_invite_link chat_id %1 subscription_period %2 subscription_price %3 name (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "SUBSCRIPTION_PERIOD", "check": null}, {"type": "input_value", "name": "SUBSCRIPTION_PRICE", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": null}], "colour": 230, "tooltip": "Use this method to create a `subscription invite link <https://telegram.org/blog/        superchannels-star-reactions-subscriptions#star-subscriptions>`_ for a channel chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.create_chat_subscription_invite_link", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_create_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_create_forum_topic", "message0": "\ud83e\udd16 create_forum_topic chat_id %1 name %2 icon_color (optional) %3 icon_custom_emoji_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "ICON_COLOR", "check": null}, {"type": "input_value", "name": "ICON_CUSTOM_EMOJI_ID", "check": null}], "colour": 230, "tooltip": "Use this method to create a topic in a forum supergroup chat. The bot must be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.create_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_create_invoice_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_create_invoice_link", "message0": "\ud83e\udd16 create_invoice_link title %1 description %2 payload %3 currency %4 prices %5 provider_token (optional) %6 max_tip_amount (optional) %7 suggested_tip_amounts (optional) %8 provider_data (optional) %9 photo_url (optional) %10 photo_size (optional) %11 photo_width (optional) %12 photo_height (optional) %13 need_name (optional) %14 need_phone_number (optional) %15 need_email (optional) %16 need_shipping_address (optional) %17 send_phone_number_to_provider (optional) %18 send_email_to_provider (optional) %19 is_flexible (optional) %20 subscription_period (optional) %21 business_connection_id (optional) %22", "args0": [{"type": "input_value", "name": "TITLE", "check": "String"}, {"type": "input_value", "name": "DESCRIPTION", "check": "String"}, {"type": "input_value", "name": "PAYLOAD", "check": "String"}, {"type": "input_value", "name": "CURRENCY", "check": "String"}, {"type": "input_value", "name": "PRICES", "check": null}, {"type": "input_value", "name": "PROVIDER_TOKEN", "check": null}, {"type": "input_value", "name": "MAX_TIP_AMOUNT", "check": null}, {"type": "input_value", "name": "SUGGESTED_TIP_AMOUNTS", "check": null}, {"type": "input_value", "name": "PROVIDER_DATA", "check": null}, {"type": "input_value", "name": "PHOTO_URL", "check": null}, {"type": "input_value", "name": "PHOTO_SIZE", "check": null}, {"type": "input_value", "name": "PHOTO_WIDTH", "check": null}, {"type": "input_value", "name": "PHOTO_HEIGHT", "check": null}, {"type": "input_value", "name": "NEED_NAME", "check": null}, {"type": "input_value", "name": "NEED_PHONE_NUMBER", "check": null}, {"type": "input_value", "name": "NEED_EMAIL", "check": null}, {"type": "input_value", "name": "NEED_SHIPPING_ADDRESS", "check": null}, {"type": "input_value", "name": "SEND_PHONE_NUMBER_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "SEND_EMAIL_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "IS_FLEXIBLE", "check": null}, {"type": "input_value", "name": "SUBSCRIPTION_PERIOD", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 230, "tooltip": "Use this method to create a link for an invoice.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.create_invoice_link", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_create_new_sticker_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_create_new_sticker_set", "message0": "\ud83e\udd16 create_new_sticker_set user_id %1 name %2 title %3 stickers %4 sticker_type (optional) %5 needs_repainting (optional) %6", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "TITLE", "check": "String"}, {"type": "input_value", "name": "STICKERS", "check": null}, {"type": "input_value", "name": "STICKER_TYPE", "check": null}, {"type": "input_value", "name": "NEEDS_REPAINTING", "check": null}], "colour": 60, "tooltip": "Use this method to create new sticker set owned by a user.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.create_new_sticker_set", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_declineChatJoinRequest'] = {
    init: function() {
        this.jsonInit({"type": "auto_declineChatJoinRequest", "message0": "\ud83e\udd16 declineChatJoinRequest chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to decline a chat join request.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.declineChatJoinRequest", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_declineSuggestedPost'] = {
    init: function() {
        this.jsonInit({"type": "auto_declineSuggestedPost", "message0": "\ud83e\udd16 declineSuggestedPost chat_id %1 message_id %2 comment (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "COMMENT", "check": null}], "colour": 230, "tooltip": "Use this method to decline a suggested post in a direct messages chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.declineSuggestedPost", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_decline_chat_join_request'] = {
    init: function() {
        this.jsonInit({"type": "auto_decline_chat_join_request", "message0": "\ud83e\udd16 decline_chat_join_request chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to decline a chat join request.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.decline_chat_join_request", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_decline_suggested_post'] = {
    init: function() {
        this.jsonInit({"type": "auto_decline_suggested_post", "message0": "\ud83e\udd16 decline_suggested_post chat_id %1 message_id %2 comment (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "COMMENT", "check": null}], "colour": 230, "tooltip": "Use this method to decline a suggested post in a direct messages chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.decline_suggested_post", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_deleteBusinessMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteBusinessMessages", "message0": "\ud83e\udd16 deleteBusinessMessages business_connection_id %1 message_ids %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}], "colour": 0, "tooltip": "Delete messages on behalf of a business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteBusinessMessages", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteChatPhoto'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteChatPhoto", "message0": "\ud83e\udd16 deleteChatPhoto chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 0, "tooltip": "Use this method to delete a chat photo. Photos can't be changed for private chats. The bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteChatPhoto", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteChatStickerSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteChatStickerSet", "message0": "\ud83e\udd16 deleteChatStickerSet chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 0, "tooltip": "Use this method to delete a group sticker set from a supergroup. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteChatStickerSet", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteForumTopic", "message0": "\ud83e\udd16 deleteForumTopic chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 0, "tooltip": "Use this method to delete a forum topic along with all its messages in a forum supergroup", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteForumTopic", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteMessage", "message0": "\ud83e\udd16 deleteMessage chat_id %1 message_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}], "colour": 0, "tooltip": "Use this method to delete a message, including service messages, with the following", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteMessage", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteMessages", "message0": "\ud83e\udd16 deleteMessages chat_id %1 message_ids %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}], "colour": 0, "tooltip": "Use this method to delete multiple messages simultaneously. If some of the specified", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteMessages", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteMyCommands'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteMyCommands", "message0": "\ud83e\udd16 deleteMyCommands scope (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "SCOPE", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 0, "tooltip": "Use this method to delete the list of the bot's commands for the given scope and user", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteMyCommands", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteStickerFromSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteStickerFromSet", "message0": "\ud83e\udd16 deleteStickerFromSet sticker %1", "args0": [{"type": "input_value", "name": "STICKER", "check": null}], "colour": 0, "tooltip": "Use this method to delete a sticker from a set created by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteStickerFromSet", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteStickerSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteStickerSet", "message0": "\ud83e\udd16 deleteStickerSet name %1", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}], "colour": 0, "tooltip": "Use this method to delete a sticker set that was created by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteStickerSet", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteStory'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteStory", "message0": "\ud83e\udd16 deleteStory business_connection_id %1 story_id %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "STORY_ID", "check": "Number"}], "colour": 0, "tooltip": "Deletes a story previously posted by the bot on behalf of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteStory", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_deleteWebhook'] = {
    init: function() {
        this.jsonInit({"type": "auto_deleteWebhook", "message0": "\ud83e\udd16 deleteWebhook drop_pending_updates (optional) %1", "args0": [{"type": "input_value", "name": "DROP_PENDING_UPDATES", "check": null}], "colour": 0, "tooltip": "Use this method to remove webhook integration if you decide to switch back to", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.deleteWebhook", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_business_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_business_messages", "message0": "\ud83e\udd16 delete_business_messages business_connection_id %1 message_ids %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}], "colour": 0, "tooltip": "Delete messages on behalf of a business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_business_messages", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_chat_photo'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_chat_photo", "message0": "\ud83e\udd16 delete_chat_photo chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 0, "tooltip": "Use this method to delete a chat photo. Photos can't be changed for private chats. The bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_chat_photo", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_chat_sticker_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_chat_sticker_set", "message0": "\ud83e\udd16 delete_chat_sticker_set chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 0, "tooltip": "Use this method to delete a group sticker set from a supergroup. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_chat_sticker_set", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_forum_topic", "message0": "\ud83e\udd16 delete_forum_topic chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 0, "tooltip": "Use this method to delete a forum topic along with all its messages in a forum supergroup", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_forum_topic", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_message", "message0": "\ud83e\udd16 delete_message chat_id %1 message_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}], "colour": 0, "tooltip": "Use this method to delete a message, including service messages, with the following", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_message", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_messages", "message0": "\ud83e\udd16 delete_messages chat_id %1 message_ids %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}], "colour": 0, "tooltip": "Use this method to delete multiple messages simultaneously. If some of the specified", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_messages", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_my_commands'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_my_commands", "message0": "\ud83e\udd16 delete_my_commands scope (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "SCOPE", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 0, "tooltip": "Use this method to delete the list of the bot's commands for the given scope and user", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_my_commands", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_sticker_from_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_sticker_from_set", "message0": "\ud83e\udd16 delete_sticker_from_set sticker %1", "args0": [{"type": "input_value", "name": "STICKER", "check": null}], "colour": 0, "tooltip": "Use this method to delete a sticker from a set created by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_sticker_from_set", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_sticker_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_sticker_set", "message0": "\ud83e\udd16 delete_sticker_set name %1", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}], "colour": 0, "tooltip": "Use this method to delete a sticker set that was created by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_sticker_set", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_story'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_story", "message0": "\ud83e\udd16 delete_story business_connection_id %1 story_id %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "STORY_ID", "check": "Number"}], "colour": 0, "tooltip": "Deletes a story previously posted by the bot on behalf of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_story", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_delete_webhook'] = {
    init: function() {
        this.jsonInit({"type": "auto_delete_webhook", "message0": "\ud83e\udd16 delete_webhook drop_pending_updates (optional) %1", "args0": [{"type": "input_value", "name": "DROP_PENDING_UPDATES", "check": null}], "colour": 0, "tooltip": "Use this method to remove webhook integration if you decide to switch back to", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.delete_webhook", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_do_api_request'] = {
    init: function() {
        this.jsonInit({"type": "auto_do_api_request", "message0": "\ud83e\udd16 do_api_request endpoint %1 return_type (optional) %2", "args0": [{"type": "input_value", "name": "ENDPOINT", "check": "String"}, {"type": "input_value", "name": "RETURN_TYPE", "check": null}], "colour": 230, "tooltip": "Do a request to the Telegram API.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.do_api_request", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_editChatInviteLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_editChatInviteLink", "message0": "\ud83e\udd16 editChatInviteLink chat_id %1 invite_link %2 expire_date (optional) %3 member_limit (optional) %4 name (optional) %5 creates_join_request (optional) %6", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "INVITE_LINK", "check": null}, {"type": "input_value", "name": "EXPIRE_DATE", "check": null}, {"type": "input_value", "name": "MEMBER_LIMIT", "check": null}, {"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "CREATES_JOIN_REQUEST", "check": null}], "colour": 210, "tooltip": "Use this method to edit a non-primary invite link created by the bot. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editChatInviteLink", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editChatSubscriptionInviteLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_editChatSubscriptionInviteLink", "message0": "\ud83e\udd16 editChatSubscriptionInviteLink chat_id %1 invite_link %2 name (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "INVITE_LINK", "check": null}, {"type": "input_value", "name": "NAME", "check": null}], "colour": 210, "tooltip": "Use this method to edit a subscription invite link created by the bot. The bot must have", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editChatSubscriptionInviteLink", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_editForumTopic", "message0": "\ud83e\udd16 editForumTopic chat_id %1 message_thread_id %2 name (optional) %3 icon_custom_emoji_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "ICON_CUSTOM_EMOJI_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editForumTopic", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editGeneralForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_editGeneralForumTopic", "message0": "\ud83e\udd16 editGeneralForumTopic chat_id %1 name %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "NAME", "check": "String"}], "colour": 210, "tooltip": "Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editGeneralForumTopic", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editMessageCaption'] = {
    init: function() {
        this.jsonInit({"type": "auto_editMessageCaption", "message0": "\ud83e\udd16 editMessageCaption chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 caption (optional) %4 reply_markup (optional) %5 parse_mode (optional) %6 caption_entities (optional) %7 show_caption_above_media (optional) %8 business_connection_id (optional) %9", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit captions of messages.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editMessageCaption", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editMessageChecklist'] = {
    init: function() {
        this.jsonInit({"type": "auto_editMessageChecklist", "message0": "\ud83e\udd16 editMessageChecklist business_connection_id %1 chat_id %2 message_id %3 checklist %4 reply_markup (optional) %5", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "CHECKLIST", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}], "colour": 210, "tooltip": "Use this method to edit a checklist on behalf of a connected business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editMessageChecklist", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editMessageLiveLocation'] = {
    init: function() {
        this.jsonInit({"type": "auto_editMessageLiveLocation", "message0": "\ud83e\udd16 editMessageLiveLocation chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 latitude (optional) %4 longitude (optional) %5 reply_markup (optional) %6 horizontal_accuracy (optional) %7 heading (optional) %8 proximity_alert_radius (optional) %9 live_period (optional) %10 business_connection_id (optional) %11 location (optional) %12", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "LATITUDE", "check": null}, {"type": "input_value", "name": "LONGITUDE", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "HORIZONTAL_ACCURACY", "check": null}, {"type": "input_value", "name": "HEADING", "check": null}, {"type": "input_value", "name": "PROXIMITY_ALERT_RADIUS", "check": null}, {"type": "input_value", "name": "LIVE_PERIOD", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "LOCATION", "check": null}], "colour": 210, "tooltip": "Use this method to edit live location messages sent by the bot or via the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editMessageLiveLocation", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editMessageMedia'] = {
    init: function() {
        this.jsonInit({"type": "auto_editMessageMedia", "message0": "\ud83e\udd16 editMessageMedia media %1 chat_id (optional) %2 message_id (optional) %3 inline_message_id (optional) %4 reply_markup (optional) %5 business_connection_id (optional) %6", "args0": [{"type": "input_value", "name": "MEDIA", "check": null}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit animation, audio, document, photo, or video messages, or to add", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editMessageMedia", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editMessageReplyMarkup'] = {
    init: function() {
        this.jsonInit({"type": "auto_editMessageReplyMarkup", "message0": "\ud83e\udd16 editMessageReplyMarkup chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 reply_markup (optional) %4 business_connection_id (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit only the reply markup of messages sent by the bot or via the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editMessageReplyMarkup", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editMessageText'] = {
    init: function() {
        this.jsonInit({"type": "auto_editMessageText", "message0": "\ud83e\udd16 editMessageText text %1 chat_id (optional) %2 message_id (optional) %3 inline_message_id (optional) %4 parse_mode (optional) %5 reply_markup (optional) %6 entities (optional) %7 link_preview_options (optional) %8 business_connection_id (optional) %9 disable_web_page_preview (optional) %10", "args0": [{"type": "input_value", "name": "TEXT", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "ENTITIES", "check": null}, {"type": "input_value", "name": "LINK_PREVIEW_OPTIONS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "DISABLE_WEB_PAGE_PREVIEW", "check": null}], "colour": 210, "tooltip": "Use this method to edit text and game messages.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editMessageText", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editStory'] = {
    init: function() {
        this.jsonInit({"type": "auto_editStory", "message0": "\ud83e\udd16 editStory business_connection_id %1 story_id %2 content %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 areas (optional) %7", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "STORY_ID", "check": "Number"}, {"type": "input_value", "name": "CONTENT", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "AREAS", "check": null}], "colour": 210, "tooltip": "Edits a story previously posted by the bot on behalf of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editStory", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_editUserStarSubscription'] = {
    init: function() {
        this.jsonInit({"type": "auto_editUserStarSubscription", "message0": "\ud83e\udd16 editUserStarSubscription user_id %1 telegram_payment_charge_id %2 is_canceled %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "TELEGRAM_PAYMENT_CHARGE_ID", "check": "String"}, {"type": "input_value", "name": "IS_CANCELED", "check": "Boolean"}], "colour": 210, "tooltip": "Allows the bot to cancel or re-enable extension of a subscription paid in Telegram", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.editUserStarSubscription", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_chat_invite_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_chat_invite_link", "message0": "\ud83e\udd16 edit_chat_invite_link chat_id %1 invite_link %2 expire_date (optional) %3 member_limit (optional) %4 name (optional) %5 creates_join_request (optional) %6", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "INVITE_LINK", "check": null}, {"type": "input_value", "name": "EXPIRE_DATE", "check": null}, {"type": "input_value", "name": "MEMBER_LIMIT", "check": null}, {"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "CREATES_JOIN_REQUEST", "check": null}], "colour": 210, "tooltip": "Use this method to edit a non-primary invite link created by the bot. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_chat_invite_link", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_chat_subscription_invite_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_chat_subscription_invite_link", "message0": "\ud83e\udd16 edit_chat_subscription_invite_link chat_id %1 invite_link %2 name (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "INVITE_LINK", "check": null}, {"type": "input_value", "name": "NAME", "check": null}], "colour": 210, "tooltip": "Use this method to edit a subscription invite link created by the bot. The bot must have", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_chat_subscription_invite_link", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_forum_topic", "message0": "\ud83e\udd16 edit_forum_topic chat_id %1 message_thread_id %2 name (optional) %3 icon_custom_emoji_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "ICON_CUSTOM_EMOJI_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_forum_topic", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_general_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_general_forum_topic", "message0": "\ud83e\udd16 edit_general_forum_topic chat_id %1 name %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "NAME", "check": "String"}], "colour": 210, "tooltip": "Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_general_forum_topic", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_message_caption'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_message_caption", "message0": "\ud83e\udd16 edit_message_caption chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 caption (optional) %4 reply_markup (optional) %5 parse_mode (optional) %6 caption_entities (optional) %7 show_caption_above_media (optional) %8 business_connection_id (optional) %9", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit captions of messages.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_message_caption", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_message_checklist'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_message_checklist", "message0": "\ud83e\udd16 edit_message_checklist business_connection_id %1 chat_id %2 message_id %3 checklist %4 reply_markup (optional) %5", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "CHECKLIST", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}], "colour": 210, "tooltip": "Use this method to edit a checklist on behalf of a connected business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_message_checklist", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_message_live_location'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_message_live_location", "message0": "\ud83e\udd16 edit_message_live_location chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 latitude (optional) %4 longitude (optional) %5 reply_markup (optional) %6 horizontal_accuracy (optional) %7 heading (optional) %8 proximity_alert_radius (optional) %9 live_period (optional) %10 business_connection_id (optional) %11 location (optional) %12", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "LATITUDE", "check": null}, {"type": "input_value", "name": "LONGITUDE", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "HORIZONTAL_ACCURACY", "check": null}, {"type": "input_value", "name": "HEADING", "check": null}, {"type": "input_value", "name": "PROXIMITY_ALERT_RADIUS", "check": null}, {"type": "input_value", "name": "LIVE_PERIOD", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "LOCATION", "check": null}], "colour": 210, "tooltip": "Use this method to edit live location messages sent by the bot or via the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_message_live_location", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_message_media'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_message_media", "message0": "\ud83e\udd16 edit_message_media media %1 chat_id (optional) %2 message_id (optional) %3 inline_message_id (optional) %4 reply_markup (optional) %5 business_connection_id (optional) %6", "args0": [{"type": "input_value", "name": "MEDIA", "check": null}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit animation, audio, document, photo, or video messages, or to add", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_message_media", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_message_reply_markup'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_message_reply_markup", "message0": "\ud83e\udd16 edit_message_reply_markup chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 reply_markup (optional) %4 business_connection_id (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 210, "tooltip": "Use this method to edit only the reply markup of messages sent by the bot or via the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_message_reply_markup", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_message_text'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_message_text", "message0": "\ud83e\udd16 edit_message_text text %1 chat_id (optional) %2 message_id (optional) %3 inline_message_id (optional) %4 parse_mode (optional) %5 reply_markup (optional) %6 entities (optional) %7 link_preview_options (optional) %8 business_connection_id (optional) %9 disable_web_page_preview (optional) %10", "args0": [{"type": "input_value", "name": "TEXT", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "ENTITIES", "check": null}, {"type": "input_value", "name": "LINK_PREVIEW_OPTIONS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "DISABLE_WEB_PAGE_PREVIEW", "check": null}], "colour": 210, "tooltip": "Use this method to edit text and game messages.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_message_text", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_story'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_story", "message0": "\ud83e\udd16 edit_story business_connection_id %1 story_id %2 content %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 areas (optional) %7", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "STORY_ID", "check": "Number"}, {"type": "input_value", "name": "CONTENT", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "AREAS", "check": null}], "colour": 210, "tooltip": "Edits a story previously posted by the bot on behalf of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_story", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_edit_user_star_subscription'] = {
    init: function() {
        this.jsonInit({"type": "auto_edit_user_star_subscription", "message0": "\ud83e\udd16 edit_user_star_subscription user_id %1 telegram_payment_charge_id %2 is_canceled %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "TELEGRAM_PAYMENT_CHARGE_ID", "check": "String"}, {"type": "input_value", "name": "IS_CANCELED", "check": "Boolean"}], "colour": 210, "tooltip": "Allows the bot to cancel or re-enable extension of a subscription paid in Telegram", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.edit_user_star_subscription", "auto_category": "Editing (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Editing (API)"
};


Blockly.Blocks['auto_exportChatInviteLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_exportChatInviteLink", "message0": "\ud83e\udd16 exportChatInviteLink chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to generate a new primary invite link for a chat; any previously generated", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.exportChatInviteLink", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_export_chat_invite_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_export_chat_invite_link", "message0": "\ud83e\udd16 export_chat_invite_link chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to generate a new primary invite link for a chat; any previously generated", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.export_chat_invite_link", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_forwardMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_forwardMessage", "message0": "\ud83e\udd16 forwardMessage chat_id %1 from_chat_id %2 message_id %3 disable_notification (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 video_start_timestamp (optional) %7 direct_messages_topic_id (optional) %8 suggested_post_parameters (optional) %9", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "VIDEO_START_TIMESTAMP", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}], "colour": 230, "tooltip": "Use this method to forward messages of any kind. Service messages can't be forwarded.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.forwardMessage", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_forwardMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_forwardMessages", "message0": "\ud83e\udd16 forwardMessages chat_id %1 from_chat_id %2 message_ids %3 disable_notification (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 direct_messages_topic_id (optional) %7", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}], "colour": 230, "tooltip": "Use this method to forward messages of any kind. If some of the specified messages can't be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.forwardMessages", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_forward_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_forward_message", "message0": "\ud83e\udd16 forward_message chat_id %1 from_chat_id %2 message_id %3 disable_notification (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 video_start_timestamp (optional) %7 direct_messages_topic_id (optional) %8 suggested_post_parameters (optional) %9", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "VIDEO_START_TIMESTAMP", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}], "colour": 230, "tooltip": "Use this method to forward messages of any kind. Service messages can't be forwarded.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.forward_message", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_forward_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_forward_messages", "message0": "\ud83e\udd16 forward_messages chat_id %1 from_chat_id %2 message_ids %3 disable_notification (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 direct_messages_topic_id (optional) %7", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "FROM_CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_IDS", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}], "colour": 230, "tooltip": "Use this method to forward messages of any kind. If some of the specified messages can't be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.forward_messages", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_getAvailableGifts'] = {
    init: function() {
        this.jsonInit({"type": "auto_getAvailableGifts", "message0": "\ud83e\udd16 getAvailableGifts", "args0": [], "colour": 290, "tooltip": "Returns the list of gifts that can be sent by the bot to users and channel chats.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getAvailableGifts", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getBusinessAccountGifts'] = {
    init: function() {
        this.jsonInit({"type": "auto_getBusinessAccountGifts", "message0": "\ud83e\udd16 getBusinessAccountGifts business_connection_id %1 exclude_unsaved (optional) %2 exclude_saved (optional) %3 exclude_unlimited (optional) %4 exclude_limited (optional) %5 exclude_unique (optional) %6 sort_by_price (optional) %7 offset (optional) %8 limit (optional) %9", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "EXCLUDE_UNSAVED", "check": null}, {"type": "input_value", "name": "EXCLUDE_SAVED", "check": null}, {"type": "input_value", "name": "EXCLUDE_UNLIMITED", "check": null}, {"type": "input_value", "name": "EXCLUDE_LIMITED", "check": null}, {"type": "input_value", "name": "EXCLUDE_UNIQUE", "check": null}, {"type": "input_value", "name": "SORT_BY_PRICE", "check": null}, {"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}], "colour": 290, "tooltip": "Returns the gifts received and owned by a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getBusinessAccountGifts", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getBusinessAccountStarBalance'] = {
    init: function() {
        this.jsonInit({"type": "auto_getBusinessAccountStarBalance", "message0": "\ud83e\udd16 getBusinessAccountStarBalance business_connection_id %1", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}], "colour": 290, "tooltip": "Returns the amount of Telegram Stars owned by a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getBusinessAccountStarBalance", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getBusinessConnection'] = {
    init: function() {
        this.jsonInit({"type": "auto_getBusinessConnection", "message0": "\ud83e\udd16 getBusinessConnection business_connection_id %1", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}], "colour": 290, "tooltip": "Use this method to get information about the connection of the bot with a business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getBusinessConnection", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getChat'] = {
    init: function() {
        this.jsonInit({"type": "auto_getChat", "message0": "\ud83e\udd16 getChat chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get up to date information about the chat (current name of the user for", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getChat", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getChatAdministrators'] = {
    init: function() {
        this.jsonInit({"type": "auto_getChatAdministrators", "message0": "\ud83e\udd16 getChatAdministrators chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get a list of administrators in a chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getChatAdministrators", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getChatMember'] = {
    init: function() {
        this.jsonInit({"type": "auto_getChatMember", "message0": "\ud83e\udd16 getChatMember chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 290, "tooltip": "Use this method to get information about a member of a chat. The method is only", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getChatMember", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getChatMemberCount'] = {
    init: function() {
        this.jsonInit({"type": "auto_getChatMemberCount", "message0": "\ud83e\udd16 getChatMemberCount chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get the number of members in a chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getChatMemberCount", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getChatMenuButton'] = {
    init: function() {
        this.jsonInit({"type": "auto_getChatMenuButton", "message0": "\ud83e\udd16 getChatMenuButton chat_id (optional) %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get the current value of the bot's menu button in a private chat, or", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getChatMenuButton", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getCustomEmojiStickers'] = {
    init: function() {
        this.jsonInit({"type": "auto_getCustomEmojiStickers", "message0": "\ud83e\udd16 getCustomEmojiStickers custom_emoji_ids %1", "args0": [{"type": "input_value", "name": "CUSTOM_EMOJI_IDS", "check": null}], "colour": 290, "tooltip": "Use this method to get information about emoji stickers by their identifiers.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getCustomEmojiStickers", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getFile'] = {
    init: function() {
        this.jsonInit({"type": "auto_getFile", "message0": "\ud83e\udd16 getFile file_id %1", "args0": [{"type": "input_value", "name": "FILE_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get basic info about a file and prepare it for downloading. For the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getFile", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getForumTopicIconStickers'] = {
    init: function() {
        this.jsonInit({"type": "auto_getForumTopicIconStickers", "message0": "\ud83e\udd16 getForumTopicIconStickers", "args0": [], "colour": 290, "tooltip": "Use this method to get custom emoji stickers, which can be used as a forum topic", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getForumTopicIconStickers", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getGameHighScores'] = {
    init: function() {
        this.jsonInit({"type": "auto_getGameHighScores", "message0": "\ud83e\udd16 getGameHighScores user_id %1 chat_id (optional) %2 message_id (optional) %3 inline_message_id (optional) %4", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get data for high score tables. Will return the score of the specified", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getGameHighScores", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMe'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMe", "message0": "\ud83e\udd16 getMe", "args0": [], "colour": 290, "tooltip": "A simple method for testing your bot's auth token. Requires no parameters.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMe", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMyCommands'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMyCommands", "message0": "\ud83e\udd16 getMyCommands scope (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "SCOPE", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current list of the bot's commands for the given scope and user", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMyCommands", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMyDefaultAdministratorRights'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMyDefaultAdministratorRights", "message0": "\ud83e\udd16 getMyDefaultAdministratorRights for_channels (optional) %1", "args0": [{"type": "input_value", "name": "FOR_CHANNELS", "check": null}], "colour": 290, "tooltip": "Use this method to get the current default administrator rights of the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMyDefaultAdministratorRights", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMyDescription'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMyDescription", "message0": "\ud83e\udd16 getMyDescription language_code (optional) %1", "args0": [{"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current bot description for the given user language.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMyDescription", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMyName'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMyName", "message0": "\ud83e\udd16 getMyName language_code (optional) %1", "args0": [{"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current bot name for the given user language.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMyName", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMyShortDescription'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMyShortDescription", "message0": "\ud83e\udd16 getMyShortDescription language_code (optional) %1", "args0": [{"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current bot short description for the given user language.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMyShortDescription", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getMyStarBalance'] = {
    init: function() {
        this.jsonInit({"type": "auto_getMyStarBalance", "message0": "\ud83e\udd16 getMyStarBalance", "args0": [], "colour": 290, "tooltip": "A method to get the current Telegram Stars balance of the bot. Requires no parameters.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getMyStarBalance", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getStarTransactions'] = {
    init: function() {
        this.jsonInit({"type": "auto_getStarTransactions", "message0": "\ud83e\udd16 getStarTransactions offset (optional) %1 limit (optional) %2", "args0": [{"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}], "colour": 290, "tooltip": "Returns the bot's Telegram Star transactions in chronological order.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getStarTransactions", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getStickerSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_getStickerSet", "message0": "\ud83e\udd16 getStickerSet name %1", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}], "colour": 290, "tooltip": "Use this method to get a sticker set.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getStickerSet", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getUpdates'] = {
    init: function() {
        this.jsonInit({"type": "auto_getUpdates", "message0": "\ud83e\udd16 getUpdates offset (optional) %1 limit (optional) %2 timeout (optional) %3 allowed_updates (optional) %4", "args0": [{"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}, {"type": "input_value", "name": "TIMEOUT", "check": null}, {"type": "input_value", "name": "ALLOWED_UPDATES", "check": null}], "colour": 290, "tooltip": "Use this method to receive incoming updates using long polling.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getUpdates", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getUserChatBoosts'] = {
    init: function() {
        this.jsonInit({"type": "auto_getUserChatBoosts", "message0": "\ud83e\udd16 getUserChatBoosts chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 290, "tooltip": "Use this method to get the list of boosts added to a chat by a user. Requires", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getUserChatBoosts", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getUserProfilePhotos'] = {
    init: function() {
        this.jsonInit({"type": "auto_getUserProfilePhotos", "message0": "\ud83e\udd16 getUserProfilePhotos user_id %1 offset (optional) %2 limit (optional) %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}], "colour": 290, "tooltip": "Use this method to get a list of profile pictures for a user.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getUserProfilePhotos", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_getWebhookInfo'] = {
    init: function() {
        this.jsonInit({"type": "auto_getWebhookInfo", "message0": "\ud83e\udd16 getWebhookInfo", "args0": [], "colour": 290, "tooltip": "Use this method to get current webhook status. Requires no parameters.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.getWebhookInfo", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_available_gifts'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_available_gifts", "message0": "\ud83e\udd16 get_available_gifts", "args0": [], "colour": 290, "tooltip": "Returns the list of gifts that can be sent by the bot to users and channel chats.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_available_gifts", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_bot'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_bot", "message0": "\ud83e\udd16 get_bot", "args0": [], "colour": 290, "tooltip": "Returns the :class:`telegram.Bot` instance associated with this object.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_bot", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_business_account_gifts'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_business_account_gifts", "message0": "\ud83e\udd16 get_business_account_gifts business_connection_id %1 exclude_unsaved (optional) %2 exclude_saved (optional) %3 exclude_unlimited (optional) %4 exclude_limited (optional) %5 exclude_unique (optional) %6 sort_by_price (optional) %7 offset (optional) %8 limit (optional) %9", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "EXCLUDE_UNSAVED", "check": null}, {"type": "input_value", "name": "EXCLUDE_SAVED", "check": null}, {"type": "input_value", "name": "EXCLUDE_UNLIMITED", "check": null}, {"type": "input_value", "name": "EXCLUDE_LIMITED", "check": null}, {"type": "input_value", "name": "EXCLUDE_UNIQUE", "check": null}, {"type": "input_value", "name": "SORT_BY_PRICE", "check": null}, {"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}], "colour": 290, "tooltip": "Returns the gifts received and owned by a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_business_account_gifts", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_business_account_star_balance'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_business_account_star_balance", "message0": "\ud83e\udd16 get_business_account_star_balance business_connection_id %1", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}], "colour": 290, "tooltip": "Returns the amount of Telegram Stars owned by a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_business_account_star_balance", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_business_connection'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_business_connection", "message0": "\ud83e\udd16 get_business_connection business_connection_id %1", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}], "colour": 290, "tooltip": "Use this method to get information about the connection of the bot with a business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_business_connection", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_chat'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_chat", "message0": "\ud83e\udd16 get_chat chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get up to date information about the chat (current name of the user for", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_chat", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_chat_administrators'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_chat_administrators", "message0": "\ud83e\udd16 get_chat_administrators chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get a list of administrators in a chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_chat_administrators", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_chat_member'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_chat_member", "message0": "\ud83e\udd16 get_chat_member chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 290, "tooltip": "Use this method to get information about a member of a chat. The method is only", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_chat_member", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_chat_member_count'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_chat_member_count", "message0": "\ud83e\udd16 get_chat_member_count chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get the number of members in a chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_chat_member_count", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_chat_menu_button'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_chat_menu_button", "message0": "\ud83e\udd16 get_chat_menu_button chat_id (optional) %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get the current value of the bot's menu button in a private chat, or", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_chat_menu_button", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_custom_emoji_stickers'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_custom_emoji_stickers", "message0": "\ud83e\udd16 get_custom_emoji_stickers custom_emoji_ids %1", "args0": [{"type": "input_value", "name": "CUSTOM_EMOJI_IDS", "check": null}], "colour": 290, "tooltip": "Use this method to get information about emoji stickers by their identifiers.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_custom_emoji_stickers", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_file'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_file", "message0": "\ud83e\udd16 get_file file_id %1", "args0": [{"type": "input_value", "name": "FILE_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get basic info about a file and prepare it for downloading. For the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_file", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_forum_topic_icon_stickers'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_forum_topic_icon_stickers", "message0": "\ud83e\udd16 get_forum_topic_icon_stickers", "args0": [], "colour": 290, "tooltip": "Use this method to get custom emoji stickers, which can be used as a forum topic", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_forum_topic_icon_stickers", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_game_high_scores'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_game_high_scores", "message0": "\ud83e\udd16 get_game_high_scores user_id %1 chat_id (optional) %2 message_id (optional) %3 inline_message_id (optional) %4", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}], "colour": 290, "tooltip": "Use this method to get data for high score tables. Will return the score of the specified", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_game_high_scores", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_me'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_me", "message0": "\ud83e\udd16 get_me", "args0": [], "colour": 290, "tooltip": "A simple method for testing your bot's auth token. Requires no parameters.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_me", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_my_commands'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_my_commands", "message0": "\ud83e\udd16 get_my_commands scope (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "SCOPE", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current list of the bot's commands for the given scope and user", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_my_commands", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_my_default_administrator_rights'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_my_default_administrator_rights", "message0": "\ud83e\udd16 get_my_default_administrator_rights for_channels (optional) %1", "args0": [{"type": "input_value", "name": "FOR_CHANNELS", "check": null}], "colour": 290, "tooltip": "Use this method to get the current default administrator rights of the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_my_default_administrator_rights", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_my_description'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_my_description", "message0": "\ud83e\udd16 get_my_description language_code (optional) %1", "args0": [{"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current bot description for the given user language.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_my_description", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_my_name'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_my_name", "message0": "\ud83e\udd16 get_my_name language_code (optional) %1", "args0": [{"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current bot name for the given user language.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_my_name", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_my_short_description'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_my_short_description", "message0": "\ud83e\udd16 get_my_short_description language_code (optional) %1", "args0": [{"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 290, "tooltip": "Use this method to get the current bot short description for the given user language.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_my_short_description", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_my_star_balance'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_my_star_balance", "message0": "\ud83e\udd16 get_my_star_balance", "args0": [], "colour": 290, "tooltip": "A method to get the current Telegram Stars balance of the bot. Requires no parameters.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_my_star_balance", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_star_transactions'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_star_transactions", "message0": "\ud83e\udd16 get_star_transactions offset (optional) %1 limit (optional) %2", "args0": [{"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}], "colour": 290, "tooltip": "Returns the bot's Telegram Star transactions in chronological order.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_star_transactions", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_sticker_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_sticker_set", "message0": "\ud83e\udd16 get_sticker_set name %1", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}], "colour": 290, "tooltip": "Use this method to get a sticker set.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_sticker_set", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_updates'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_updates", "message0": "\ud83e\udd16 get_updates offset (optional) %1 limit (optional) %2 timeout (optional) %3 allowed_updates (optional) %4", "args0": [{"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}, {"type": "input_value", "name": "TIMEOUT", "check": null}, {"type": "input_value", "name": "ALLOWED_UPDATES", "check": null}], "colour": 290, "tooltip": "Use this method to receive incoming updates using long polling.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_updates", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_user_chat_boosts'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_user_chat_boosts", "message0": "\ud83e\udd16 get_user_chat_boosts chat_id %1 user_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 290, "tooltip": "Use this method to get the list of boosts added to a chat by a user. Requires", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_user_chat_boosts", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_user_profile_photos'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_user_profile_photos", "message0": "\ud83e\udd16 get_user_profile_photos user_id %1 offset (optional) %2 limit (optional) %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "OFFSET", "check": null}, {"type": "input_value", "name": "LIMIT", "check": null}], "colour": 290, "tooltip": "Use this method to get a list of profile pictures for a user.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_user_profile_photos", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_get_webhook_info'] = {
    init: function() {
        this.jsonInit({"type": "auto_get_webhook_info", "message0": "\ud83e\udd16 get_webhook_info", "args0": [], "colour": 290, "tooltip": "Use this method to get current webhook status. Requires no parameters.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.get_webhook_info", "auto_category": "Getting (API)", "output": null});
    },
    auto_category: "Getting (API)"
};


Blockly.Blocks['auto_giftPremiumSubscription'] = {
    init: function() {
        this.jsonInit({"type": "auto_giftPremiumSubscription", "message0": "\ud83e\udd16 giftPremiumSubscription user_id %1 month_count %2 star_count %3 text (optional) %4 text_parse_mode (optional) %5 text_entities (optional) %6", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "MONTH_COUNT", "check": "Number"}, {"type": "input_value", "name": "STAR_COUNT", "check": "Number"}, {"type": "input_value", "name": "TEXT", "check": null}, {"type": "input_value", "name": "TEXT_PARSE_MODE", "check": null}, {"type": "input_value", "name": "TEXT_ENTITIES", "check": null}], "colour": 230, "tooltip": "Gifts a Telegram Premium subscription to the given user.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.giftPremiumSubscription", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_gift_premium_subscription'] = {
    init: function() {
        this.jsonInit({"type": "auto_gift_premium_subscription", "message0": "\ud83e\udd16 gift_premium_subscription user_id %1 month_count %2 star_count %3 text (optional) %4 text_parse_mode (optional) %5 text_entities (optional) %6", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "MONTH_COUNT", "check": "Number"}, {"type": "input_value", "name": "STAR_COUNT", "check": "Number"}, {"type": "input_value", "name": "TEXT", "check": null}, {"type": "input_value", "name": "TEXT_PARSE_MODE", "check": null}, {"type": "input_value", "name": "TEXT_ENTITIES", "check": null}], "colour": 230, "tooltip": "Gifts a Telegram Premium subscription to the given user.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.gift_premium_subscription", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_hideGeneralForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_hideGeneralForumTopic", "message0": "\ud83e\udd16 hideGeneralForumTopic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to hide the 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.hideGeneralForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_hide_general_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_hide_general_forum_topic", "message0": "\ud83e\udd16 hide_general_forum_topic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to hide the 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.hide_general_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_initialize'] = {
    init: function() {
        this.jsonInit({"type": "auto_initialize", "message0": "\ud83e\udd16 initialize", "args0": [], "colour": 230, "tooltip": "Initialize resources used by this class. Currently calls :meth:`get_me` to", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.initialize", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_leaveChat'] = {
    init: function() {
        this.jsonInit({"type": "auto_leaveChat", "message0": "\ud83e\udd16 leaveChat chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method for your bot to leave a group, supergroup or channel.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.leaveChat", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_leave_chat'] = {
    init: function() {
        this.jsonInit({"type": "auto_leave_chat", "message0": "\ud83e\udd16 leave_chat chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method for your bot to leave a group, supergroup or channel.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.leave_chat", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_logOut'] = {
    init: function() {
        this.jsonInit({"type": "auto_logOut", "message0": "\ud83e\udd16 logOut", "args0": [], "colour": 230, "tooltip": "Use this method to log out from the cloud Bot API server before launching the bot locally.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.logOut", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_log_out'] = {
    init: function() {
        this.jsonInit({"type": "auto_log_out", "message0": "\ud83e\udd16 log_out", "args0": [], "colour": 230, "tooltip": "Use this method to log out from the cloud Bot API server before launching the bot locally.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.log_out", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_pinChatMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_pinChatMessage", "message0": "\ud83e\udd16 pinChatMessage chat_id %1 message_id %2 disable_notification (optional) %3 business_connection_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 60, "tooltip": "Use this method to add a message to the list of pinned messages in a chat. If the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.pinChatMessage", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_pin_chat_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_pin_chat_message", "message0": "\ud83e\udd16 pin_chat_message chat_id %1 message_id %2 disable_notification (optional) %3 business_connection_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 60, "tooltip": "Use this method to add a message to the list of pinned messages in a chat. If the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.pin_chat_message", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_postStory'] = {
    init: function() {
        this.jsonInit({"type": "auto_postStory", "message0": "\ud83e\udd16 postStory business_connection_id %1 content %2 active_period %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 areas (optional) %7 post_to_chat_page (optional) %8 protect_content (optional) %9", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CONTENT", "check": null}, {"type": "input_value", "name": "ACTIVE_PERIOD", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "AREAS", "check": null}, {"type": "input_value", "name": "POST_TO_CHAT_PAGE", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}], "colour": 230, "tooltip": "Posts a story on behalf of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.postStory", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_post_story'] = {
    init: function() {
        this.jsonInit({"type": "auto_post_story", "message0": "\ud83e\udd16 post_story business_connection_id %1 content %2 active_period %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 areas (optional) %7 post_to_chat_page (optional) %8 protect_content (optional) %9", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CONTENT", "check": null}, {"type": "input_value", "name": "ACTIVE_PERIOD", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "AREAS", "check": null}, {"type": "input_value", "name": "POST_TO_CHAT_PAGE", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}], "colour": 230, "tooltip": "Posts a story on behalf of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.post_story", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_promoteChatMember'] = {
    init: function() {
        this.jsonInit({"type": "auto_promoteChatMember", "message0": "\ud83e\udd16 promoteChatMember chat_id %1 user_id %2 can_change_info (optional) %3 can_post_messages (optional) %4 can_edit_messages (optional) %5 can_delete_messages (optional) %6 can_invite_users (optional) %7 can_restrict_members (optional) %8 can_pin_messages (optional) %9 can_promote_members (optional) %10 is_anonymous (optional) %11 can_manage_chat (optional) %12 can_manage_video_chats (optional) %13 can_manage_topics (optional) %14 can_post_stories (optional) %15 can_edit_stories (optional) %16 can_delete_stories (optional) %17 can_manage_direct_messages (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CAN_CHANGE_INFO", "check": null}, {"type": "input_value", "name": "CAN_POST_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_EDIT_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_DELETE_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_INVITE_USERS", "check": null}, {"type": "input_value", "name": "CAN_RESTRICT_MEMBERS", "check": null}, {"type": "input_value", "name": "CAN_PIN_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_PROMOTE_MEMBERS", "check": null}, {"type": "input_value", "name": "IS_ANONYMOUS", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_CHAT", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_VIDEO_CHATS", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_TOPICS", "check": null}, {"type": "input_value", "name": "CAN_POST_STORIES", "check": null}, {"type": "input_value", "name": "CAN_EDIT_STORIES", "check": null}, {"type": "input_value", "name": "CAN_DELETE_STORIES", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_DIRECT_MESSAGES", "check": null}], "colour": 60, "tooltip": "Use this method to promote or demote a user in a supergroup or a channel. The bot must be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.promoteChatMember", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_promote_chat_member'] = {
    init: function() {
        this.jsonInit({"type": "auto_promote_chat_member", "message0": "\ud83e\udd16 promote_chat_member chat_id %1 user_id %2 can_change_info (optional) %3 can_post_messages (optional) %4 can_edit_messages (optional) %5 can_delete_messages (optional) %6 can_invite_users (optional) %7 can_restrict_members (optional) %8 can_pin_messages (optional) %9 can_promote_members (optional) %10 is_anonymous (optional) %11 can_manage_chat (optional) %12 can_manage_video_chats (optional) %13 can_manage_topics (optional) %14 can_post_stories (optional) %15 can_edit_stories (optional) %16 can_delete_stories (optional) %17 can_manage_direct_messages (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CAN_CHANGE_INFO", "check": null}, {"type": "input_value", "name": "CAN_POST_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_EDIT_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_DELETE_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_INVITE_USERS", "check": null}, {"type": "input_value", "name": "CAN_RESTRICT_MEMBERS", "check": null}, {"type": "input_value", "name": "CAN_PIN_MESSAGES", "check": null}, {"type": "input_value", "name": "CAN_PROMOTE_MEMBERS", "check": null}, {"type": "input_value", "name": "IS_ANONYMOUS", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_CHAT", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_VIDEO_CHATS", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_TOPICS", "check": null}, {"type": "input_value", "name": "CAN_POST_STORIES", "check": null}, {"type": "input_value", "name": "CAN_EDIT_STORIES", "check": null}, {"type": "input_value", "name": "CAN_DELETE_STORIES", "check": null}, {"type": "input_value", "name": "CAN_MANAGE_DIRECT_MESSAGES", "check": null}], "colour": 60, "tooltip": "Use this method to promote or demote a user in a supergroup or a channel. The bot must be", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.promote_chat_member", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_readBusinessMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_readBusinessMessage", "message0": "\ud83e\udd16 readBusinessMessage business_connection_id %1 chat_id %2 message_id %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}], "colour": 230, "tooltip": "Marks incoming message as read on behalf of a business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.readBusinessMessage", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_read_business_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_read_business_message", "message0": "\ud83e\udd16 read_business_message business_connection_id %1 chat_id %2 message_id %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}], "colour": 230, "tooltip": "Marks incoming message as read on behalf of a business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.read_business_message", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_refundStarPayment'] = {
    init: function() {
        this.jsonInit({"type": "auto_refundStarPayment", "message0": "\ud83e\udd16 refundStarPayment user_id %1 telegram_payment_charge_id %2", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "TELEGRAM_PAYMENT_CHARGE_ID", "check": "String"}], "colour": 230, "tooltip": "Refunds a successful payment in |tg_stars|.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.refundStarPayment", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_refund_star_payment'] = {
    init: function() {
        this.jsonInit({"type": "auto_refund_star_payment", "message0": "\ud83e\udd16 refund_star_payment user_id %1 telegram_payment_charge_id %2", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "TELEGRAM_PAYMENT_CHARGE_ID", "check": "String"}], "colour": 230, "tooltip": "Refunds a successful payment in |tg_stars|.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.refund_star_payment", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_removeBusinessAccountProfilePhoto'] = {
    init: function() {
        this.jsonInit({"type": "auto_removeBusinessAccountProfilePhoto", "message0": "\ud83e\udd16 removeBusinessAccountProfilePhoto business_connection_id %1 is_public (optional) %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "IS_PUBLIC", "check": null}], "colour": 0, "tooltip": "Removes the current profile photo of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.removeBusinessAccountProfilePhoto", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_removeChatVerification'] = {
    init: function() {
        this.jsonInit({"type": "auto_removeChatVerification", "message0": "\ud83e\udd16 removeChatVerification chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 0, "tooltip": "Removes verification from a chat that is currently verified |org-verify|", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.removeChatVerification", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_removeUserVerification'] = {
    init: function() {
        this.jsonInit({"type": "auto_removeUserVerification", "message0": "\ud83e\udd16 removeUserVerification user_id %1", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 0, "tooltip": "Removes verification from a user who is currently verified |org-verify|", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.removeUserVerification", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_remove_business_account_profile_photo'] = {
    init: function() {
        this.jsonInit({"type": "auto_remove_business_account_profile_photo", "message0": "\ud83e\udd16 remove_business_account_profile_photo business_connection_id %1 is_public (optional) %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "IS_PUBLIC", "check": null}], "colour": 0, "tooltip": "Removes the current profile photo of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.remove_business_account_profile_photo", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_remove_chat_verification'] = {
    init: function() {
        this.jsonInit({"type": "auto_remove_chat_verification", "message0": "\ud83e\udd16 remove_chat_verification chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 0, "tooltip": "Removes verification from a chat that is currently verified |org-verify|", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.remove_chat_verification", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_remove_user_verification'] = {
    init: function() {
        this.jsonInit({"type": "auto_remove_user_verification", "message0": "\ud83e\udd16 remove_user_verification user_id %1", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}], "colour": 0, "tooltip": "Removes verification from a user who is currently verified |org-verify|", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.remove_user_verification", "auto_category": "Deleting (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Deleting (API)"
};


Blockly.Blocks['auto_reopenForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_reopenForumTopic", "message0": "\ud83e\udd16 reopenForumTopic chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to reopen a closed topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.reopenForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_reopenGeneralForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_reopenGeneralForumTopic", "message0": "\ud83e\udd16 reopenGeneralForumTopic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.reopenGeneralForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_reopen_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_reopen_forum_topic", "message0": "\ud83e\udd16 reopen_forum_topic chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 230, "tooltip": "Use this method to reopen a closed topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.reopen_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_reopen_general_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_reopen_general_forum_topic", "message0": "\ud83e\udd16 reopen_general_forum_topic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.reopen_general_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_replaceStickerInSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_replaceStickerInSet", "message0": "\ud83e\udd16 replaceStickerInSet user_id %1 name %2 old_sticker %3 sticker %4", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "OLD_STICKER", "check": null}, {"type": "input_value", "name": "STICKER", "check": null}], "colour": 60, "tooltip": "Use this method to replace an existing sticker in a sticker set with a new one.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.replaceStickerInSet", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_replace_sticker_in_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_replace_sticker_in_set", "message0": "\ud83e\udd16 replace_sticker_in_set user_id %1 name %2 old_sticker %3 sticker %4", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "OLD_STICKER", "check": null}, {"type": "input_value", "name": "STICKER", "check": null}], "colour": 60, "tooltip": "Use this method to replace an existing sticker in a sticker set with a new one.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.replace_sticker_in_set", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_restrictChatMember'] = {
    init: function() {
        this.jsonInit({"type": "auto_restrictChatMember", "message0": "\ud83e\udd16 restrictChatMember chat_id %1 user_id %2 permissions %3 until_date (optional) %4 use_independent_chat_permissions (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "PERMISSIONS", "check": null}, {"type": "input_value", "name": "UNTIL_DATE", "check": null}, {"type": "input_value", "name": "USE_INDEPENDENT_CHAT_PERMISSIONS", "check": null}], "colour": 60, "tooltip": "Use this method to restrict a user in a supergroup. The bot must be an administrator in", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.restrictChatMember", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_restrict_chat_member'] = {
    init: function() {
        this.jsonInit({"type": "auto_restrict_chat_member", "message0": "\ud83e\udd16 restrict_chat_member chat_id %1 user_id %2 permissions %3 until_date (optional) %4 use_independent_chat_permissions (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "PERMISSIONS", "check": null}, {"type": "input_value", "name": "UNTIL_DATE", "check": null}, {"type": "input_value", "name": "USE_INDEPENDENT_CHAT_PERMISSIONS", "check": null}], "colour": 60, "tooltip": "Use this method to restrict a user in a supergroup. The bot must be an administrator in", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.restrict_chat_member", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_revokeChatInviteLink'] = {
    init: function() {
        this.jsonInit({"type": "auto_revokeChatInviteLink", "message0": "\ud83e\udd16 revokeChatInviteLink chat_id %1 invite_link %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "INVITE_LINK", "check": null}], "colour": 230, "tooltip": "Use this method to revoke an invite link created by the bot. If the primary link is", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.revokeChatInviteLink", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_revoke_chat_invite_link'] = {
    init: function() {
        this.jsonInit({"type": "auto_revoke_chat_invite_link", "message0": "\ud83e\udd16 revoke_chat_invite_link chat_id %1 invite_link %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "INVITE_LINK", "check": null}], "colour": 230, "tooltip": "Use this method to revoke an invite link created by the bot. If the primary link is", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.revoke_chat_invite_link", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_savePreparedInlineMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_savePreparedInlineMessage", "message0": "\ud83e\udd16 savePreparedInlineMessage user_id %1 result %2 allow_user_chats (optional) %3 allow_bot_chats (optional) %4 allow_group_chats (optional) %5 allow_channel_chats (optional) %6", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "RESULT", "check": null}, {"type": "input_value", "name": "ALLOW_USER_CHATS", "check": null}, {"type": "input_value", "name": "ALLOW_BOT_CHATS", "check": null}, {"type": "input_value", "name": "ALLOW_GROUP_CHATS", "check": null}, {"type": "input_value", "name": "ALLOW_CHANNEL_CHATS", "check": null}], "colour": 230, "tooltip": "Stores a message that can be sent by a user of a Mini App.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.savePreparedInlineMessage", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_save_prepared_inline_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_save_prepared_inline_message", "message0": "\ud83e\udd16 save_prepared_inline_message user_id %1 result %2 allow_user_chats (optional) %3 allow_bot_chats (optional) %4 allow_group_chats (optional) %5 allow_channel_chats (optional) %6", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "RESULT", "check": null}, {"type": "input_value", "name": "ALLOW_USER_CHATS", "check": null}, {"type": "input_value", "name": "ALLOW_BOT_CHATS", "check": null}, {"type": "input_value", "name": "ALLOW_GROUP_CHATS", "check": null}, {"type": "input_value", "name": "ALLOW_CHANNEL_CHATS", "check": null}], "colour": 230, "tooltip": "Stores a message that can be sent by a user of a Mini App.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.save_prepared_inline_message", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_sendAnimation'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendAnimation", "message0": "\ud83e\udd16 sendAnimation chat_id %1 animation %2 duration (optional) %3 width (optional) %4 height (optional) %5 caption (optional) %6 parse_mode (optional) %7 disable_notification (optional) %8 reply_markup (optional) %9 caption_entities (optional) %10 protect_content (optional) %11 message_thread_id (optional) %12 has_spoiler (optional) %13 thumbnail (optional) %14 reply_parameters (optional) %15 business_connection_id (optional) %16 message_effect_id (optional) %17 allow_paid_broadcast (optional) %18 show_caption_above_media (optional) %19 direct_messages_topic_id (optional) %20 suggested_post_parameters (optional) %21 allow_sending_without_reply (optional) %22 reply_to_message_id (optional) %23 filename (optional) %24", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "ANIMATION", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "WIDTH", "check": null}, {"type": "input_value", "name": "HEIGHT", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "HAS_SPOILER", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound).", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendAnimation", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendAudio'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendAudio", "message0": "\ud83e\udd16 sendAudio chat_id %1 audio %2 duration (optional) %3 performer (optional) %4 title (optional) %5 caption (optional) %6 disable_notification (optional) %7 reply_markup (optional) %8 parse_mode (optional) %9 caption_entities (optional) %10 protect_content (optional) %11 message_thread_id (optional) %12 thumbnail (optional) %13 reply_parameters (optional) %14 business_connection_id (optional) %15 message_effect_id (optional) %16 allow_paid_broadcast (optional) %17 direct_messages_topic_id (optional) %18 suggested_post_parameters (optional) %19 allow_sending_without_reply (optional) %20 reply_to_message_id (optional) %21 filename (optional) %22", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "AUDIO", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "PERFORMER", "check": null}, {"type": "input_value", "name": "TITLE", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send audio files, if you want Telegram clients to display them in the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendAudio", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendChatAction'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendChatAction", "message0": "\ud83e\udd16 sendChatAction chat_id %1 action %2 message_thread_id (optional) %3 business_connection_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "ACTION", "check": "String"}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 160, "tooltip": "Use this method when you need to tell the user that something is happening on the bot's", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendChatAction", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendChecklist'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendChecklist", "message0": "\ud83e\udd16 sendChecklist business_connection_id %1 chat_id %2 checklist %3 disable_notification (optional) %4 protect_content (optional) %5 message_effect_id (optional) %6 reply_parameters (optional) %7 reply_markup (optional) %8 allow_sending_without_reply (optional) %9 reply_to_message_id (optional) %10", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "CHECKLIST", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send a checklist on behalf of a connected business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendChecklist", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendContact'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendContact", "message0": "\ud83e\udd16 sendContact chat_id %1 phone_number (optional) %2 first_name (optional) %3 last_name (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 vcard (optional) %7 protect_content (optional) %8 message_thread_id (optional) %9 reply_parameters (optional) %10 business_connection_id (optional) %11 message_effect_id (optional) %12 allow_paid_broadcast (optional) %13 direct_messages_topic_id (optional) %14 suggested_post_parameters (optional) %15 allow_sending_without_reply (optional) %16 reply_to_message_id (optional) %17 contact (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PHONE_NUMBER", "check": null}, {"type": "input_value", "name": "FIRST_NAME", "check": null}, {"type": "input_value", "name": "LAST_NAME", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "VCARD", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "CONTACT", "check": null}], "colour": 160, "tooltip": "Use this method to send phone contacts.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendContact", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendDice'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendDice", "message0": "\ud83e\udd16 sendDice chat_id %1 disable_notification (optional) %2 reply_markup (optional) %3 emoji (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 reply_parameters (optional) %7 business_connection_id (optional) %8 message_effect_id (optional) %9 allow_paid_broadcast (optional) %10 direct_messages_topic_id (optional) %11 suggested_post_parameters (optional) %12 allow_sending_without_reply (optional) %13 reply_to_message_id (optional) %14", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "EMOJI", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send an animated emoji that will display a random value.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendDice", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendDocument'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendDocument", "message0": "\ud83e\udd16 sendDocument chat_id %1 document %2 caption (optional) %3 disable_notification (optional) %4 reply_markup (optional) %5 parse_mode (optional) %6 disable_content_type_detection (optional) %7 caption_entities (optional) %8 protect_content (optional) %9 message_thread_id (optional) %10 thumbnail (optional) %11 reply_parameters (optional) %12 business_connection_id (optional) %13 message_effect_id (optional) %14 allow_paid_broadcast (optional) %15 direct_messages_topic_id (optional) %16 suggested_post_parameters (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19 filename (optional) %20", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "DOCUMENT", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "DISABLE_CONTENT_TYPE_DETECTION", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send general files.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendDocument", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendGame'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendGame", "message0": "\ud83e\udd16 sendGame chat_id %1 game_short_name %2 disable_notification (optional) %3 reply_markup (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 reply_parameters (optional) %7 business_connection_id (optional) %8 message_effect_id (optional) %9 allow_paid_broadcast (optional) %10 allow_sending_without_reply (optional) %11 reply_to_message_id (optional) %12", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "GAME_SHORT_NAME", "check": "String"}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send a game.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendGame", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendGift'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendGift", "message0": "\ud83e\udd16 sendGift gift_id %1 text (optional) %2 text_parse_mode (optional) %3 text_entities (optional) %4 pay_for_upgrade (optional) %5 chat_id (optional) %6 user_id (optional) %7", "args0": [{"type": "input_value", "name": "GIFT_ID", "check": null}, {"type": "input_value", "name": "TEXT", "check": null}, {"type": "input_value", "name": "TEXT_PARSE_MODE", "check": null}, {"type": "input_value", "name": "TEXT_ENTITIES", "check": null}, {"type": "input_value", "name": "PAY_FOR_UPGRADE", "check": null}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": null}], "colour": 160, "tooltip": "Sends a gift to the given user or channel chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendGift", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendInvoice'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendInvoice", "message0": "\ud83e\udd16 sendInvoice chat_id %1 title %2 description %3 payload %4 currency %5 prices %6 provider_token (optional) %7 start_parameter (optional) %8 photo_url (optional) %9 photo_size (optional) %10 photo_width (optional) %11 photo_height (optional) %12 need_name (optional) %13 need_phone_number (optional) %14 need_email (optional) %15 need_shipping_address (optional) %16 is_flexible (optional) %17 disable_notification (optional) %18 reply_markup (optional) %19 provider_data (optional) %20 send_phone_number_to_provider (optional) %21 send_email_to_provider (optional) %22 max_tip_amount (optional) %23 suggested_tip_amounts (optional) %24 protect_content (optional) %25 message_thread_id (optional) %26 reply_parameters (optional) %27 message_effect_id (optional) %28 allow_paid_broadcast (optional) %29 direct_messages_topic_id (optional) %30 suggested_post_parameters (optional) %31 allow_sending_without_reply (optional) %32 reply_to_message_id (optional) %33", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "TITLE", "check": "String"}, {"type": "input_value", "name": "DESCRIPTION", "check": "String"}, {"type": "input_value", "name": "PAYLOAD", "check": "String"}, {"type": "input_value", "name": "CURRENCY", "check": "String"}, {"type": "input_value", "name": "PRICES", "check": null}, {"type": "input_value", "name": "PROVIDER_TOKEN", "check": null}, {"type": "input_value", "name": "START_PARAMETER", "check": null}, {"type": "input_value", "name": "PHOTO_URL", "check": null}, {"type": "input_value", "name": "PHOTO_SIZE", "check": null}, {"type": "input_value", "name": "PHOTO_WIDTH", "check": null}, {"type": "input_value", "name": "PHOTO_HEIGHT", "check": null}, {"type": "input_value", "name": "NEED_NAME", "check": null}, {"type": "input_value", "name": "NEED_PHONE_NUMBER", "check": null}, {"type": "input_value", "name": "NEED_EMAIL", "check": null}, {"type": "input_value", "name": "NEED_SHIPPING_ADDRESS", "check": null}, {"type": "input_value", "name": "IS_FLEXIBLE", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROVIDER_DATA", "check": null}, {"type": "input_value", "name": "SEND_PHONE_NUMBER_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "SEND_EMAIL_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "MAX_TIP_AMOUNT", "check": null}, {"type": "input_value", "name": "SUGGESTED_TIP_AMOUNTS", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send invoices.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendInvoice", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendLocation'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendLocation", "message0": "\ud83e\udd16 sendLocation chat_id %1 latitude (optional) %2 longitude (optional) %3 disable_notification (optional) %4 reply_markup (optional) %5 live_period (optional) %6 horizontal_accuracy (optional) %7 heading (optional) %8 proximity_alert_radius (optional) %9 protect_content (optional) %10 message_thread_id (optional) %11 reply_parameters (optional) %12 business_connection_id (optional) %13 message_effect_id (optional) %14 allow_paid_broadcast (optional) %15 direct_messages_topic_id (optional) %16 suggested_post_parameters (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19 location (optional) %20", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "LATITUDE", "check": null}, {"type": "input_value", "name": "LONGITUDE", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "LIVE_PERIOD", "check": null}, {"type": "input_value", "name": "HORIZONTAL_ACCURACY", "check": null}, {"type": "input_value", "name": "HEADING", "check": null}, {"type": "input_value", "name": "PROXIMITY_ALERT_RADIUS", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "LOCATION", "check": null}], "colour": 160, "tooltip": "Use this method to send point on the map.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendLocation", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendMediaGroup'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendMediaGroup", "message0": "\ud83e\udd16 sendMediaGroup chat_id %1 media %2 disable_notification (optional) %3 protect_content (optional) %4 message_thread_id (optional) %5 reply_parameters (optional) %6 business_connection_id (optional) %7 message_effect_id (optional) %8 allow_paid_broadcast (optional) %9 direct_messages_topic_id (optional) %10 allow_sending_without_reply (optional) %11 reply_to_message_id (optional) %12 caption (optional) %13 parse_mode (optional) %14 caption_entities (optional) %15", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MEDIA", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}], "colour": 160, "tooltip": "Use this method to send a group of photos, videos, documents or audios as an album.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendMediaGroup", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendMessage", "message0": "\ud83e\udd16 sendMessage chat_id %1 text %2 parse_mode (optional) %3 entities (optional) %4 disable_notification (optional) %5 protect_content (optional) %6 reply_markup (optional) %7 message_thread_id (optional) %8 link_preview_options (optional) %9 reply_parameters (optional) %10 business_connection_id (optional) %11 message_effect_id (optional) %12 allow_paid_broadcast (optional) %13 direct_messages_topic_id (optional) %14 suggested_post_parameters (optional) %15 allow_sending_without_reply (optional) %16 reply_to_message_id (optional) %17 disable_web_page_preview (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "TEXT", "check": "String"}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "ENTITIES", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "LINK_PREVIEW_OPTIONS", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "DISABLE_WEB_PAGE_PREVIEW", "check": null}], "colour": 160, "tooltip": "Use this method to send text messages.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendMessage", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendPaidMedia'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendPaidMedia", "message0": "\ud83e\udd16 sendPaidMedia chat_id %1 star_count %2 media %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 show_caption_above_media (optional) %7 disable_notification (optional) %8 protect_content (optional) %9 reply_parameters (optional) %10 reply_markup (optional) %11 business_connection_id (optional) %12 payload (optional) %13 allow_paid_broadcast (optional) %14 direct_messages_topic_id (optional) %15 suggested_post_parameters (optional) %16 message_thread_id (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "STAR_COUNT", "check": "Number"}, {"type": "input_value", "name": "MEDIA", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "PAYLOAD", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send paid media.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendPaidMedia", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendPhoto'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendPhoto", "message0": "\ud83e\udd16 sendPhoto chat_id %1 photo %2 caption (optional) %3 disable_notification (optional) %4 reply_markup (optional) %5 parse_mode (optional) %6 caption_entities (optional) %7 protect_content (optional) %8 message_thread_id (optional) %9 has_spoiler (optional) %10 reply_parameters (optional) %11 business_connection_id (optional) %12 message_effect_id (optional) %13 allow_paid_broadcast (optional) %14 show_caption_above_media (optional) %15 direct_messages_topic_id (optional) %16 suggested_post_parameters (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19 filename (optional) %20", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PHOTO", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "HAS_SPOILER", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send photos.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendPhoto", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendPoll'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendPoll", "message0": "\ud83e\udd16 sendPoll chat_id %1 question %2 options %3 is_anonymous (optional) %4 type (optional) %5 allows_multiple_answers (optional) %6 correct_option_id (optional) %7 is_closed (optional) %8 disable_notification (optional) %9 reply_markup (optional) %10 explanation (optional) %11 explanation_parse_mode (optional) %12 open_period (optional) %13 close_date (optional) %14 explanation_entities (optional) %15 protect_content (optional) %16 message_thread_id (optional) %17 reply_parameters (optional) %18 business_connection_id (optional) %19 question_parse_mode (optional) %20 question_entities (optional) %21 message_effect_id (optional) %22 allow_paid_broadcast (optional) %23 allow_sending_without_reply (optional) %24 reply_to_message_id (optional) %25", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "QUESTION", "check": "String"}, {"type": "input_value", "name": "OPTIONS", "check": null}, {"type": "input_value", "name": "IS_ANONYMOUS", "check": null}, {"type": "input_value", "name": "TYPE", "check": null}, {"type": "input_value", "name": "ALLOWS_MULTIPLE_ANSWERS", "check": null}, {"type": "input_value", "name": "CORRECT_OPTION_ID", "check": null}, {"type": "input_value", "name": "IS_CLOSED", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "EXPLANATION", "check": null}, {"type": "input_value", "name": "EXPLANATION_PARSE_MODE", "check": null}, {"type": "input_value", "name": "OPEN_PERIOD", "check": null}, {"type": "input_value", "name": "CLOSE_DATE", "check": null}, {"type": "input_value", "name": "EXPLANATION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "QUESTION_PARSE_MODE", "check": null}, {"type": "input_value", "name": "QUESTION_ENTITIES", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send a native poll.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendPoll", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendSticker'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendSticker", "message0": "\ud83e\udd16 sendSticker chat_id %1 sticker %2 disable_notification (optional) %3 reply_markup (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 emoji (optional) %7 reply_parameters (optional) %8 business_connection_id (optional) %9 message_effect_id (optional) %10 allow_paid_broadcast (optional) %11 direct_messages_topic_id (optional) %12 suggested_post_parameters (optional) %13 allow_sending_without_reply (optional) %14 reply_to_message_id (optional) %15", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "EMOJI", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send static ``.WEBP``, animated ``.TGS``, or video ``.WEBM`` stickers.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendSticker", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendVenue'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendVenue", "message0": "\ud83e\udd16 sendVenue chat_id %1 latitude (optional) %2 longitude (optional) %3 title (optional) %4 address (optional) %5 foursquare_id (optional) %6 disable_notification (optional) %7 reply_markup (optional) %8 foursquare_type (optional) %9 google_place_id (optional) %10 google_place_type (optional) %11 protect_content (optional) %12 message_thread_id (optional) %13 reply_parameters (optional) %14 business_connection_id (optional) %15 message_effect_id (optional) %16 allow_paid_broadcast (optional) %17 direct_messages_topic_id (optional) %18 suggested_post_parameters (optional) %19 allow_sending_without_reply (optional) %20 reply_to_message_id (optional) %21 venue (optional) %22", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "LATITUDE", "check": null}, {"type": "input_value", "name": "LONGITUDE", "check": null}, {"type": "input_value", "name": "TITLE", "check": null}, {"type": "input_value", "name": "ADDRESS", "check": null}, {"type": "input_value", "name": "FOURSQUARE_ID", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "FOURSQUARE_TYPE", "check": null}, {"type": "input_value", "name": "GOOGLE_PLACE_ID", "check": null}, {"type": "input_value", "name": "GOOGLE_PLACE_TYPE", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "VENUE", "check": null}], "colour": 160, "tooltip": "Use this method to send information about a venue.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendVenue", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendVideo'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendVideo", "message0": "\ud83e\udd16 sendVideo chat_id %1 video %2 duration (optional) %3 caption (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 width (optional) %7 height (optional) %8 parse_mode (optional) %9 supports_streaming (optional) %10 caption_entities (optional) %11 protect_content (optional) %12 message_thread_id (optional) %13 has_spoiler (optional) %14 thumbnail (optional) %15 reply_parameters (optional) %16 business_connection_id (optional) %17 message_effect_id (optional) %18 allow_paid_broadcast (optional) %19 show_caption_above_media (optional) %20 cover (optional) %21 start_timestamp (optional) %22 direct_messages_topic_id (optional) %23 suggested_post_parameters (optional) %24 allow_sending_without_reply (optional) %25 reply_to_message_id (optional) %26 filename (optional) %27", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "VIDEO", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "WIDTH", "check": null}, {"type": "input_value", "name": "HEIGHT", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "SUPPORTS_STREAMING", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "HAS_SPOILER", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "COVER", "check": null}, {"type": "input_value", "name": "START_TIMESTAMP", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send video files, Telegram clients support mp4 videos", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendVideo", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendVideoNote'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendVideoNote", "message0": "\ud83e\udd16 sendVideoNote chat_id %1 video_note %2 duration (optional) %3 length (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 protect_content (optional) %7 message_thread_id (optional) %8 thumbnail (optional) %9 reply_parameters (optional) %10 business_connection_id (optional) %11 message_effect_id (optional) %12 allow_paid_broadcast (optional) %13 direct_messages_topic_id (optional) %14 suggested_post_parameters (optional) %15 allow_sending_without_reply (optional) %16 reply_to_message_id (optional) %17 filename (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "VIDEO_NOTE", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "LENGTH", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendVideoNote", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_sendVoice'] = {
    init: function() {
        this.jsonInit({"type": "auto_sendVoice", "message0": "\ud83e\udd16 sendVoice chat_id %1 voice %2 duration (optional) %3 caption (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 parse_mode (optional) %7 caption_entities (optional) %8 protect_content (optional) %9 message_thread_id (optional) %10 reply_parameters (optional) %11 business_connection_id (optional) %12 message_effect_id (optional) %13 allow_paid_broadcast (optional) %14 direct_messages_topic_id (optional) %15 suggested_post_parameters (optional) %16 allow_sending_without_reply (optional) %17 reply_to_message_id (optional) %18 filename (optional) %19", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "VOICE", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send audio files, if you want Telegram clients to display the file", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.sendVoice", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_animation'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_animation", "message0": "\ud83e\udd16 send_animation chat_id %1 animation %2 duration (optional) %3 width (optional) %4 height (optional) %5 caption (optional) %6 parse_mode (optional) %7 disable_notification (optional) %8 reply_markup (optional) %9 caption_entities (optional) %10 protect_content (optional) %11 message_thread_id (optional) %12 has_spoiler (optional) %13 thumbnail (optional) %14 reply_parameters (optional) %15 business_connection_id (optional) %16 message_effect_id (optional) %17 allow_paid_broadcast (optional) %18 show_caption_above_media (optional) %19 direct_messages_topic_id (optional) %20 suggested_post_parameters (optional) %21 allow_sending_without_reply (optional) %22 reply_to_message_id (optional) %23 filename (optional) %24", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "ANIMATION", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "WIDTH", "check": null}, {"type": "input_value", "name": "HEIGHT", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "HAS_SPOILER", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound).", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_animation", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_audio'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_audio", "message0": "\ud83e\udd16 send_audio chat_id %1 audio %2 duration (optional) %3 performer (optional) %4 title (optional) %5 caption (optional) %6 disable_notification (optional) %7 reply_markup (optional) %8 parse_mode (optional) %9 caption_entities (optional) %10 protect_content (optional) %11 message_thread_id (optional) %12 thumbnail (optional) %13 reply_parameters (optional) %14 business_connection_id (optional) %15 message_effect_id (optional) %16 allow_paid_broadcast (optional) %17 direct_messages_topic_id (optional) %18 suggested_post_parameters (optional) %19 allow_sending_without_reply (optional) %20 reply_to_message_id (optional) %21 filename (optional) %22", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "AUDIO", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "PERFORMER", "check": null}, {"type": "input_value", "name": "TITLE", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send audio files, if you want Telegram clients to display them in the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_audio", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_chat_action'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_chat_action", "message0": "\ud83e\udd16 send_chat_action chat_id %1 action %2 message_thread_id (optional) %3 business_connection_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "ACTION", "check": "String"}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 160, "tooltip": "Use this method when you need to tell the user that something is happening on the bot's", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_chat_action", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_checklist'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_checklist", "message0": "\ud83e\udd16 send_checklist business_connection_id %1 chat_id %2 checklist %3 disable_notification (optional) %4 protect_content (optional) %5 message_effect_id (optional) %6 reply_parameters (optional) %7 reply_markup (optional) %8 allow_sending_without_reply (optional) %9 reply_to_message_id (optional) %10", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "CHECKLIST", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send a checklist on behalf of a connected business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_checklist", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_contact'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_contact", "message0": "\ud83e\udd16 send_contact chat_id %1 phone_number (optional) %2 first_name (optional) %3 last_name (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 vcard (optional) %7 protect_content (optional) %8 message_thread_id (optional) %9 reply_parameters (optional) %10 business_connection_id (optional) %11 message_effect_id (optional) %12 allow_paid_broadcast (optional) %13 direct_messages_topic_id (optional) %14 suggested_post_parameters (optional) %15 allow_sending_without_reply (optional) %16 reply_to_message_id (optional) %17 contact (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PHONE_NUMBER", "check": null}, {"type": "input_value", "name": "FIRST_NAME", "check": null}, {"type": "input_value", "name": "LAST_NAME", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "VCARD", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "CONTACT", "check": null}], "colour": 160, "tooltip": "Use this method to send phone contacts.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_contact", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_dice'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_dice", "message0": "\ud83e\udd16 send_dice chat_id %1 disable_notification (optional) %2 reply_markup (optional) %3 emoji (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 reply_parameters (optional) %7 business_connection_id (optional) %8 message_effect_id (optional) %9 allow_paid_broadcast (optional) %10 direct_messages_topic_id (optional) %11 suggested_post_parameters (optional) %12 allow_sending_without_reply (optional) %13 reply_to_message_id (optional) %14", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "EMOJI", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send an animated emoji that will display a random value.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_dice", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_document'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_document", "message0": "\ud83e\udd16 send_document chat_id %1 document %2 caption (optional) %3 disable_notification (optional) %4 reply_markup (optional) %5 parse_mode (optional) %6 disable_content_type_detection (optional) %7 caption_entities (optional) %8 protect_content (optional) %9 message_thread_id (optional) %10 thumbnail (optional) %11 reply_parameters (optional) %12 business_connection_id (optional) %13 message_effect_id (optional) %14 allow_paid_broadcast (optional) %15 direct_messages_topic_id (optional) %16 suggested_post_parameters (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19 filename (optional) %20", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "DOCUMENT", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "DISABLE_CONTENT_TYPE_DETECTION", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send general files.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_document", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_game'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_game", "message0": "\ud83e\udd16 send_game chat_id %1 game_short_name %2 disable_notification (optional) %3 reply_markup (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 reply_parameters (optional) %7 business_connection_id (optional) %8 message_effect_id (optional) %9 allow_paid_broadcast (optional) %10 allow_sending_without_reply (optional) %11 reply_to_message_id (optional) %12", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "GAME_SHORT_NAME", "check": "String"}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send a game.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_game", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_gift'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_gift", "message0": "\ud83e\udd16 send_gift gift_id %1 text (optional) %2 text_parse_mode (optional) %3 text_entities (optional) %4 pay_for_upgrade (optional) %5 chat_id (optional) %6 user_id (optional) %7", "args0": [{"type": "input_value", "name": "GIFT_ID", "check": null}, {"type": "input_value", "name": "TEXT", "check": null}, {"type": "input_value", "name": "TEXT_PARSE_MODE", "check": null}, {"type": "input_value", "name": "TEXT_ENTITIES", "check": null}, {"type": "input_value", "name": "PAY_FOR_UPGRADE", "check": null}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": null}], "colour": 160, "tooltip": "Sends a gift to the given user or channel chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_gift", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_invoice'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_invoice", "message0": "\ud83e\udd16 send_invoice chat_id %1 title %2 description %3 payload %4 currency %5 prices %6 provider_token (optional) %7 start_parameter (optional) %8 photo_url (optional) %9 photo_size (optional) %10 photo_width (optional) %11 photo_height (optional) %12 need_name (optional) %13 need_phone_number (optional) %14 need_email (optional) %15 need_shipping_address (optional) %16 is_flexible (optional) %17 disable_notification (optional) %18 reply_markup (optional) %19 provider_data (optional) %20 send_phone_number_to_provider (optional) %21 send_email_to_provider (optional) %22 max_tip_amount (optional) %23 suggested_tip_amounts (optional) %24 protect_content (optional) %25 message_thread_id (optional) %26 reply_parameters (optional) %27 message_effect_id (optional) %28 allow_paid_broadcast (optional) %29 direct_messages_topic_id (optional) %30 suggested_post_parameters (optional) %31 allow_sending_without_reply (optional) %32 reply_to_message_id (optional) %33", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "TITLE", "check": "String"}, {"type": "input_value", "name": "DESCRIPTION", "check": "String"}, {"type": "input_value", "name": "PAYLOAD", "check": "String"}, {"type": "input_value", "name": "CURRENCY", "check": "String"}, {"type": "input_value", "name": "PRICES", "check": null}, {"type": "input_value", "name": "PROVIDER_TOKEN", "check": null}, {"type": "input_value", "name": "START_PARAMETER", "check": null}, {"type": "input_value", "name": "PHOTO_URL", "check": null}, {"type": "input_value", "name": "PHOTO_SIZE", "check": null}, {"type": "input_value", "name": "PHOTO_WIDTH", "check": null}, {"type": "input_value", "name": "PHOTO_HEIGHT", "check": null}, {"type": "input_value", "name": "NEED_NAME", "check": null}, {"type": "input_value", "name": "NEED_PHONE_NUMBER", "check": null}, {"type": "input_value", "name": "NEED_EMAIL", "check": null}, {"type": "input_value", "name": "NEED_SHIPPING_ADDRESS", "check": null}, {"type": "input_value", "name": "IS_FLEXIBLE", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROVIDER_DATA", "check": null}, {"type": "input_value", "name": "SEND_PHONE_NUMBER_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "SEND_EMAIL_TO_PROVIDER", "check": null}, {"type": "input_value", "name": "MAX_TIP_AMOUNT", "check": null}, {"type": "input_value", "name": "SUGGESTED_TIP_AMOUNTS", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send invoices.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_invoice", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_location'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_location", "message0": "\ud83e\udd16 send_location chat_id %1 latitude (optional) %2 longitude (optional) %3 disable_notification (optional) %4 reply_markup (optional) %5 live_period (optional) %6 horizontal_accuracy (optional) %7 heading (optional) %8 proximity_alert_radius (optional) %9 protect_content (optional) %10 message_thread_id (optional) %11 reply_parameters (optional) %12 business_connection_id (optional) %13 message_effect_id (optional) %14 allow_paid_broadcast (optional) %15 direct_messages_topic_id (optional) %16 suggested_post_parameters (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19 location (optional) %20", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "LATITUDE", "check": null}, {"type": "input_value", "name": "LONGITUDE", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "LIVE_PERIOD", "check": null}, {"type": "input_value", "name": "HORIZONTAL_ACCURACY", "check": null}, {"type": "input_value", "name": "HEADING", "check": null}, {"type": "input_value", "name": "PROXIMITY_ALERT_RADIUS", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "LOCATION", "check": null}], "colour": 160, "tooltip": "Use this method to send point on the map.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_location", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_media_group'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_media_group", "message0": "\ud83e\udd16 send_media_group chat_id %1 media %2 disable_notification (optional) %3 protect_content (optional) %4 message_thread_id (optional) %5 reply_parameters (optional) %6 business_connection_id (optional) %7 message_effect_id (optional) %8 allow_paid_broadcast (optional) %9 direct_messages_topic_id (optional) %10 allow_sending_without_reply (optional) %11 reply_to_message_id (optional) %12 caption (optional) %13 parse_mode (optional) %14 caption_entities (optional) %15", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MEDIA", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}], "colour": 160, "tooltip": "Use this method to send a group of photos, videos, documents or audios as an album.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_media_group", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_message", "message0": "\ud83e\udd16 send_message chat_id %1 text %2 parse_mode (optional) %3 entities (optional) %4 disable_notification (optional) %5 protect_content (optional) %6 reply_markup (optional) %7 message_thread_id (optional) %8 link_preview_options (optional) %9 reply_parameters (optional) %10 business_connection_id (optional) %11 message_effect_id (optional) %12 allow_paid_broadcast (optional) %13 direct_messages_topic_id (optional) %14 suggested_post_parameters (optional) %15 allow_sending_without_reply (optional) %16 reply_to_message_id (optional) %17 disable_web_page_preview (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "TEXT", "check": "String"}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "ENTITIES", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "LINK_PREVIEW_OPTIONS", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "DISABLE_WEB_PAGE_PREVIEW", "check": null}], "colour": 160, "tooltip": "Use this method to send text messages.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_message", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_paid_media'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_paid_media", "message0": "\ud83e\udd16 send_paid_media chat_id %1 star_count %2 media %3 caption (optional) %4 parse_mode (optional) %5 caption_entities (optional) %6 show_caption_above_media (optional) %7 disable_notification (optional) %8 protect_content (optional) %9 reply_parameters (optional) %10 reply_markup (optional) %11 business_connection_id (optional) %12 payload (optional) %13 allow_paid_broadcast (optional) %14 direct_messages_topic_id (optional) %15 suggested_post_parameters (optional) %16 message_thread_id (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "STAR_COUNT", "check": "Number"}, {"type": "input_value", "name": "MEDIA", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "PAYLOAD", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send paid media.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_paid_media", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_photo'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_photo", "message0": "\ud83e\udd16 send_photo chat_id %1 photo %2 caption (optional) %3 disable_notification (optional) %4 reply_markup (optional) %5 parse_mode (optional) %6 caption_entities (optional) %7 protect_content (optional) %8 message_thread_id (optional) %9 has_spoiler (optional) %10 reply_parameters (optional) %11 business_connection_id (optional) %12 message_effect_id (optional) %13 allow_paid_broadcast (optional) %14 show_caption_above_media (optional) %15 direct_messages_topic_id (optional) %16 suggested_post_parameters (optional) %17 allow_sending_without_reply (optional) %18 reply_to_message_id (optional) %19 filename (optional) %20", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PHOTO", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "HAS_SPOILER", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send photos.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_photo", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_poll'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_poll", "message0": "\ud83e\udd16 send_poll chat_id %1 question %2 options %3 is_anonymous (optional) %4 type (optional) %5 allows_multiple_answers (optional) %6 correct_option_id (optional) %7 is_closed (optional) %8 disable_notification (optional) %9 reply_markup (optional) %10 explanation (optional) %11 explanation_parse_mode (optional) %12 open_period (optional) %13 close_date (optional) %14 explanation_entities (optional) %15 protect_content (optional) %16 message_thread_id (optional) %17 reply_parameters (optional) %18 business_connection_id (optional) %19 question_parse_mode (optional) %20 question_entities (optional) %21 message_effect_id (optional) %22 allow_paid_broadcast (optional) %23 allow_sending_without_reply (optional) %24 reply_to_message_id (optional) %25", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "QUESTION", "check": "String"}, {"type": "input_value", "name": "OPTIONS", "check": null}, {"type": "input_value", "name": "IS_ANONYMOUS", "check": null}, {"type": "input_value", "name": "TYPE", "check": null}, {"type": "input_value", "name": "ALLOWS_MULTIPLE_ANSWERS", "check": null}, {"type": "input_value", "name": "CORRECT_OPTION_ID", "check": null}, {"type": "input_value", "name": "IS_CLOSED", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "EXPLANATION", "check": null}, {"type": "input_value", "name": "EXPLANATION_PARSE_MODE", "check": null}, {"type": "input_value", "name": "OPEN_PERIOD", "check": null}, {"type": "input_value", "name": "CLOSE_DATE", "check": null}, {"type": "input_value", "name": "EXPLANATION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "QUESTION_PARSE_MODE", "check": null}, {"type": "input_value", "name": "QUESTION_ENTITIES", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send a native poll.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_poll", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_sticker'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_sticker", "message0": "\ud83e\udd16 send_sticker chat_id %1 sticker %2 disable_notification (optional) %3 reply_markup (optional) %4 protect_content (optional) %5 message_thread_id (optional) %6 emoji (optional) %7 reply_parameters (optional) %8 business_connection_id (optional) %9 message_effect_id (optional) %10 allow_paid_broadcast (optional) %11 direct_messages_topic_id (optional) %12 suggested_post_parameters (optional) %13 allow_sending_without_reply (optional) %14 reply_to_message_id (optional) %15", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "EMOJI", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}], "colour": 160, "tooltip": "Use this method to send static ``.WEBP``, animated ``.TGS``, or video ``.WEBM`` stickers.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_sticker", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_venue'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_venue", "message0": "\ud83e\udd16 send_venue chat_id %1 latitude (optional) %2 longitude (optional) %3 title (optional) %4 address (optional) %5 foursquare_id (optional) %6 disable_notification (optional) %7 reply_markup (optional) %8 foursquare_type (optional) %9 google_place_id (optional) %10 google_place_type (optional) %11 protect_content (optional) %12 message_thread_id (optional) %13 reply_parameters (optional) %14 business_connection_id (optional) %15 message_effect_id (optional) %16 allow_paid_broadcast (optional) %17 direct_messages_topic_id (optional) %18 suggested_post_parameters (optional) %19 allow_sending_without_reply (optional) %20 reply_to_message_id (optional) %21 venue (optional) %22", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "LATITUDE", "check": null}, {"type": "input_value", "name": "LONGITUDE", "check": null}, {"type": "input_value", "name": "TITLE", "check": null}, {"type": "input_value", "name": "ADDRESS", "check": null}, {"type": "input_value", "name": "FOURSQUARE_ID", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "FOURSQUARE_TYPE", "check": null}, {"type": "input_value", "name": "GOOGLE_PLACE_ID", "check": null}, {"type": "input_value", "name": "GOOGLE_PLACE_TYPE", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "VENUE", "check": null}], "colour": 160, "tooltip": "Use this method to send information about a venue.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_venue", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_video'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_video", "message0": "\ud83e\udd16 send_video chat_id %1 video %2 duration (optional) %3 caption (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 width (optional) %7 height (optional) %8 parse_mode (optional) %9 supports_streaming (optional) %10 caption_entities (optional) %11 protect_content (optional) %12 message_thread_id (optional) %13 has_spoiler (optional) %14 thumbnail (optional) %15 reply_parameters (optional) %16 business_connection_id (optional) %17 message_effect_id (optional) %18 allow_paid_broadcast (optional) %19 show_caption_above_media (optional) %20 cover (optional) %21 start_timestamp (optional) %22 direct_messages_topic_id (optional) %23 suggested_post_parameters (optional) %24 allow_sending_without_reply (optional) %25 reply_to_message_id (optional) %26 filename (optional) %27", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "VIDEO", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "WIDTH", "check": null}, {"type": "input_value", "name": "HEIGHT", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "SUPPORTS_STREAMING", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "HAS_SPOILER", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "SHOW_CAPTION_ABOVE_MEDIA", "check": null}, {"type": "input_value", "name": "COVER", "check": null}, {"type": "input_value", "name": "START_TIMESTAMP", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send video files, Telegram clients support mp4 videos", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_video", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_video_note'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_video_note", "message0": "\ud83e\udd16 send_video_note chat_id %1 video_note %2 duration (optional) %3 length (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 protect_content (optional) %7 message_thread_id (optional) %8 thumbnail (optional) %9 reply_parameters (optional) %10 business_connection_id (optional) %11 message_effect_id (optional) %12 allow_paid_broadcast (optional) %13 direct_messages_topic_id (optional) %14 suggested_post_parameters (optional) %15 allow_sending_without_reply (optional) %16 reply_to_message_id (optional) %17 filename (optional) %18", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "VIDEO_NOTE", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "LENGTH", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "THUMBNAIL", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_video_note", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_send_voice'] = {
    init: function() {
        this.jsonInit({"type": "auto_send_voice", "message0": "\ud83e\udd16 send_voice chat_id %1 voice %2 duration (optional) %3 caption (optional) %4 disable_notification (optional) %5 reply_markup (optional) %6 parse_mode (optional) %7 caption_entities (optional) %8 protect_content (optional) %9 message_thread_id (optional) %10 reply_parameters (optional) %11 business_connection_id (optional) %12 message_effect_id (optional) %13 allow_paid_broadcast (optional) %14 direct_messages_topic_id (optional) %15 suggested_post_parameters (optional) %16 allow_sending_without_reply (optional) %17 reply_to_message_id (optional) %18 filename (optional) %19", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "VOICE", "check": null}, {"type": "input_value", "name": "DURATION", "check": null}, {"type": "input_value", "name": "CAPTION", "check": null}, {"type": "input_value", "name": "DISABLE_NOTIFICATION", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "PARSE_MODE", "check": null}, {"type": "input_value", "name": "CAPTION_ENTITIES", "check": null}, {"type": "input_value", "name": "PROTECT_CONTENT", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": null}, {"type": "input_value", "name": "REPLY_PARAMETERS", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_EFFECT_ID", "check": null}, {"type": "input_value", "name": "ALLOW_PAID_BROADCAST", "check": null}, {"type": "input_value", "name": "DIRECT_MESSAGES_TOPIC_ID", "check": null}, {"type": "input_value", "name": "SUGGESTED_POST_PARAMETERS", "check": null}, {"type": "input_value", "name": "ALLOW_SENDING_WITHOUT_REPLY", "check": null}, {"type": "input_value", "name": "REPLY_TO_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FILENAME", "check": null}], "colour": 160, "tooltip": "Use this method to send audio files, if you want Telegram clients to display the file", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.send_voice", "auto_category": "Sending (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Sending (API)"
};


Blockly.Blocks['auto_setBusinessAccountBio'] = {
    init: function() {
        this.jsonInit({"type": "auto_setBusinessAccountBio", "message0": "\ud83e\udd16 setBusinessAccountBio business_connection_id %1 bio (optional) %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "BIO", "check": null}], "colour": 60, "tooltip": "Changes the bio of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setBusinessAccountBio", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setBusinessAccountGiftSettings'] = {
    init: function() {
        this.jsonInit({"type": "auto_setBusinessAccountGiftSettings", "message0": "\ud83e\udd16 setBusinessAccountGiftSettings business_connection_id %1 show_gift_button %2 accepted_gift_types %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "SHOW_GIFT_BUTTON", "check": "Boolean"}, {"type": "input_value", "name": "ACCEPTED_GIFT_TYPES", "check": null}], "colour": 60, "tooltip": "Changes the privacy settings pertaining to incoming gifts in a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setBusinessAccountGiftSettings", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setBusinessAccountName'] = {
    init: function() {
        this.jsonInit({"type": "auto_setBusinessAccountName", "message0": "\ud83e\udd16 setBusinessAccountName business_connection_id %1 first_name %2 last_name (optional) %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "FIRST_NAME", "check": "String"}, {"type": "input_value", "name": "LAST_NAME", "check": null}], "colour": 60, "tooltip": "Changes the first and last name of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setBusinessAccountName", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setBusinessAccountProfilePhoto'] = {
    init: function() {
        this.jsonInit({"type": "auto_setBusinessAccountProfilePhoto", "message0": "\ud83e\udd16 setBusinessAccountProfilePhoto business_connection_id %1 photo %2 is_public (optional) %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "PHOTO", "check": null}, {"type": "input_value", "name": "IS_PUBLIC", "check": null}], "colour": 60, "tooltip": "Changes the profile photo of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setBusinessAccountProfilePhoto", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setBusinessAccountUsername'] = {
    init: function() {
        this.jsonInit({"type": "auto_setBusinessAccountUsername", "message0": "\ud83e\udd16 setBusinessAccountUsername business_connection_id %1 username (optional) %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "USERNAME", "check": null}], "colour": 60, "tooltip": "Changes the username of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setBusinessAccountUsername", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatAdministratorCustomTitle'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatAdministratorCustomTitle", "message0": "\ud83e\udd16 setChatAdministratorCustomTitle chat_id %1 user_id %2 custom_title %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CUSTOM_TITLE", "check": "String"}], "colour": 60, "tooltip": "Use this method to set a custom title for administrators promoted by the bot in a", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatAdministratorCustomTitle", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatDescription'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatDescription", "message0": "\ud83e\udd16 setChatDescription chat_id %1 description (optional) %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "DESCRIPTION", "check": null}], "colour": 60, "tooltip": "Use this method to change the description of a group, a supergroup or a channel. The bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatDescription", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatMenuButton'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatMenuButton", "message0": "\ud83e\udd16 setChatMenuButton chat_id (optional) %1 menu_button (optional) %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MENU_BUTTON", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's menu button in a private chat, or the default menu", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatMenuButton", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatPermissions'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatPermissions", "message0": "\ud83e\udd16 setChatPermissions chat_id %1 permissions %2 use_independent_chat_permissions (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PERMISSIONS", "check": null}, {"type": "input_value", "name": "USE_INDEPENDENT_CHAT_PERMISSIONS", "check": null}], "colour": 60, "tooltip": "Use this method to set default chat permissions for all members. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatPermissions", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatPhoto'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatPhoto", "message0": "\ud83e\udd16 setChatPhoto chat_id %1 photo %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PHOTO", "check": null}], "colour": 60, "tooltip": "Use this method to set a new profile photo for the chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatPhoto", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatStickerSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatStickerSet", "message0": "\ud83e\udd16 setChatStickerSet chat_id %1 sticker_set_name %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "STICKER_SET_NAME", "check": "String"}], "colour": 60, "tooltip": "Use this method to set a new group sticker set for a supergroup.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatStickerSet", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setChatTitle'] = {
    init: function() {
        this.jsonInit({"type": "auto_setChatTitle", "message0": "\ud83e\udd16 setChatTitle chat_id %1 title %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "TITLE", "check": "String"}], "colour": 60, "tooltip": "Use this method to change the title of a chat. Titles can't be changed for private chats.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setChatTitle", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setCustomEmojiStickerSetThumbnail'] = {
    init: function() {
        this.jsonInit({"type": "auto_setCustomEmojiStickerSetThumbnail", "message0": "\ud83e\udd16 setCustomEmojiStickerSetThumbnail name %1 custom_emoji_id (optional) %2", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "CUSTOM_EMOJI_ID", "check": null}], "colour": 60, "tooltip": "Use this method to set the thumbnail of a custom emoji sticker set.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setCustomEmojiStickerSetThumbnail", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setGameScore'] = {
    init: function() {
        this.jsonInit({"type": "auto_setGameScore", "message0": "\ud83e\udd16 setGameScore user_id %1 score %2 chat_id (optional) %3 message_id (optional) %4 inline_message_id (optional) %5 force (optional) %6 disable_edit_message (optional) %7", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "SCORE", "check": "Number"}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FORCE", "check": null}, {"type": "input_value", "name": "DISABLE_EDIT_MESSAGE", "check": null}], "colour": 60, "tooltip": "Use this method to set the score of the specified user in a game message.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setGameScore", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setMessageReaction'] = {
    init: function() {
        this.jsonInit({"type": "auto_setMessageReaction", "message0": "\ud83e\udd16 setMessageReaction chat_id %1 message_id %2 reaction (optional) %3 is_big (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "REACTION", "check": null}, {"type": "input_value", "name": "IS_BIG", "check": null}], "colour": 60, "tooltip": "Use this method to change the chosen reactions on a message. Service messages of some types", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setMessageReaction", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setMyCommands'] = {
    init: function() {
        this.jsonInit({"type": "auto_setMyCommands", "message0": "\ud83e\udd16 setMyCommands commands %1 scope (optional) %2 language_code (optional) %3", "args0": [{"type": "input_value", "name": "COMMANDS", "check": null}, {"type": "input_value", "name": "SCOPE", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the list of the bot's commands. See the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setMyCommands", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setMyDefaultAdministratorRights'] = {
    init: function() {
        this.jsonInit({"type": "auto_setMyDefaultAdministratorRights", "message0": "\ud83e\udd16 setMyDefaultAdministratorRights rights (optional) %1 for_channels (optional) %2", "args0": [{"type": "input_value", "name": "RIGHTS", "check": null}, {"type": "input_value", "name": "FOR_CHANNELS", "check": null}], "colour": 60, "tooltip": "Use this method to change the default administrator rights requested by the bot when", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setMyDefaultAdministratorRights", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setMyDescription'] = {
    init: function() {
        this.jsonInit({"type": "auto_setMyDescription", "message0": "\ud83e\udd16 setMyDescription description (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "DESCRIPTION", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's description, which is shown in the chat with the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setMyDescription", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setMyName'] = {
    init: function() {
        this.jsonInit({"type": "auto_setMyName", "message0": "\ud83e\udd16 setMyName name (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's name.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setMyName", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setMyShortDescription'] = {
    init: function() {
        this.jsonInit({"type": "auto_setMyShortDescription", "message0": "\ud83e\udd16 setMyShortDescription short_description (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "SHORT_DESCRIPTION", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's short description, which is shown on the bot's profile", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setMyShortDescription", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setPassportDataErrors'] = {
    init: function() {
        this.jsonInit({"type": "auto_setPassportDataErrors", "message0": "\ud83e\udd16 setPassportDataErrors user_id %1 errors %2", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "ERRORS", "check": null}], "colour": 60, "tooltip": "Informs a user that some of the Telegram Passport elements they provided contains errors.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setPassportDataErrors", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setStickerEmojiList'] = {
    init: function() {
        this.jsonInit({"type": "auto_setStickerEmojiList", "message0": "\ud83e\udd16 setStickerEmojiList sticker %1 emoji_list %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "EMOJI_LIST", "check": null}], "colour": 60, "tooltip": "Use this method to change the list of emoji assigned to a regular or custom emoji sticker.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setStickerEmojiList", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setStickerKeywords'] = {
    init: function() {
        this.jsonInit({"type": "auto_setStickerKeywords", "message0": "\ud83e\udd16 setStickerKeywords sticker %1 keywords (optional) %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "KEYWORDS", "check": null}], "colour": 60, "tooltip": "Use this method to change search keywords assigned to a regular or custom emoji sticker.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setStickerKeywords", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setStickerMaskPosition'] = {
    init: function() {
        this.jsonInit({"type": "auto_setStickerMaskPosition", "message0": "\ud83e\udd16 setStickerMaskPosition sticker %1 mask_position (optional) %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "MASK_POSITION", "check": null}], "colour": 60, "tooltip": "Use this method to change the mask position of a mask sticker.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setStickerMaskPosition", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setStickerPositionInSet'] = {
    init: function() {
        this.jsonInit({"type": "auto_setStickerPositionInSet", "message0": "\ud83e\udd16 setStickerPositionInSet sticker %1 position %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "POSITION", "check": "Number"}], "colour": 60, "tooltip": "Use this method to move a sticker in a set created by the bot to a specific position.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setStickerPositionInSet", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setStickerSetThumbnail'] = {
    init: function() {
        this.jsonInit({"type": "auto_setStickerSetThumbnail", "message0": "\ud83e\udd16 setStickerSetThumbnail name %1 user_id %2 format %3 thumbnail (optional) %4", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "FORMAT", "check": "String"}, {"type": "input_value", "name": "THUMBNAIL", "check": null}], "colour": 60, "tooltip": "Use this method to set the thumbnail of a regular or mask sticker set. The format of the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setStickerSetThumbnail", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setStickerSetTitle'] = {
    init: function() {
        this.jsonInit({"type": "auto_setStickerSetTitle", "message0": "\ud83e\udd16 setStickerSetTitle name %1 title %2", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "TITLE", "check": "String"}], "colour": 60, "tooltip": "Use this method to set the title of a created sticker set.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setStickerSetTitle", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setUserEmojiStatus'] = {
    init: function() {
        this.jsonInit({"type": "auto_setUserEmojiStatus", "message0": "\ud83e\udd16 setUserEmojiStatus user_id %1 emoji_status_custom_emoji_id (optional) %2 emoji_status_expiration_date (optional) %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "EMOJI_STATUS_CUSTOM_EMOJI_ID", "check": null}, {"type": "input_value", "name": "EMOJI_STATUS_EXPIRATION_DATE", "check": null}], "colour": 60, "tooltip": "Changes the emoji status for a given user that previously allowed the bot to manage", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setUserEmojiStatus", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_setWebhook'] = {
    init: function() {
        this.jsonInit({"type": "auto_setWebhook", "message0": "\ud83e\udd16 setWebhook url %1 certificate (optional) %2 max_connections (optional) %3 allowed_updates (optional) %4 ip_address (optional) %5 drop_pending_updates (optional) %6 secret_token (optional) %7", "args0": [{"type": "input_value", "name": "URL", "check": "String"}, {"type": "input_value", "name": "CERTIFICATE", "check": null}, {"type": "input_value", "name": "MAX_CONNECTIONS", "check": null}, {"type": "input_value", "name": "ALLOWED_UPDATES", "check": null}, {"type": "input_value", "name": "IP_ADDRESS", "check": null}, {"type": "input_value", "name": "DROP_PENDING_UPDATES", "check": null}, {"type": "input_value", "name": "SECRET_TOKEN", "check": null}], "colour": 60, "tooltip": "Use this method to specify a url and receive incoming updates via an outgoing webhook.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.setWebhook", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_bot'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_bot", "message0": "\ud83e\udd16 set_bot bot %1", "args0": [{"type": "input_value", "name": "BOT", "check": null}], "colour": 60, "tooltip": "Sets the :class:`telegram.Bot` instance associated with this object.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_bot", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_business_account_bio'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_business_account_bio", "message0": "\ud83e\udd16 set_business_account_bio business_connection_id %1 bio (optional) %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "BIO", "check": null}], "colour": 60, "tooltip": "Changes the bio of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_business_account_bio", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_business_account_gift_settings'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_business_account_gift_settings", "message0": "\ud83e\udd16 set_business_account_gift_settings business_connection_id %1 show_gift_button %2 accepted_gift_types %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "SHOW_GIFT_BUTTON", "check": "Boolean"}, {"type": "input_value", "name": "ACCEPTED_GIFT_TYPES", "check": null}], "colour": 60, "tooltip": "Changes the privacy settings pertaining to incoming gifts in a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_business_account_gift_settings", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_business_account_name'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_business_account_name", "message0": "\ud83e\udd16 set_business_account_name business_connection_id %1 first_name %2 last_name (optional) %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "FIRST_NAME", "check": "String"}, {"type": "input_value", "name": "LAST_NAME", "check": null}], "colour": 60, "tooltip": "Changes the first and last name of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_business_account_name", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_business_account_profile_photo'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_business_account_profile_photo", "message0": "\ud83e\udd16 set_business_account_profile_photo business_connection_id %1 photo %2 is_public (optional) %3", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "PHOTO", "check": null}, {"type": "input_value", "name": "IS_PUBLIC", "check": null}], "colour": 60, "tooltip": "Changes the profile photo of a managed business account.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_business_account_profile_photo", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_business_account_username'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_business_account_username", "message0": "\ud83e\udd16 set_business_account_username business_connection_id %1 username (optional) %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "USERNAME", "check": null}], "colour": 60, "tooltip": "Changes the username of a managed business account. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_business_account_username", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_administrator_custom_title'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_administrator_custom_title", "message0": "\ud83e\udd16 set_chat_administrator_custom_title chat_id %1 user_id %2 custom_title %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CUSTOM_TITLE", "check": "String"}], "colour": 60, "tooltip": "Use this method to set a custom title for administrators promoted by the bot in a", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_administrator_custom_title", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_description'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_description", "message0": "\ud83e\udd16 set_chat_description chat_id %1 description (optional) %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "DESCRIPTION", "check": null}], "colour": 60, "tooltip": "Use this method to change the description of a group, a supergroup or a channel. The bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_description", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_menu_button'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_menu_button", "message0": "\ud83e\udd16 set_chat_menu_button chat_id (optional) %1 menu_button (optional) %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MENU_BUTTON", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's menu button in a private chat, or the default menu", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_menu_button", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_permissions'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_permissions", "message0": "\ud83e\udd16 set_chat_permissions chat_id %1 permissions %2 use_independent_chat_permissions (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PERMISSIONS", "check": null}, {"type": "input_value", "name": "USE_INDEPENDENT_CHAT_PERMISSIONS", "check": null}], "colour": 60, "tooltip": "Use this method to set default chat permissions for all members. The bot must be an", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_permissions", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_photo'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_photo", "message0": "\ud83e\udd16 set_chat_photo chat_id %1 photo %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "PHOTO", "check": null}], "colour": 60, "tooltip": "Use this method to set a new profile photo for the chat.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_photo", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_sticker_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_sticker_set", "message0": "\ud83e\udd16 set_chat_sticker_set chat_id %1 sticker_set_name %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "STICKER_SET_NAME", "check": "String"}], "colour": 60, "tooltip": "Use this method to set a new group sticker set for a supergroup.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_sticker_set", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_chat_title'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_chat_title", "message0": "\ud83e\udd16 set_chat_title chat_id %1 title %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "TITLE", "check": "String"}], "colour": 60, "tooltip": "Use this method to change the title of a chat. Titles can't be changed for private chats.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_chat_title", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_custom_emoji_sticker_set_thumbnail'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_custom_emoji_sticker_set_thumbnail", "message0": "\ud83e\udd16 set_custom_emoji_sticker_set_thumbnail name %1 custom_emoji_id (optional) %2", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "CUSTOM_EMOJI_ID", "check": null}], "colour": 60, "tooltip": "Use this method to set the thumbnail of a custom emoji sticker set.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_custom_emoji_sticker_set_thumbnail", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_game_score'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_game_score", "message0": "\ud83e\udd16 set_game_score user_id %1 score %2 chat_id (optional) %3 message_id (optional) %4 inline_message_id (optional) %5 force (optional) %6 disable_edit_message (optional) %7", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "SCORE", "check": "Number"}, {"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "FORCE", "check": null}, {"type": "input_value", "name": "DISABLE_EDIT_MESSAGE", "check": null}], "colour": 60, "tooltip": "Use this method to set the score of the specified user in a game message.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_game_score", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_message_reaction'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_message_reaction", "message0": "\ud83e\udd16 set_message_reaction chat_id %1 message_id %2 reaction (optional) %3 is_big (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "REACTION", "check": null}, {"type": "input_value", "name": "IS_BIG", "check": null}], "colour": 60, "tooltip": "Use this method to change the chosen reactions on a message. Service messages of some types", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_message_reaction", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_my_commands'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_my_commands", "message0": "\ud83e\udd16 set_my_commands commands %1 scope (optional) %2 language_code (optional) %3", "args0": [{"type": "input_value", "name": "COMMANDS", "check": null}, {"type": "input_value", "name": "SCOPE", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the list of the bot's commands. See the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_my_commands", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_my_default_administrator_rights'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_my_default_administrator_rights", "message0": "\ud83e\udd16 set_my_default_administrator_rights rights (optional) %1 for_channels (optional) %2", "args0": [{"type": "input_value", "name": "RIGHTS", "check": null}, {"type": "input_value", "name": "FOR_CHANNELS", "check": null}], "colour": 60, "tooltip": "Use this method to change the default administrator rights requested by the bot when", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_my_default_administrator_rights", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_my_description'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_my_description", "message0": "\ud83e\udd16 set_my_description description (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "DESCRIPTION", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's description, which is shown in the chat with the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_my_description", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_my_name'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_my_name", "message0": "\ud83e\udd16 set_my_name name (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "NAME", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's name.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_my_name", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_my_short_description'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_my_short_description", "message0": "\ud83e\udd16 set_my_short_description short_description (optional) %1 language_code (optional) %2", "args0": [{"type": "input_value", "name": "SHORT_DESCRIPTION", "check": null}, {"type": "input_value", "name": "LANGUAGE_CODE", "check": null}], "colour": 60, "tooltip": "Use this method to change the bot's short description, which is shown on the bot's profile", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_my_short_description", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_passport_data_errors'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_passport_data_errors", "message0": "\ud83e\udd16 set_passport_data_errors user_id %1 errors %2", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "ERRORS", "check": null}], "colour": 60, "tooltip": "Informs a user that some of the Telegram Passport elements they provided contains errors.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_passport_data_errors", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_sticker_emoji_list'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_sticker_emoji_list", "message0": "\ud83e\udd16 set_sticker_emoji_list sticker %1 emoji_list %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "EMOJI_LIST", "check": null}], "colour": 60, "tooltip": "Use this method to change the list of emoji assigned to a regular or custom emoji sticker.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_sticker_emoji_list", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_sticker_keywords'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_sticker_keywords", "message0": "\ud83e\udd16 set_sticker_keywords sticker %1 keywords (optional) %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "KEYWORDS", "check": null}], "colour": 60, "tooltip": "Use this method to change search keywords assigned to a regular or custom emoji sticker.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_sticker_keywords", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_sticker_mask_position'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_sticker_mask_position", "message0": "\ud83e\udd16 set_sticker_mask_position sticker %1 mask_position (optional) %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "MASK_POSITION", "check": null}], "colour": 60, "tooltip": "Use this method to change the mask position of a mask sticker.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_sticker_mask_position", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_sticker_position_in_set'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_sticker_position_in_set", "message0": "\ud83e\udd16 set_sticker_position_in_set sticker %1 position %2", "args0": [{"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "POSITION", "check": "Number"}], "colour": 60, "tooltip": "Use this method to move a sticker in a set created by the bot to a specific position.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_sticker_position_in_set", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_sticker_set_thumbnail'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_sticker_set_thumbnail", "message0": "\ud83e\udd16 set_sticker_set_thumbnail name %1 user_id %2 format %3 thumbnail (optional) %4", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "FORMAT", "check": "String"}, {"type": "input_value", "name": "THUMBNAIL", "check": null}], "colour": 60, "tooltip": "Use this method to set the thumbnail of a regular or mask sticker set. The format of the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_sticker_set_thumbnail", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_sticker_set_title'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_sticker_set_title", "message0": "\ud83e\udd16 set_sticker_set_title name %1 title %2", "args0": [{"type": "input_value", "name": "NAME", "check": "String"}, {"type": "input_value", "name": "TITLE", "check": "String"}], "colour": 60, "tooltip": "Use this method to set the title of a created sticker set.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_sticker_set_title", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_user_emoji_status'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_user_emoji_status", "message0": "\ud83e\udd16 set_user_emoji_status user_id %1 emoji_status_custom_emoji_id (optional) %2 emoji_status_expiration_date (optional) %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "EMOJI_STATUS_CUSTOM_EMOJI_ID", "check": null}, {"type": "input_value", "name": "EMOJI_STATUS_EXPIRATION_DATE", "check": null}], "colour": 60, "tooltip": "Changes the emoji status for a given user that previously allowed the bot to manage", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_user_emoji_status", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_set_webhook'] = {
    init: function() {
        this.jsonInit({"type": "auto_set_webhook", "message0": "\ud83e\udd16 set_webhook url %1 certificate (optional) %2 max_connections (optional) %3 allowed_updates (optional) %4 ip_address (optional) %5 drop_pending_updates (optional) %6 secret_token (optional) %7", "args0": [{"type": "input_value", "name": "URL", "check": "String"}, {"type": "input_value", "name": "CERTIFICATE", "check": null}, {"type": "input_value", "name": "MAX_CONNECTIONS", "check": null}, {"type": "input_value", "name": "ALLOWED_UPDATES", "check": null}, {"type": "input_value", "name": "IP_ADDRESS", "check": null}, {"type": "input_value", "name": "DROP_PENDING_UPDATES", "check": null}, {"type": "input_value", "name": "SECRET_TOKEN", "check": null}], "colour": 60, "tooltip": "Use this method to specify a url and receive incoming updates via an outgoing webhook.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.set_webhook", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_shutdown'] = {
    init: function() {
        this.jsonInit({"type": "auto_shutdown", "message0": "\ud83e\udd16 shutdown", "args0": [], "colour": 230, "tooltip": "Stop & clear resources used by this class. Currently just calls", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.shutdown", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_stopMessageLiveLocation'] = {
    init: function() {
        this.jsonInit({"type": "auto_stopMessageLiveLocation", "message0": "\ud83e\udd16 stopMessageLiveLocation chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 reply_markup (optional) %4 business_connection_id (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 230, "tooltip": "Use this method to stop updating a live location message sent by the bot or via the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.stopMessageLiveLocation", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_stopPoll'] = {
    init: function() {
        this.jsonInit({"type": "auto_stopPoll", "message0": "\ud83e\udd16 stopPoll chat_id %1 message_id %2 reply_markup (optional) %3 business_connection_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 230, "tooltip": "Use this method to stop a poll which was sent by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.stopPoll", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_stop_message_live_location'] = {
    init: function() {
        this.jsonInit({"type": "auto_stop_message_live_location", "message0": "\ud83e\udd16 stop_message_live_location chat_id (optional) %1 message_id (optional) %2 inline_message_id (optional) %3 reply_markup (optional) %4 business_connection_id (optional) %5", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "INLINE_MESSAGE_ID", "check": null}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 230, "tooltip": "Use this method to stop updating a live location message sent by the bot or via the bot", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.stop_message_live_location", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_stop_poll'] = {
    init: function() {
        this.jsonInit({"type": "auto_stop_poll", "message0": "\ud83e\udd16 stop_poll chat_id %1 message_id %2 reply_markup (optional) %3 business_connection_id (optional) %4", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": "Number"}, {"type": "input_value", "name": "REPLY_MARKUP", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 230, "tooltip": "Use this method to stop a poll which was sent by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.stop_poll", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_to_dict'] = {
    init: function() {
        this.jsonInit({"type": "auto_to_dict", "message0": "\ud83e\udd16 to_dict recursive (optional) %1", "args0": [{"type": "input_value", "name": "RECURSIVE", "check": "Boolean"}], "colour": 230, "tooltip": "See :meth:`telegram.TelegramObject.to_dict`.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.to_dict", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_to_json'] = {
    init: function() {
        this.jsonInit({"type": "auto_to_json", "message0": "\ud83e\udd16 to_json", "args0": [], "colour": 230, "tooltip": "Gives a JSON representation of object.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.to_json", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_transferBusinessAccountStars'] = {
    init: function() {
        this.jsonInit({"type": "auto_transferBusinessAccountStars", "message0": "\ud83e\udd16 transferBusinessAccountStars business_connection_id %1 star_count %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "STAR_COUNT", "check": "Number"}], "colour": 230, "tooltip": "Transfers Telegram Stars from the business account balance to the bot's balance. Requires", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.transferBusinessAccountStars", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_transferGift'] = {
    init: function() {
        this.jsonInit({"type": "auto_transferGift", "message0": "\ud83e\udd16 transferGift business_connection_id %1 owned_gift_id %2 new_owner_chat_id %3 star_count (optional) %4", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "OWNED_GIFT_ID", "check": "String"}, {"type": "input_value", "name": "NEW_OWNER_CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "STAR_COUNT", "check": null}], "colour": 230, "tooltip": "Transfers an owned unique gift to another user. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.transferGift", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_transfer_business_account_stars'] = {
    init: function() {
        this.jsonInit({"type": "auto_transfer_business_account_stars", "message0": "\ud83e\udd16 transfer_business_account_stars business_connection_id %1 star_count %2", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "STAR_COUNT", "check": "Number"}], "colour": 230, "tooltip": "Transfers Telegram Stars from the business account balance to the bot's balance. Requires", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.transfer_business_account_stars", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_transfer_gift'] = {
    init: function() {
        this.jsonInit({"type": "auto_transfer_gift", "message0": "\ud83e\udd16 transfer_gift business_connection_id %1 owned_gift_id %2 new_owner_chat_id %3 star_count (optional) %4", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "OWNED_GIFT_ID", "check": "String"}, {"type": "input_value", "name": "NEW_OWNER_CHAT_ID", "check": "Number"}, {"type": "input_value", "name": "STAR_COUNT", "check": null}], "colour": 230, "tooltip": "Transfers an owned unique gift to another user. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.transfer_gift", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_unbanChatMember'] = {
    init: function() {
        this.jsonInit({"type": "auto_unbanChatMember", "message0": "\ud83e\udd16 unbanChatMember chat_id %1 user_id %2 only_if_banned (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "ONLY_IF_BANNED", "check": null}], "colour": 60, "tooltip": "Use this method to unban a previously kicked user in a supergroup or channel.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unbanChatMember", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unbanChatSenderChat'] = {
    init: function() {
        this.jsonInit({"type": "auto_unbanChatSenderChat", "message0": "\ud83e\udd16 unbanChatSenderChat chat_id %1 sender_chat_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "SENDER_CHAT_ID", "check": "Number"}], "colour": 60, "tooltip": "Use this method to unban a previously banned channel in a supergroup or channel.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unbanChatSenderChat", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unban_chat_member'] = {
    init: function() {
        this.jsonInit({"type": "auto_unban_chat_member", "message0": "\ud83e\udd16 unban_chat_member chat_id %1 user_id %2 only_if_banned (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "ONLY_IF_BANNED", "check": null}], "colour": 60, "tooltip": "Use this method to unban a previously kicked user in a supergroup or channel.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unban_chat_member", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unban_chat_sender_chat'] = {
    init: function() {
        this.jsonInit({"type": "auto_unban_chat_sender_chat", "message0": "\ud83e\udd16 unban_chat_sender_chat chat_id %1 sender_chat_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "SENDER_CHAT_ID", "check": "Number"}], "colour": 60, "tooltip": "Use this method to unban a previously banned channel in a supergroup or channel.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unban_chat_sender_chat", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unhideGeneralForumTopic'] = {
    init: function() {
        this.jsonInit({"type": "auto_unhideGeneralForumTopic", "message0": "\ud83e\udd16 unhideGeneralForumTopic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unhideGeneralForumTopic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_unhide_general_forum_topic'] = {
    init: function() {
        this.jsonInit({"type": "auto_unhide_general_forum_topic", "message0": "\ud83e\udd16 unhide_general_forum_topic chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 230, "tooltip": "Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unhide_general_forum_topic", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_unpinAllChatMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpinAllChatMessages", "message0": "\ud83e\udd16 unpinAllChatMessages chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 60, "tooltip": "Use this method to clear the list of pinned messages in a chat. If the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpinAllChatMessages", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpinAllForumTopicMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpinAllForumTopicMessages", "message0": "\ud83e\udd16 unpinAllForumTopicMessages chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 60, "tooltip": "Use this method to clear the list of pinned messages in a forum topic. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpinAllForumTopicMessages", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpinAllGeneralForumTopicMessages'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpinAllGeneralForumTopicMessages", "message0": "\ud83e\udd16 unpinAllGeneralForumTopicMessages chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 60, "tooltip": "Use this method to clear the list of pinned messages in a General forum topic. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpinAllGeneralForumTopicMessages", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpinChatMessage'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpinChatMessage", "message0": "\ud83e\udd16 unpinChatMessage chat_id %1 message_id (optional) %2 business_connection_id (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 60, "tooltip": "Use this method to remove a message from the list of pinned messages in a chat. If the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpinChatMessage", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpin_all_chat_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpin_all_chat_messages", "message0": "\ud83e\udd16 unpin_all_chat_messages chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 60, "tooltip": "Use this method to clear the list of pinned messages in a chat. If the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpin_all_chat_messages", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpin_all_forum_topic_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpin_all_forum_topic_messages", "message0": "\ud83e\udd16 unpin_all_forum_topic_messages chat_id %1 message_thread_id %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_THREAD_ID", "check": "Number"}], "colour": 60, "tooltip": "Use this method to clear the list of pinned messages in a forum topic. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpin_all_forum_topic_messages", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpin_all_general_forum_topic_messages'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpin_all_general_forum_topic_messages", "message0": "\ud83e\udd16 unpin_all_general_forum_topic_messages chat_id %1", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}], "colour": 60, "tooltip": "Use this method to clear the list of pinned messages in a General forum topic. The bot must", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpin_all_general_forum_topic_messages", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_unpin_chat_message'] = {
    init: function() {
        this.jsonInit({"type": "auto_unpin_chat_message", "message0": "\ud83e\udd16 unpin_chat_message chat_id %1 message_id (optional) %2 business_connection_id (optional) %3", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "MESSAGE_ID", "check": null}, {"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": null}], "colour": 60, "tooltip": "Use this method to remove a message from the list of pinned messages in a chat. If the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.unpin_chat_message", "auto_category": "Management (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Management (API)"
};


Blockly.Blocks['auto_upgradeGift'] = {
    init: function() {
        this.jsonInit({"type": "auto_upgradeGift", "message0": "\ud83e\udd16 upgradeGift business_connection_id %1 owned_gift_id %2 keep_original_details (optional) %3 star_count (optional) %4", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "OWNED_GIFT_ID", "check": "String"}, {"type": "input_value", "name": "KEEP_ORIGINAL_DETAILS", "check": null}, {"type": "input_value", "name": "STAR_COUNT", "check": null}], "colour": 230, "tooltip": "Upgrades a given regular gift to a unique gift. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.upgradeGift", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_upgrade_gift'] = {
    init: function() {
        this.jsonInit({"type": "auto_upgrade_gift", "message0": "\ud83e\udd16 upgrade_gift business_connection_id %1 owned_gift_id %2 keep_original_details (optional) %3 star_count (optional) %4", "args0": [{"type": "input_value", "name": "BUSINESS_CONNECTION_ID", "check": "String"}, {"type": "input_value", "name": "OWNED_GIFT_ID", "check": "String"}, {"type": "input_value", "name": "KEEP_ORIGINAL_DETAILS", "check": null}, {"type": "input_value", "name": "STAR_COUNT", "check": null}], "colour": 230, "tooltip": "Upgrades a given regular gift to a unique gift. Requires the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.upgrade_gift", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_uploadStickerFile'] = {
    init: function() {
        this.jsonInit({"type": "auto_uploadStickerFile", "message0": "\ud83e\udd16 uploadStickerFile user_id %1 sticker %2 sticker_format %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "STICKER_FORMAT", "check": "String"}], "colour": 230, "tooltip": "Use this method to upload a file with a sticker for later use in the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.uploadStickerFile", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_upload_sticker_file'] = {
    init: function() {
        this.jsonInit({"type": "auto_upload_sticker_file", "message0": "\ud83e\udd16 upload_sticker_file user_id %1 sticker %2 sticker_format %3", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "STICKER", "check": null}, {"type": "input_value", "name": "STICKER_FORMAT", "check": "String"}], "colour": 230, "tooltip": "Use this method to upload a file with a sticker for later use in the", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.upload_sticker_file", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_verifyChat'] = {
    init: function() {
        this.jsonInit({"type": "auto_verifyChat", "message0": "\ud83e\udd16 verifyChat chat_id %1 custom_description (optional) %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "CUSTOM_DESCRIPTION", "check": null}], "colour": 230, "tooltip": "Verifies a chat |org-verify| which is represented by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.verifyChat", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_verifyUser'] = {
    init: function() {
        this.jsonInit({"type": "auto_verifyUser", "message0": "\ud83e\udd16 verifyUser user_id %1 custom_description (optional) %2", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CUSTOM_DESCRIPTION", "check": null}], "colour": 230, "tooltip": "Verifies a user |org-verify| which is represented by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.verifyUser", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_verify_chat'] = {
    init: function() {
        this.jsonInit({"type": "auto_verify_chat", "message0": "\ud83e\udd16 verify_chat chat_id %1 custom_description (optional) %2", "args0": [{"type": "input_value", "name": "CHAT_ID", "check": null}, {"type": "input_value", "name": "CUSTOM_DESCRIPTION", "check": null}], "colour": 230, "tooltip": "Verifies a chat |org-verify| which is represented by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.verify_chat", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};


Blockly.Blocks['auto_verify_user'] = {
    init: function() {
        this.jsonInit({"type": "auto_verify_user", "message0": "\ud83e\udd16 verify_user user_id %1 custom_description (optional) %2", "args0": [{"type": "input_value", "name": "USER_ID", "check": "Number"}, {"type": "input_value", "name": "CUSTOM_DESCRIPTION", "check": null}], "colour": 230, "tooltip": "Verifies a user |org-verify| which is represented by the bot.", "helpUrl": "https://python-telegram-bot.readthedocs.io/en/stable/telegram.bot.html#telegram.Bot.verify_user", "auto_category": "Misc (API)", "previousStatement": null, "nextStatement": null});
    },
    auto_category: "Misc (API)"
};
