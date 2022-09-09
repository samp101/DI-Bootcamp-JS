const http = require('http')


const server = http.createServer((request,response)=>{
    response.end('<h1>whatsup</h1><h1>whatsup</h1><h1>whatsup</h1>')
})

server.listen(8080)
