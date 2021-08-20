const express = require('express')
const cors = require('cors')
//const  = require('./plants/plant-router')
//const  = require('./auth/auth-router')
const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/',)
server.use('/api/',)
server.use('/api/',)

server.get('/', (req, res) => {
res.send( `<h2>Server is up and running!</h2>` )
})

module.exports = server;