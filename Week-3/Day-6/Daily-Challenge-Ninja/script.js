let numbers = [5,0,9,1,7,4,2,6,3,8];

let highest = 0

// for (let iterator in numbers) {
//     for( let iterator2 in numbers){

//         if(iterator>iterator2)


//     }
// }

for (let index = 0; index < numbers.length; index++) {
    for (let index2 = 0; index2 < numbers.length; index2++) {
        if(numbers[index2]>numbers[index2+1]){
            let temp = numbers[index2]
            numbers[index2] = numbers[index2+1]
            numbers[index2+1] = temp
        }
    }
}
console.log(numbers)

for (let index = 0; index < numbers.length; index++) {
    for (let index2 = 0; index2 < numbers.length; index2++) {
        if(numbers[index2]<numbers[index2+1]){
            let temp = numbers[index2]
            numbers[index2] = numbers[index2+1]
            numbers[index2+1] = temp
        }
    }
}
console.log(numbers)