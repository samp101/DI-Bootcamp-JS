
// E1

// p1 = {
//     fullName: 'Sam',
//     mass: 100,
//     height: 170,
//     BMI: function() {
//        return this.mass/this.height   
//     }
// }

// p2 = {
//     fullName: 'Lamb',
//     mass: 100,
//     height: 110,
//     BMI: function() {
//         return this.mass/this.height   
//     }
// }

// console.log(p2.BMI()>p1.BMI()? `${p2.fullName} has a higher BMI`:`${p1.fullName} has a higher BMI` )




// E2

function findAvg(gradesList) {
    let arrSum = gradesList.reduce((a,b) => a+b)
   return gradesList = arrSum/gradesList.length
}
function passTest(avg) {
    let a = findAvg(avg)
    return a > 60 ? 'Pass': 'Fail'    
}


console.log(passTest([1,2,3,4,5]))

