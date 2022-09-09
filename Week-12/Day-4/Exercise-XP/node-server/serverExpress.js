const express = require('express')

const app = express()


app.listen(3000)
// to get a html fill use this and gets the file from the public folder
// app.use('/', express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.send('<h1>This is an HTML tag </h1>')  
})