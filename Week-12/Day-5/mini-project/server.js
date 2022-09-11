const express = require('express')
const {shoppingListArray} = require('./modules/modules.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(3000,console.log('Where Live At Port:3000!!!'))

app.use('/', express.static(__dirname+'/public'))

app.get('/list',(req,res)=>{
    res.json(shoppingListArray)    
})

app.post('/list',(req,res)=>{
// On a call is made to the route /list which is a post request. the promise
// if the response is fullifed will get the values from the form and it will create a post method which be set through the user headers body
// We will then get those values from the body of the header using response.body and we will then push this object into an array whwre we are storing all our item
// Then we return the response of this route which will allow it to then be receeived from the fetch and the turn it into a JSON and being able to extract the data
    shoppingListArray.push(req.body)
    res.sendStatus()

    // res.json(shoppingListArray)
})



