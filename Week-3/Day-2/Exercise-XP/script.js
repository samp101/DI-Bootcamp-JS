// E1
let food = 'Lasagna'
let meal = 'Supper'
console.log(`i eat ${food} at every ${meal}`) 

// E2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let mySeriesWatch = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.join(', ');
console.log(`I watched ${mySeriesWatch} series: ${myWatchedSeriesSentence}`)

// part2 

let seriesIndex = myWatchedSeries.indexOf('the big bang theory')

if(seriesIndex>-1){
    myWatchedSeries[seriesIndex] = 'Friends'
}
console.log(myWatchedSeries)

myWatchedSeries.push('New Series')
console.log(myWatchedSeries)


myWatchedSeries.unshift('Fav Series')
console.log(myWatchedSeries)

let index = myWatchedSeries.indexOf('black mirror');
if (index > -1) {
  myWatchedSeries.splice(index, 1); 
}
console.log(myWatchedSeries)

console.log(myWatchedSeries[1][2])

console.log(myWatchedSeries)

// E3
let temp = Number(prompt('please enter a tempature in Farhenehit to convert to celsius'))
if(typeof(temp)){
    let celsius = (temp/5 * 9 + 32) 
    console.log(celsius)
}else{
    console.log('You didnt enter a number')
}

// eE4
// let c;
// let a = 34;
// let b = 21;

// console.log(a+b) //first expression
// // Prediction: 55 
// // Actual:55 

// a = 2;

// console.log(a+b) //second expression
// // Prediction:23
// // Actual:23


// What is the value of c? undefined

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5'); 7'5'

// E4

// typeof(15)
// // Prediction: 
// // Actual: NUMBER

// typeof(5.5)
// // Prediction: NUMBER
// // Actual: Float

// typeof(NaN)
// // Prediction: IDK
// // Actual: undefined

// typeof("hello")
// // Prediction:string
// // Actual: string

// typeof(true)
// // Prediction: NUmber
// // Actual: Boolean

// typeof(1 != 2)
// // Prediction: IDK
// // Actual: boolean

// "hamburger" + "s"
// // Prediction:hamburgers
// // Actual: hamburgers

// "hamburgers" - "s"
// // Prediction: error
// // Actual: NaN

// "1" + "3"
// // Prediction:
// // Actual:'13'

// "1" - "3"
// // Prediction: Nan
// // Actual:-2 

// "johnny" + 5
// // Prediction:NAN
// // Actual: 'Johnny5

// "johnny" - 5
// // Prediction:
// // Actual:NAN

// 99 * "hello"
// // Prediction: hello 99 times
// // Actual: Nan

// 1 != 1
// // Prediction: false
// // Actual: false

// 1 == "1"
// // Prediction:
// // Actual: true

// 1 === "1"
// // Prediction: false

// E5
// 5 + "34"
// // Prediction:
// // Actual: 534

// 5 - "4"
// // Prediction:
// // Actual: nan

// 10 % 5
// // Prediction:
// // Actual: 0

// 5 % 10
// // Prediction:
// // Actual:5

// "Java" + "Script"
// // Prediction:
// // Actual: JavaScript

// " " + " "
// // Prediction:
// // Actual:'  '

// " " + 0
// // Prediction:
// // Actual:' 0'

// true + true
// // Prediction:
// // Actual:2

// true + false
// // Prediction:
// // Actual:1

// false + true
// // Prediction:
// // Actual:1

// false - true
// // Prediction:
// // Actual:-1

// !true
// // Prediction: false
// // Actual: true

// 3 - 4
// // Prediction:
// // Actual:-1

// "Bob" - "bill"
// // Prediction:
// // Actual: NaN
