const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(3000, ()=>{
    console.log('on port 3000');
})


app.use('/', express.static(__dirname+'/public'))

let user = []

app.post('/register',(req,res)=>{
    
    const f = fs.readFileSync('./public/users.txt');
    
    user = JSON.parse(f.toString())

    const findIndex = user.findIndex(item => item.email == req.body.email)
    
    if(findIndex == -1){
        user.push(req.body)
        fs.writeFile('./public/users.txt',JSON.stringify(user),(err)=>{
            if(err){
                console.log(err);
            }
        })
        
    return res.status(200).json({msg:'ok',username:req.body.username})

    } else{
        res.status(201).json({msg:'user email already exist',username:req.body.username})
    }

    
    // res.json({msg:'ok'})s
})

app.post('/login',(req,res)=>{
    // console.log('loginr : '+ req.body.user + req.body.pass )

    const f = fs.readFileSync('./public/users.txt')
    user = JSON.parse(f.toString())
    
    const usersFind = user.find(item => item.usernameReg == req.body.user)

    if(usersFind){
        if(usersFind.passwordReg == req.body.pass){
            return res.status(200).json({msg:'Welcom back '+req.body.user})
        } else{
        return res.status(404).json({msg:'This password isnt right. please try again'})
        }
    }else{
    return res.status(404).json({msg:'This Username isnt right. please try again'})
}
})