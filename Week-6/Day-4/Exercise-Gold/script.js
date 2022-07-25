// let landscape = function() {

//     let result = "";
// //    Here I changed it to an an arrow function is this a nested afunction whihc they are asking for?
//     let flat = (x)=>{
//       for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }
// //    Here I changed it to an an arrow function is this a nested afunction whihc they are asking for?
//     let mountain = (x) => {
//       result = result + "/"
//       for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//       }
//       result = result + "\\"
//     }
   
//     flat(4);
//     mountain(4);
//     flat(4)
   
//     return result;
//    }
   
//    console.log(landscape())
// //    ____/''''\____
// let div;


// const addTo = x => y => x + y;
// let addToTen = addTo(10);
// console.log(addToTen(3))

// addTo(10) = 10 => y => 10+y
// now we are storing this into another variable and this addToTen can accsess the parent scope so
// addToTen(3) = 10 => 3 => 10+3

// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1) 

// curriedSum will equal (30) => (1) => 30 + 1
// because Curried some is first returning that a should = 30 and then we are recalling the
// next function thats nested inside curriedSum which has access to the a variable in the outer scope so the Java bots will keep that variable around in memory
// not a will return another function which is is b and we are calling it all in one call.
// so b will equal 1 so....
//  curriedSum will equal (30) => (1) => 30 + 1

// const newCurriedSum = (a) => (b) => a + b
// const add5 = newCurriedSum(5)
// console.log(add5(12));

// this is the equivelent of
// let newCurriedSum = (a) => {
//     let add5 = (b)=>{
//         return a+b
//     }
//     return add5
// }
// console.log(newCurriedSum(5)(10));
//  on the first run we assign to the argument a 5 and this arguement now can be refrenced by 
// the function add5() since it is nested inside it. now that function newCurriedSum is returning add5
// we can call is again in one expression 




// once again since a is becuase accessed in b therefore we are keeping a in memory and we can pass all these arguments in one calling
// since a is refrenced in b
//  newCurriedSum = (5) => (b) => 5 + b
//  newCurriedSum = (5) => (12) => 5 + 12
// newCurried ill be 17 

// let newC = (a)=>{
//      let newCurriedSumagain = (b) => {
//         return a + b
//     }
//     return newCurriedSumagain
// }

// console.log(newC(5)(12));

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))

// we do the inner most brackets which is 10 + 5 and which is 15
// then we do num + 1 whihc is now 15+1 so 16
// 16

