let bottle = 99;

console.log('='.repeat(35));

for (let index = 1; index < bottle; index++ ) {
    console.log(`${bottle} bottles of beer on the wall.`)    
    bottle-= index
    index == 1 ? console.log(`take ${index} down pass it around.`) : console.log(`take ${index} down pass them around.`)
}
console.log('='.repeat(35))