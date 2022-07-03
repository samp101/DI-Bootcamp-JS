// let age1 = prompt('please enter your age when you where ')
// let age2 = prompt('please enter your age when you where ')
// I dont understand the question

let year1 = Number(prompt("Please enter the year you were born:"));
let year2 = Number(prompt("Please enter the year you were born:"));
let older = 0;
let younger = 0;
let outputYear;
year1 < year2 
? outputYear = year2*2 - year1
:outputYear =  year1*2 - year2;
alert(outputYear);


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
console.log(word.replace(/a/gi,1).replace(/e/gi,2).replace(/i/gi,3).replace(/a/gi,'1').replace(/o/gi,4).replace(/u/gi,5))



