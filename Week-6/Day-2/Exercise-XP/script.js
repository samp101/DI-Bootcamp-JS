// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// q1()

// // run in the console:
// q1(a will = 3)

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }
// q22()
// q2()
// q22()

// // run in the console:
// q22(a will = 0)
// q2(nothing happens on the console but a function is called and a =5 )
// q22(a = 5)

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console:
// here were storing in the window object a key called a which value sis hello
// q3() 
// q32()
// were going to alert hello because alert is a property of the window function....

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4()
// test will come up

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// will alert 5 twice because it enters the if statmenyt since its true a get reassigned to 5 and alert 5a wtwice will be 5 now


// function winBattle(){
//     return true;
// }
let winBattle = () => true
let experiencePoints;
winBattle
?experiencePoints=10
:experiencePoints = 1

console.log(`Winners points are: ${experiencePoints}`)

let onlyString = (/\s/.gi)

let isString = (checker) => typeof checker == 'string' ?true:false
console.log(isString('s'))
console.log(isString(4))
console.log(isString([1,2,3,4]))
console.log(isString([1,'2']))
console.log(isString([]))

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((element,ind) => {console.log((`${ind+1}# choice is ${element}`))
element === 'Violet'?console.log('yes'):console.log('No');
});
colors.forEach((element) => {element === 'Violet'?console.log('yes'):0;
});

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((element, ind) =>{
      ind == 0 ? console.log(`${ind+1}${ordinal[1]} choice is ${element}`)
    : ind == 1 ? console.log(`${ind+1}${ordinal[2]} choice is ${element}`)
    : ind == 2 ?console.log(`${ind+1}${ordinal[3]} choice is ${element}`)
    : console.log(`${ind+1}${ordinal[0]} choice is ${element}`)
})



let bankAmount = 0
let tax = .17
let expenses = [200, -100, 146, 167, -2900]

expenses.forEach((element,ind) => {expenses[ind] = element*1.17})
bankAmount = expenses.reduce((first,last ) => first +last, );
console.log(bankAmount)

winner = []
score = 0
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


gameInfo.forEach(element => {
    element['username'] = `${element['username']}!`
    console.log(element['username']); 
});
gameInfo.forEach(function(a) {if(a.score > 5) {winner.push(a.username)}})
gameInfo.forEach(a => score += a.score)

console.log(winner);
console.log(score);

