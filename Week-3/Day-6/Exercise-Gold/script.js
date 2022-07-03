let numbers = [123, 8409, 100053, 333333333, 7]
// E1
numbers.forEach(element => {
    element%3 == 0 ? console.log(`True. ${element} is divisible by 3`)
    : console.log(`False. ${element} is not divisible by 3`)
});


// E2

// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }

// let student = prompt('Please enter your name')

//practising short circuiting with this console.log
// console.log(student in guestList|| `Hi! ${student} I'm a guest.`)

// student in guestList? console.log(`Hi I am ${student} and I am from ${guestList[student]}`): console.log(`Hi! im ${student}. I am guest.`);

// E3

let age = [20,5,12,43,98,55];

let ageSum = 0;
age.forEach(element => {
    ageSum += element
});
console.log(ageSum)

let highest = 0
age.forEach(element => {
    element > highest? highest = element: element;
});
console.log(highest)