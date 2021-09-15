const express = require('express')
const router = require('./routes')
const path = require('path')
const dirname = __dirname

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(dirname , 'views'))
server.use(express.static('public'))

server.use(express.urlencoded({extended: true}))
server.use(router)

server.listen(3000, () => console.log('rodando'))