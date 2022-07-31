// -----1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// USA wrong ['u','s','A']
// THE SPREAD operator works that it passes the index of whatever is put init
// so ...country will be U S A and if you put that into an array it will country[0] country[1] country[2]
// inside and array 

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//  ['undefined','undefined'] why becuase we are taking the indices of each value in the array and logging it.
// so newArray[0] is = undefined and newArray[1] is = undefined



// E2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const newUser = users.map((e)=>`Hello ${e.firstName}`)
console.log(newUser)

const fullStackOnly = users.filter(e => e.role == 'Full Stack Resident' )
console.log(fullStackOnly);

const onlyLastName = users.filter(e => e.role == 'Full Stack Resident').map(e=>(e.lastName))

console.log(onlyLastName);

// e3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let string = ''

const newEpic =  epic.reduce((total,item) => string+= item+' ',0)

console.log(newEpic);

// E4
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter(e => e.isPassed ).map(e => `Good Job ${e.name}, you passed the course in ${e.course}!` )
passed.forEach(e=> console.log(e))