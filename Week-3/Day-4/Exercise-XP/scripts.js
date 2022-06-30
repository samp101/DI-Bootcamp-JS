// E1
let x = 2;
let y = 20;

x<y ? console.log(`${x} is less then ${y}`) : console.log(`${x} is greater then ${y}`)


// E2
let newDog = 'Chihuahua'

console.log(newDog.length)
console.log(newDog.toLowerCase())
console.log(newDog.toUpperCase())

newDog == 'Chihuahua'? console.log('I love Chihuahuas, it’s my favorite dog breed'):console.log('I dont care, I prefer cats')

// E3
let userInput = Number(prompt('Please pick a num'))
userInput%2==0? console.log(`${userInput} is an even number`) :console.log(`${userInput} is an odd number`)

// E4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let usersLen = users.length

switch (true) {

    case (usersLen<0):
        console.log('no ones online')
        break;

    case (usersLen==1):
        console.log(`${users[0]} is online`)
        break;

    case (usersLen==2):
        console.log(`${users[0]} and ${users[1]} are online`)
        break;

    case (usersLen>2):
        console.log(`${users[0]} and ${users[1]} and ${usersLen-2} others are online`)
        break;

    default:
        break;
}

// E5