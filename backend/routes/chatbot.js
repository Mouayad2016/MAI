const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbot");

// Create a chatbot
router.post("/", chatbotController.create);

// Update a chatbot
router.put("/:id", chatbotController.update);

// Delete a chatbot
router.delete("/:id", chatbotController.delete);

// Get a chatbot
router.get("/:id", chatbotController.getbyid);

// Get all chatbots
router.get("/", chatbotController.getAll);

module.exports = router;