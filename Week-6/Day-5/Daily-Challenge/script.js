

let checkIfTrue = elem =>  elem == true

const allThruthy = (...args)=>{
    return args.every(checkIfTrue)
}


console.log(allThruthy(true,1,1>0))
console.log(allThruthy(true,true, true))
console.log(allThruthy(1,NaN))