window.SYSTEM_BLOCK_DEFAULTS = {
    // --- Actions ---
    "telegram_reply_text": "await update.message.reply_text(str({TEXT}))",
    "telegram_reply_text_get_id": "(await update.message.reply_text({TEXT})).message_id",
    "telegram_send_photo": "await update.message.reply_photo(photo={URL}, caption={CAPTION} if {CAPTION} else None)",
    "telegram_edit_message": "await context.bot.edit_message_text(chat_id=update.effective_chat.id, message_id={MSG_ID}, text={TEXT})",
    "telegram_delete_message": "await context.bot.delete_message(chat_id=update.effective_chat.id, message_id={MSG_ID})",
    "telegram_forward_message": "await update.message.forward(chat_id={CHAT_ID})",
    "telegram_db_set": "db_set({KEY}, {VALUE})",
    "telegram_kick_user": "await context.bot.ban_chat_member(chat_id=update.effective_chat.id, user_id={USER_ID})",
    "telegram_send_poll": "await update.message.reply_poll(question={QUESTION}, options={OPTIONS}, type=\"regular\", is_anonymous=True)",

    // --- Events (Note: Custom Builder handles function wrapper differently, usually just body) ---
    // For events, the user usually writes the BODY of the handler. 
    // The Custom Builder wraps it in `async def func(...)`. 
    // We need to verify how Custom Builder handles "Event" type blocks.
    // IF the user is creating an Event block, the Python code is the handler registration line usually?
    // OR the body? 
    // Let's assume for standard Custom Blocks, the code is what executes *when the block runs*.
    // BUT Event blocks don't "run" in flow, they register handlers.
    // The Standard generator returns `application.add_handler(...)`.
    // So we should provide that.
    "telegram_on_command": "application.add_handler(CommandHandler('{COMMAND}', {DO}))",
    "telegram_on_message": "application.add_handler(MessageHandler(filters.TEXT & (~filters.COMMAND), {DO}))",
    "telegram_on_photo": "application.add_handler(MessageHandler(filters.PHOTO, {DO}))",

    // --- Data ---
    "telegram_get_user_id": "update.effective_user.id",
    "telegram_get_user_name": "update.effective_user.first_name",
    "telegram_get_message_text": "update.message.text",
    "telegram_db_get": "db_get({KEY})",
    "telegram_get_chat_id": "update.effective_chat.id",

    // --- Utilities ---
    "utils_wait": "await asyncio.sleep(float({SECONDS}))",
    "utils_log": "logging.info(f\"BOT LOG: {{MSG}}\")\nprint(f\"BOT LOG: {{MSG}}\")",
    "env_get_var": "os.getenv({VAR_NAME})",

    // --- Generic Python ---
    "text_print": "print({TEXT})",
    "math_number": "{NUM}",
    "text": "\"{TEXT}\"",

    // --- Media ---
    "telegram_send_video": "await context.bot.send_video(chat_id={CHAT_ID}, video={VIDEO_URL}, caption={CAPTION})",
    "telegram_send_document": "await context.bot.send_document(chat_id={CHAT_ID}, document={DOC_URL})",
    "telegram_send_audio": "await context.bot.send_audio(chat_id={CHAT_ID}, audio={AUDIO_URL})",

    // --- Admin ---
    "telegram_ban_member": "await context.bot.ban_chat_member(chat_id={CHAT_ID}, user_id={USER_ID})",
    "telegram_unban_member": "await context.bot.unban_chat_member(chat_id={CHAT_ID}, user_id={USER_ID})",
    "telegram_pin_message": "await context.bot.pin_chat_message(chat_id={CHAT_ID}, message_id={MESSAGE_ID})",

    // --- Channel ---
    "telegram_channel_post": "await context.bot.send_message(chat_id={CHANNEL_ID}, text={TEXT})"
};
