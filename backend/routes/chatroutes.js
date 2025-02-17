const express = require("express")
const { addchat, getChats, deleteChat } = require("../controllers/chatController")

const router = express.Router()

// KYC routes
router.post("/", addchat)

router.get("/", getChats)

router.delete("/:id", deleteChat)

module.exports = router