// E1
let people = ["Greg", "Mary", "Devon", "James"];

console.log(people)
people.shift()
console.log(people)

console.log(people)
people[2] = 'Jason'
console.log(people)

console.log(people)
people.push('Shmuel')
console.log(people)

console.log(people.indexOf('Mary'))

console.log(people)
let newArr = people.slice(1,3)
console.log(newArr)

console.log(people.indexOf('foo')) // Not found = -1



for (let index = 0; index < people.length; index++) {
    console.log(people[index]);   
    if(people[index] == 'Jason'){
        break
    }
}

// E2
let colorArr = ['Orange','Red', 'Blue', 'Pink','Purple']
let suffix = ['rst','cnd','rd','th','th']

for (let col of colorArr) {
    console.log(`My Favourite Color is ${col}`)   
}
for (let index = 0; index < colorArr.length; index++) {
    console.log(`My ${index+1}${suffix[index]} Favourite Color is ${colorArr[index]}`)   
}
  
// E3
// let user = Number(prompt('please enter a number from 1-10'))

//     if( isNaN(user) ){
//         alert('You didnt enter a number')
//     }else {   
//         while (user<10) {
//             alert('You didnt Enter a number bigger then 10!!!')
//             user = Number(prompt('please enter a number from 1-10'))   
//         }
//         alert(`Your number was ${user}`)
//     }


// E4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
let sarah = building.numberOfRoomsAndRent.sarah[1];
let david = building.numberOfRoomsAndRent.david[1];
let daAndSa = sarah+david
let dan = building.numberOfRoomsAndRent.dan[1];
daAndSa>dan?dan += 1200:dan; 



// E5

let family = {
    Dad: 'dad',
    Mom: 'mom',
    Brother: 'brother',
    Sister: 'sister'
}

console.log(family)

for (let key in family) {
    console.log(key)
}
for (let key in family) {
        console.log(family[key])
}
// E6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'

  }

// Not sure in the question Its was asked to use a for loop. I am assuming a  for in Is a for loop.
let newMess=''
for (let key in details) {
    newMess +=`${key.charAt(0).toUpperCase()}${key.slice(1)} ${details[key].charAt(0).toUpperCase()}${details[key].slice(1)} `;    
}
console.log(newMess)

let objArr = Object.entries(details);
let newArrObj = objArr[0].concat(objArr[1]).concat(objArr[2])
console.log(newArrObj.join(' '))


// E7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()
let newSoc = ''
names.forEach(element => {newSoc +=  element[0];
});
console.log(newSoc)

