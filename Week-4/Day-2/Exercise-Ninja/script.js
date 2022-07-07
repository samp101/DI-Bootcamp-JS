// E1

let random = Math.floor((Math.random()*100) + 1)

for (let index = 0; index <=random; index++) {
        index %2== 0?console.log(index):random   
}

// E2
function upperWord() {

    let word = prompt('please eneter a sentence')
    let wordArr = word.split('')
    let newEvenArr = wordArr.map((elem,ind) =>  ind % 2 == 0? (`${elem.charAt().toUpperCase()}`): (`${elem.charAt().toLowerCase()}`)).join('')
    let newOddArr = wordArr.map((elem,ind) =>  ind % 2 == 0? (`${elem.charAt().toLowerCase()}`): (`${elem.charAt().toUpperCase()}`)).join('')
    return `${newEvenArr} ${newOddArr}`

}
// console.log(upperWord())

// E3

function isPalandrom() {
    let word = prompt('please enter a word').toLowerCase()
    let sp = word.split('').reverse().join('')
    return word == sp? true: false
}
// console.log(isPalandrom())

// E4
let array2 = ['a',7]
let array3 = [1,44,112,55,77]
 
function getRidNum(arr) { 

    let arrays = arr.filter((elem => typeof elem === 'number' ))
    let highest = Math.max(...arrays)
    return highest
}
console.log(getRidNum(array2))
console.log(getRidNum(array3))

// E5
list2 = [1,1,1,14,6] 
list3 = [1,2,2,2,4,6] 
list4 = [1,1,15,5,5,5,5,5,14,6] 

function uniqueValue(arr){
    let set1 = new Set(arr)
    return arrSet = Array.from(set1) 
}
console.log(uniqueValue(list2))
console.log(uniqueValue(list3))
console.log(uniqueValue(list4))



// function Declartion is function name(param){}
//  function expression is let a = function name(){} or anonymus function(){}  
// expression is something which produces a value so to return a function expression you use return or a = 'b' these are expressions 
// inorder to get an exprssion you need to call it