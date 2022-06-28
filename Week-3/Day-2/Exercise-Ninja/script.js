// 5 >= 1 True
// 0 === 1 False
// 4 <= 1 false
// 1 != 1 false
// "A" > "B"  false
// "B" < "C" true
// "a" > "A" true 
// "b" < "A" false
// true === false false
// true != true false


// E2
// let num = prompt('enter a few nums wit a comma in between')  
// let numArray = num.split(',')
// let value = 0
// numArray.map( (elementOfNumArray,ind) => value += ind+ Number(elementOfNumArray) )
// console.log(value)

// E3

// let userInput1 = prompt('please enter a sentence that has Nemo in it').toLowerCase()
// let nemoPosition = userInput1.indexOf('nemo')
// nemoPosition>0? alert(`I found The word Nemo at position ${nemoPosition}`): alert('I could find the word Nemo')

// E4
// let userInput2 = Number(prompt('please enter a number'))
// let o = 'o'
// if(userInput2<2){
//     alert('boom')
// }
// else if(userInput2>2 &&  userInput2%2 == 0 && userInput2%5 == 0 ){
//     o = o.repeat(userInput2)
//     alert(`b${o}m!`.toUpperCase())
// }
// else if(userInput2>2 && userInput2%5 == 0 ){
//     o = o.repeat(userInput2)
//     alert(`b${o}m`.toUpperCase())
// }
// else if(userInput2>2 && userInput2%2 == 0 ){
//     o = o.repeat(userInput2)
//     alert(`b${o}m!`)
// }
// else if(userInput2>2 ){
//     o = o.repeat(userInput2)
//     alert(`b${o}m`)
// }
