const db = require("../models");


module.exports = chatbotController = {
    async getAll(req, res) {
        try {
            // Retrieve all chatbot records
            const chatbots = await db.chatbot.findAll();

            // Return the array of chatbot records
            res.json(chatbots);
        } catch (error) {
            console.error("Error retrieving chatbots:", error);
            res.status(500).json({ error: "Failed to retrieve chatbots" });
        }
    },
    async getbyid(req, res) {
        try {
            const { id } = req.params;

            // Find the chatbot record with the given id
            const chatbot = await db.chatbot.findByPk(id);

            if (!chatbot) {
                return res.status(404).json({ error: "Chatbot not found" });
            }

            // Return the chatbot record
            res.json(chatbot);
        } catch (error) {
            console.error("Error retrieving chatbot:", error);
            res.status(500).json({ error: "Failed to retrieve chatbot" });
        }
    },
    async create(req, res) {
        try {
            const { title, chatbotid, isfree } = req.body;
            const newChatbot = await db.chatbot.create({ title, chatbotid, isfree });
            res.status(200).json(newChatbot);
        } catch (error) {
            console.error("Error creating chatbot:", error);
            res.status(400).json({ error: "Failed to create chatbot" });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { title, chatbotid, isfree } = req.body;

            // Find the chatbot record with the given id
            const chatbot = await db.chatbot.findByPk(id);

            if (!chatbot) {
                return res.status(404).json({ error: "Chatbot not found" });
            }

            // Update the chatbot record with the new values
            chatbot.title = title;
            chatbot.isfree = isfree;
            chatbot.chatbotid = chatbotid;
            await chatbot.save();

            // Return the updated chatbot record
            res.json(chatbot);
        } catch (error) {
            console.error("Error updating chatbot:", error);
            res.status(500).json({ error: "Failed to update chatbot" });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;

            // Find the chatbot record with the given id
            const chatbot = await db.chatbot.findByPk(id);

            if (!chatbot) {
                return res.status(404).json({ error: "Chatbot not found" });
            }

            // Delete the chatbot record
            await chatbot.destroy();

            return res.json({ message: "Chatbot deleted successfully" });
        } catch (error) {
            console.error("Error deleting chatbot:", error);
            res.status(500).json({ error: "Failed to delete chatbot" });
        }
    },
}