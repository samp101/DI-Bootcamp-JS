const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(country);
// console.log(location);
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// console.log(`I am ${John Doe} from ${Vancouver}, ${Canada}. Latitude(${49.2827}), Longitude(${-123.1207})`);

// here we are destructering the person obj and assiging its properties to different variable
// {by doing this and using the exact key names we can assign it to a new vaariable thats will have a default name of the key name unless chosen otherwise}
// so location is a key which we want to destructurisebut not the key rather is values 
// if we want to destructris the keys values and not the key it self so we do the kay name location:{the values of the key}


// e2
function displayStudentInfo(objUser){
    const {first,last} = objUser
    return  `Your full name is ${first} ${last}`
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
console.log(displayStudentInfo({first: 'Shmuel', last:'Posner'}));


// E3
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

const newUsersArray = Object.entries(users)
const newUsersArrayTimes2 = Object.entries((users)).map(e=> [e[0],e[1]*2])
console.log(newUsersArray);
console.log(newUsersArrayTimes2);

console.log(JSON.stringify(newUsersArrayTimes2));


// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// 3 ways of how to change an object into an array
// 1 Object.keys(obj) This function will return all the keys of an object into an array 
// 2 Object.values(obj) This function will return all the values of an object into an array
// 3 Object.entries(obj) This function will return all the whole pair values of an object into an array

// after we did we we want to know now multpily the second value of the 
// so first what I did was I deconstructed the array into seperate values then I put it ack into the array

// E4
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
// My answer: This is a type of a instance of the person class
// the answer: object. Since member is now an instance of the Person class it has initizaled it which make it munipilitive.
// So I wansnt wrong but not right!

//   The Constructor is the function which will allow parameter to define the class

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  
//   // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
// //   Nope Because we never initianiled the name parameter in the new class of Labrador. Only through using th esuper will we get this
  
  
//     // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
// // This isnt necasarry because we have already inherited the name from the Animal class so we dont need to pass the name parameter again
  
  
//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   }; 
// //   This will be good!
  
  
//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
//   this wont inherit anything from Dog class


// E6
// [2] === [2] 
// {} === {}

// false becuase its 2 different arrays in Memory unless we pass it by reference and store it in a var the compare those two it will be true
// True because its both are objects so they are true
// wrong javascript compares objects by identity, not value. Each object, each {} is distinct. so False

// Part 2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
// The property number will change its value to 4
console.log(object2.number)
// The object2 property number will be the same as object 1 since its pointing to the same place in memory and arrays and objects are passed by reference not by value. Which is 4
console.log(object3.number)
// whatever object1 is which is 4
console.log(object4.number)
// 5



// Part2

class Animal{
    constructor(name,type,color,gender){
    this.name = name
    this.type = type
    this.color = color
    this.gender = gender
    }
}

class Mamal extends Animal{
    makeSounds(sounds){
        this.sounds = sounds
        return this.gender == 'male'
        ? `${this.name} the ${this.type} likes to make ${this.sounds} sounds. He usually has the ${this.color} spots on it.`
        :`${this.name} the ${this.type} likes to make ${this.sounds} sounds. She usually has the ${this.color} spots on it.`
        
    }
}

const dolphin = new Mamal('Rex','Dolphin','grey','male')
console.log(dolphin.makeSounds('squeaks'))

const farmerObj = new Mamal('Betsy','Cow','Black & White','female')

console.log(farmerObj.makeSounds('MOOOOOOO'))