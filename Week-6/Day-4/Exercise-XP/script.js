// let sum = (x,y) => x+y

// console.log(sum(1,10))

// E2

// this is a function declaration which declares a function using the keyword function
function kiloToGram(kilo){
    return kilo/1000
}
console.log(kiloToGram(110))
// here similair to a function declaration a function expression is defining a function in an expression (a variable in this example) and we can invoke it by calling on the variable 
let KiloToGram = (kilo) => kilo/1000
console.log(KiloToGram(110))

// is a short form of writing a function whixh xould have different restritions
// yet it doesnt need the key words or even the parentisesis
console.log((kilo) => kilo/1000);


// E3


// I had an error here for a long time until It took me 20 min to solve
// I was getting an error Uncaught TypeError: console.log(...) is not a function
// at script.js:26:1
// So I googled and I saw you needed to add a semicolon ; in the code so I added before I reenvoked my second function or after words. to no avail it didnt help
// so I figured out what the issue was I BECUASE on line 18 AFTER THE console.log() I didnt have a semicolon and therefore
// what was happening was that I was passing my anonoumus function (the selfinvoking one) as an immeditae call of the console.log function
// this is what was happening console.log()()
// Thats the equivelent to what was happening  so in my example it was
// console.log()(function selfInvokingFunction (job,location,name,child){
//     alert(`You will be a ${job} in ${location}, and married to ${name} with ${child} kids.`)
// })
// where basically calling the return value of console.log() which is undefined so we are trying to pass the function as an argument to the return value of console.log which throws an error that isnt a function and the ... is the function isnelf


// (function selfInvokingFunction (job,location,name,child){
//     alert(`You will be a ${job} in ${location}, and married to ${name} with ${child} kids.`)
// })('coder','toronto','sally',4)


// E4

let ul = document.querySelector('ul');

((signedIn)=>{
let li = document.createElement('li')
li.classList.add('nav-item')
let aSignIn = document.createElement('a')
aSignIn.classList.add('nav-link')
let image = document.createElement('img') 
image.src = './image-1.png' 

aSignIn.textContent = signedIn

li.append(aSignIn,image)
ul.append(li)
})('Shmuel')



// E5



let makeJuice = (size)=>{
    ing = []
    addIngredients = (firstIng, secondIng, thirdIng,) =>{
        ing.push(firstIng,secondIng,thirdIng)
        console.log(`The client wants a ${size} juice, containing ${firstIng}, ${secondIng}, ${thirdIng}.`);
    }
    displayJuice = ()=>{
        arrayLength = ing.length
        let wants = `The client wants a ${size} juice, containing `
        ing.forEach((element,ind) => {
            !(ind == arrayLength-1) ? wants += `${element}, `: wants += `and ${element}.` 
        })
        return console.log(wants)
    }
    addIngredients('apples','pears','blueberries')
    addIngredients('honey','dates','coffee')
    displayJuice()
} 

makeJuice('large')
// addIngredients()
// E6