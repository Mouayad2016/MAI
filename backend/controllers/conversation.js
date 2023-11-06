const { Model } = require("sequelize");
const helper = require("../helper/http")
const db = require("../models");
const http = require("../helper/http");
const { Op } = require("sequelize");

module.exports = conversationController = {
    async create(req, res) {
        try {
            let conversation = await db.conversation.create({
                user_id: req.body.user_id,
                chatBot_id: req.body.chatBot_id,
                title: req.body.title
            });
            return helper.success(res, conversation);
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    async getAllUserConversation(req, res) {
        try {
            const uid = {
                id: req.user.id
            }

            let conversations = await db.conversation.findAll({
                where: {
                    [Op.and]: [
                        { user_id: uid.id },
                        { chatBot_id: req.params.id }
                    ]

                },

            });
            return helper.success(res, conversations);
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    async getConversationById(req, res) {
        try {
            let conversations = await db.conversation.findOne({
                where: {
                    id: req.params.id,
                },
                include: [{
                    model: db.chat,
                    // order: [
                    //     ["createdAt", "ASC"]
                    // ],

                }, ],
                order: [
                    [{ model: db.chat }, 'createdAt', 'DESC']
                ]
            });
            return helper.success(res, conversations);
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

    async delete(req, res) {
        try {
            const uid = {
                id: req.user.id
            }
            let result = await db.conversation.destroy({
                where: {
                    [Op.and]: [
                        { id: req.params.id },
                        {
                            user_id: uid.id
                        }
                    ]

                },
            });
            return http.success(res, "deleted"); // This will return the number of deleted rows
        } catch (err) {
            console.error(err);
            throw err;
        }
    },

}