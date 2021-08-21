const express = require('express')
const cors = require('cors')
const plantRouter = require('./plants/plant-router')
const authRouter = require('./auth/auth-router')
const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/plants', plantRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
res.send( `<h2>Server is up and running!</h2>` )
})

module.exports = server;