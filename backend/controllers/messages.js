const http = require('https');
const helper = require("../helper/http")
const db = require("../models")
const io = require('../socket').io()
var onlineUsers = require('../onlineUsers')
const { Op } = require("sequelize");


module.exports = messageController = {

    async sendMessage(req, res) {
        try {
            const uid = {
                id: req.user.id
            }

            const API_KEY = process.env.API_KEY;
            const options = {
                method: 'POST',
                hostname: 'www.chatbase.co',
                port: null,
                path: '/api/v1/chat',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            };
            var conversation_exist_id
            if (req.body.conversation_id !== undefined && req.body.conversation_id !== null) {
                conversation_exist_id = req.body.conversation_id
            } else {
                let conversation = await db.conversation.create({
                    user_id: uid.id,
                    chatBot_id: req.body.chatBot_id,
                    title: req.body.text
                });
                conversation_exist_id = conversation.id
            }


            const allChats = await db.chat.findAll({
                where: {
                    conversation_id: conversation_exist_id
                },
                order: [
                    ['createdAt', 'DESC']
                ],
                limit: 20
            });

            messagesList = [];

            for (var i in allChats) {
                messagesList.push({
                    content: allChats[i].text,
                    role: allChats[i].isFromUser ? 'user' : 'assistant'
                });
            }
            messagesList.push({
                content: req.body.text,
                role: 'user'
            });


            const sentMessage = await db.chat.create({
                isFromUser: true,
                user_id: uid.id,
                conversation_id: conversation_exist_id,
                text: req.body.text
            });

            const requestPayload = {
                chatbotId: req.body.chatBotIdentifier,
                messages: messagesList,
                stream: true,
                temperature: 0,
                conversationId: conversation_exist_id.toString()
            };
            const chunks = [];
            const apiResponse = await new Promise((resolve, reject) => {
                const reqest = http.request(options, function(result) {
                    result.on('data', function(chunk) {
                        try {
                            chunks.push(chunk);
                            const textChunk = chunk.toString('utf-8');
                            socketid = onlineUsers.get(uid.id)
                            io.to(socketid).emit("response", textChunk);
                        } catch (e) {
                            console.error(e);
                        }
                    });
                    result.on('end', function() {
                        resolve(Buffer.concat(chunks));
                    });
                    result.on('error', function(err) {
                        console.log(err)
                        reject(err);
                    });
                });

                reqest.write(JSON.stringify(requestPayload));
                reqest.end();
            });
            const resivedSMessage = Buffer.concat(chunks);
            // Save API response in the DB
            const receivedMessage = await db.chat.create({
                isFromUser: false, // Assuming the API response is not from the user
                user_id: uid.id,
                conversation_id: conversation_exist_id,
                text: resivedSMessage.toString()
            });
            // Send both messages back to client

            helper.success(res, { receivedMessage });
        } catch (e) {
            console.log(e)
            helper.error(res)
        }
    },
}