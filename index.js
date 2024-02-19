const express = require('express')
const { Server } = require("socket.io");
const http = require('http')
const cors = require('cors');



const app = express()
const server = http.createServer(app)

const io = new Server(server)

app.use(cors())

app.use(express.static("public"))

io.on('connection', (socket) => {
    console.log('a user connected');
});



server.listen(5000, () => {
    console.log('server is listening to 5000')
})