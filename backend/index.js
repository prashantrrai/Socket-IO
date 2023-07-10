const express = require('express')

const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8080

app.get('/', async (request,response) => {
     response.json({message: 'Hello World'})
})

const server = app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
})

// const io = require('socket.io')(server, {
//     cors: {origin: '*'}
// })

// io.on('connection', (socket) => {
//     console.log('New client connected')

//     //--------------SENDING DATA TO CLIENT FROM SERVER-----------------//
//     io.emit('test', 'Hello World data emitted from server')

//     //--------------SENDING DATA TO SERVER FROM CLIENT-----------------//
//     // it cannot be done with io.on we need to use here socket.on whichc is declared at top after connection
//     socket.on('testclient', (data) => {
//         console.log(data)
//     })

//   });

const initializeSocket = require("./socket")
initializeSocket(server)
