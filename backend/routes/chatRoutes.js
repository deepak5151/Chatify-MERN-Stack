const express = require("express");
const {
    createoraccessChat,
    fetchChats,
    createGroupChat,
    removeFromGroup,
    addToGroup,
    renameGroup,
} = require("../controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/createoraccess").post(protect, createoraccessChat);
router.route("/fetchall").get(protect, fetchChats);
router.route("/creategroup").post(protect, createGroupChat);
router.route("/renamegroup").put(protect, renameGroup);
router.route("/removefromgroup").put(protect, removeFromGroup);
router.route("/addtogroup").put(protect, addToGroup);

module.exports = router;