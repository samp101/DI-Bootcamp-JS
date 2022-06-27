let sentence = ["my","favorite","color","is","blue"];
let newSentence = sentence.join(' ')

console.log(newSentence)

// E2
let str1 = "mix";
let str2 = "pod";

let newSt1 = str1.substr(0,2)
let newSt2 = str2.substr(0,2)
let st1_st2 = `${str1} ${str2}`

console.log(st1_st2)

// e3
let num1 = Number(prompt('Please enter a number'))
let num2 = Number(prompt('Please enter another number'))
alert(num1+num2)


let action = prompt('what would you like to do')
switch (action) {
    case '-':
        alert(num1-num2)
        
        break;
    case '+':
        alert(num1+num2)
        
        break;
    case '/':
        alert(num1/num2)
        
        break;
    case '*':
        alert(num1*num2)
        
        break;

    default:
        alert('you didnt enter a proper action goodbye!')
        break;
}