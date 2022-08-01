console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    // return ;
  }))

//   I suspected it would be [2,4,6] but I am not sure why you need the second return though

console.log([[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  ))

//   [1,2,0,1,2,3] because reduce is the total value plus the next value but the next parameter (for example is is [1,2] is the beggining of the acc parameter)is the starting point so...
// [1,2] now plus 0,1,2,3

// e3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
});
// console.log(newArray)



// first interation 0 second 1,2,3,4,5 


// e4
// Using a method, take this array 
const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
// and modify it to look like this array: [1,2,3,[4],[5]].

// let merged = [].concat.apply([], array);
// var cloned = JSON.parse(JSON.stringify(array))
// let merged = [].concat.apply([], cloned);
const cloned = array.flat(2) 
// what flat is is a reduce function for example 
// array.reduce((total,value)) => total.concat(value),[]
// which is doing is joining the total which will become an array and concating it with the next value


// console.log(merged);
console.log(cloned);

// e5
//  and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let newA = greeting.map(element => element.join(' '))

// this will work because What we are doing is each element We are combining them as a string in the arrays first value,
// and we do this for each array value
// so on the first indice/round the element.join(' ') will be 'Hello young grasshopper!' and so on


console.log(newA);

// let newA = []
// greeting.forEach((e)=> {
//         newA.push(e)
// })

// console.log(...greeting);

// e4
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
const untrap = trapped.flat(Infinity)
console.log(untrap);

const arr = [1, 2, [3, 4]];
arr.reduce((acc, val) => {
    console.log('I am acc=>'+typeof acc,acc);
    console.log('I am val=>'+typeof val,val);
    return acc.concat(val)
}, [])
