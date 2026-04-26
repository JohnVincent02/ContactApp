// import json server

const jsonServer = require('json-server')

// create server for running json file
const server = jsonServer.create()

// set up route/path for json file

const router = jsonServer.router('db.json')

// create middleware

const middleware = jsonServer.defaults()

// create server port number 

const PORT = 3000

// use middleware, router to server 

server.use(middleware)
server.use(router)

server.listen(PORT,()=>{
    console.log("server started");
    
})