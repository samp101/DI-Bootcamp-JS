// function name1() {
//     let word = prompt('please enter a sentence')
//     let wordArr = word.split(' ')
//     let highWord = Math.max(...word.split(' ').map(word => word.length))
//     let box= '';

//     // for (let index = 0; index < wordArr.length+2; index++) {
//         for (let index2 = 0; index2 < wordArr.length+2; index2++) {
//             for (let index = 0; index < highWord; index++) {
//                 if(index2 == 0 || index2 == wordArr.length+1|| index == 0|| index == highWord-1 ){
//                     box += "*"    
//                     // box += `${wordArr[index]}`
//                  }

//                  else{
//                     box += `${[index2]}` 
                    
//                 }
//             }
//             box +='\n'
            
//             // box += '* '+wordArr[index3]
            
            
            
//             // box += `* ${wordArr[index2]}`;
//             // box += '\n'
            
//         }
    
        
    
//     return box
// }

// console.log(name1())

// I found a code similar to this question online! was very hard but good!  

function star() {
    
    let userWord = prompt('please enter a sentence')

    let userWordArr = userWord.split(' ')
    let logestWord = Math.max(...userWordArr.map(element => element.length))
    let topBottomBorder = "*".repeat(logestWord + 4)

    let frame = `${topBottomBorder}\n`
    frame += userWordArr.reduce((a,b) => a +=`* ${b.padEnd(logestWord)} *\n`,'' )
    frame += topBottomBorder
    return frame
}


console.log(star())