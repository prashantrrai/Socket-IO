const  socketio  = require('socket.io');

async function initializeSocket(server) {
    const io = socketio(server, {cors: {origin: ["http://localhost:4200"]}});


io.on('connection', (socket) => {
    console.log('New client connected')

    //--------------SENDING DATA TO CLIENT FROM SERVER-----------------//
    io.emit('test', 'Hello World data emitted from server')

    //--------------SENDING DATA TO SERVER FROM CLIENT-----------------//
    // it cannot be done with io.on we need to use here socket.on whichc is declared at top after connection
    socket.on('testclient', (data) => {
        console.log(data)
    })

  });

}

module.exports = initializeSocket;
