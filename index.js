
const io = require('socket.io')(8000, {
    cors: { origin: ["http://localhost:3000"] }
})

io.on('connection', socket => {
    // console.log(socket.id)

    socket.on("sendMessage", (message, room) => {
        // console.log(message, room)
        socket.to(room).emit('reciveMessage', message);
    })

    socket.on("join-room", (room, cb) => {
        // console.log(room)
        socket.join(room)
        socket.to(room).emit('reciveMessage', `Room Joined By ${socket.id}`);
        cb(room)
    })
})

