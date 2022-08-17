

let b = (e) => e> 10

const prompiseExercise = new Promise((res,rej)=>{
    const checker = b(2)
    if(checker){
        res(checker)
    }  else {
        rej(checker)
    }
})
// .then(e=>res))

prompiseExercise.then(res=>res)

console.log(prompiseExercise.then((e)=> console.log(e)))
console.log(prompiseExercise.then(e=> console.log(e)))