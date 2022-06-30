// let age1 = prompt('please enter your age when you where ')
// let age2 = prompt('please enter your age when you where ')
// I dont understand the question
// E2

let postal = Number(prompt('please enter your postal?'))

let strPostal = postal.toString().length
let postalSpace = postal.toString().includes(' ')


if( Number.isInteger(postal) && strPostal==5 &&  !postalSpace){     
    console.log('Confirm')  
}else{     
    console.log('Error')  
}


let pattern = /\d{5}$/
    
a = '12345'
console.log(pattern.test(postal))

// E3

let word = prompt('please enter a word with many vowels elefant is a good example!').toLowerCase()

a = 'abecidofug'

console.log(word.replace(/[aeiou]/ig,''))
console.log(word.replace(/a/g,1).replace(/e/g,2).replace(/i/g,3).replace(/a/g,'1').replace(/o/g,4).replace(/u/g,5))



