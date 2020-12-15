const port = 3003

import bodyParser, { urlencoded } from 'body-parser'
import express from 'express'
const server = express()

server.use(urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})