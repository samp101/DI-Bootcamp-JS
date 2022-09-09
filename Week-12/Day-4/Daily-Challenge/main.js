const express  = require('express')
const app = express()

app.listen(4200,()=>console.log('where live!!!'))


app.use('/',express.static(__dirname+'/public'))

app.get('/aboutMe/:Hobby', (req,res)=>{
    // console.log();
    if(typeof req.params.Hobby == 'string'){
      res.send(`<h1> My favourite hobby is ${req.params.Hobby}`)
    }else{
        res.sendStatus(404)
        res.send(`<h1>Cant find page ${req.url}  aboutMe/${req.params.Hobby}`)
}
})

app.get('/pics', (req,res)=>{
    res.send('<img src="http://placekitten.com/g/200/300" alt="kitten" srcset="">')
})
app.get('/form', (req,res)=>{
    
    
    res.send(`<h1>Here is a message from ${req.query.name} AT ${req.query.email} </h1> 
    <br> <p>${req.query.message}</p>`)
})

