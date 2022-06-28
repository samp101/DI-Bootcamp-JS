// E1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(fruits)
fruits.shift('Banana')
console.log(fruits)

console.log(fruits)
fruits.sort()
console.log(fruits)

console.log(fruits)
fruits.push('Kiwi')
console.log(fruits)

console.log(fruits)
fruits.splice(0,1)
console.log(fruits)

console.log(fruits)
fruits.reverse()
console.log(fruits)


// E2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let nestedArr = moreFruits[1][1]
console.log(nestedArr[0])