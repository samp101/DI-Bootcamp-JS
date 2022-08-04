const nameset = {first: 'Elie', last:'Schoppik'}
const nameset1 = {first: 'Shmuel', last:'Posner'}

const printFullName = ({first,  last}) => {
    return `Your full name is ${first} ${last}`
}

console.log(printFullName(nameset1));

console.log(printFullName(nameset));
console.log(printFullName({first: 'Elie', last:'Schoppik'}));
const a = { a: 1, c: 2, b: 3 }


// e2
function keysAndValues(obj) {
    return [Object.keys(obj).sort(),Object.values(obj).sort()]
}

console.log(JSON.stringify(keysAndValues(a)));
console.log(keysAndValues(a));

// e3
class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log('I am counterOne ', counterOne.count);
  console.log('I am counterTwo ', counterTwo.count);
//   counter will = 3 since a class is an object therefore it is passed by reference and counterTwo is pointing to the same place in memory as counterOne therefoer if your incremting the counterOne it will lso incremnt the couinteTwo and viseaversa

  