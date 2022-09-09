const http = require('http')

const user = {
    firstname: 'John',
    lastname: 'Doe'
}
const server = http.createServer((req,resp)=>{
    console.log(req.headers)
    console.log('user');
    resp.setHeader('Content-Type', 'application/json')

    resp.end(JSON.stringify(user))

})

server.listen(8080)