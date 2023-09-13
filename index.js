const express = require('express')
const server = express()
const cors = require('cors')
const morgan = require('morgan')
const client = require('./db/index.js')
const apiRouter = require('./api/index.js')

client.connect()
server.use(cors())
server.use(morgan("dev"))
server.use(express.json())
server.use('/api', apiRouter)

const PORT = 3001

server.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})

module.exports = server