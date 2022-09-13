const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        content: { type: String, trim: true },
        chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chats" },
        readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    },
    { timestamps: true }
);

const Message = mongoose.model("Messages", messageSchema);
module.exports = Message;