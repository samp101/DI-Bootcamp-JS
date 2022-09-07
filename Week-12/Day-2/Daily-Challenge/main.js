const { largeNum, now} = require('./script.js')
const http = require('http')

console.log(`${largeNum + 5} is a really big number!`)



const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log('WE ARE LIVE!!!!!');
    console.log('I am listening');
    res.end(`My Module is
     <br>${largeNum} 
    <br> <h1> Hi there at the frontend </h1>
    Today is ${now}`)
    // res.end(`)
}).listen(3000)