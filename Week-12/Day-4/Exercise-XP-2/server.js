const express = require('express')
const {user} = require('./modules')
console.log(user);


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(3000)

app.use('/', express.static(__dirname+'/public'))

app.get('/home',(req,res)=>{
    res.json(user)
})

app.get('/:id',(req,res)=>{
    
    res.json(req.params)
})