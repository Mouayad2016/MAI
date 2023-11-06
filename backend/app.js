var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var http = require('http');
var socketio = require('socket.io');
var app = express();
var server = http.createServer(app);
// var io = socketio(server);
// console.log("io")
// console.log(io)

var debug = require('debug')('backend:server');
var port = normalizePort(process.env.PORT || '3000');

// Add your server.on events here:
// const server = require('http').Server(app)
var io = require('./socket').initialize(server);
require("dotenv").config();
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var messagesRouter = require('./routes/message');
var chatBotRouter = require('./routes/chatbot');
var conversationRouter = require('./routes/conversation');
const privacyPolicyRouter = require("./routes/policy");
const userRouter = require("./routes/user");
const openaiRouter = require("./routes/openAI");

var onlineUsers = require('./onlineUsers')

// server.listen(8080)
const socketToken = require('./jwt/socketToken')

io.use(socketToken)
io.on('connection', (socket) => {
    let userId = socket.handshake.headers.userid;
    onlineUsers.set(socket.user.id, socket.id);
    console.log(onlineUsers)
    socket.on('disconnecting', function() {
        console.log("disconnecting")
        onlineUsers.delete(socket.user.id);
        console.log(onlineUsers)
    })
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.get('/securitypolicy', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'policy.html'));
});
app.get('/deleteaccount', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'raderaKonto.html'));
});
app.get('/deleteaccount/verify', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'delete.html'));
});
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/me', messagesRouter);
app.use('/bot', chatBotRouter);
app.use("/con", conversationRouter)
app.use("/policy", privacyPolicyRouter);
app.use("/user", userRouter);
app.use("/sum", openaiRouter);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


console.log(onlineUsers)
    // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = { app, server, io };