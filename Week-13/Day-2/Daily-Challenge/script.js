const fs = require('fs')

// Exercise 1
const f = fs.readFileSync('./RightLeft.txt',(err)=>{
    if(err){
        console.log(err)
    }
})

const a = f.toString()
const arr = a.split('')

const groupRight = arr.filter(e=>e=='>')
const groupLeft = arr.filter(e=>e=='<')
console.log('> - < = :',groupRight.length - groupLeft.length);


// Exercise 2
let right = 0
let left = 0
let position = 0
let shouldBreak = false

arr.forEach((element,ind) => {

    if(shouldBreak){
        return
    }
    position++
    if(element == '>'){
        right++
    }else if(element == '<'){
        left++
    }
    if(right - left == -1){
        shouldBreak = true
    }

});
console.log('right', right, 'left:', left);
console.log(`At position ${position} > - < = -1`);

