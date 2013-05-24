var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {

    socket.on('enter_the_chat_room', function (newuser) {
        socket.broadcast.emit('new_user', newuser);
    });
    socket.on('send_message', function (data) {
        socket.broadcast.emit('new_message', data);
    });
});
