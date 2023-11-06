const jwt = require('jsonwebtoken');
const { verify } = require('jsonwebtoken');
var onlineUsers = require('../onlineUsers')
module.exports = function authSocket(socket, next) {
    // console.log(socket.handshake.headers)
    const token = socket.handshake.headers.token
    if (!token) return ("auth failed")
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET)
        if (socket.user) {
            onlineUsers.delete(socket.user.id);
        }
        socket.user = user;
        next()
    } catch (error) {
        console.log(`error ${error}`)
        return error
    }
}