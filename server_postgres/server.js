const Koa = require('koa')
const parser = require('koa-bodyparser')
const cors = require('@koa/cors');

const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const { getIPAdress } = require('./core/util')

const server = new Koa()

server.use(cors())
server.use(catchError)
server.use(parser())

InitManager.initCore(server)

// 监听端口号
const port = parseInt(process.env.PORT, 10) || 3000;
server.listen(port, () => {
  console.log(`The server is running at ${getIPAdress()}:${port}`)
})