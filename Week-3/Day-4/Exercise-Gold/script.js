// E1
let userLan = prompt('what Lang do you speak?').toLowerCase()


switch (userLan) {

    case 'english':
        console.log('Hello')
        break;

    case 'french':
        console.log('Bonjour')
        break;

    case 'hebrew':
        console.log('Shalom')
        break;

   
    default:
        console.log('01110011 01101111 01110010 01110010 01111001')
        break;
}

// E2
let grade = prompt('please enter your grade')
switch (true) {
    
    case (grade>90) :
        console.log('A')
        break;
    
    case  (grade<=90 && grade>80 ):
        console.log('B')
        break;
    
    case  (grade<=80 && grade>=70 ):
        console.log('C')
        break;
    
    case  (grade<70):
        console.log('d')
        break;

    default:
        break;
}

// E3 
let verb = prompt('please enter a verb')
let ing = 'ing'
console.log(verb.endsWith('ing'),verb.length)
switch (true) {
    
    case (verb.length >=3 && !verb.endsWith('ing')):
        console.log(verb.padEnd(verb.length+3,'ing'))
        break;
    
    case (verb.length >=3 && verb.endsWith('ing')):
        let newVerb = verb.slice(0,verb.length-3)        
        console.log(newVerb.padEnd(verb.length-1,'ly'))
        break;
    
    
    default:
        console.log(verb)
        break;
}

// E4
