
function compare2Ten(num) {
    const promise = new Promise((resolve,reject)=>{
        if(num>=10){
             setTimeout(resolve ,4000, num )
        }
        else{
            reject(num)
        }
    })
    return promise
}


compare2Ten(15)
.then( () => console.log('sucess'))
.catch(error => console.log(error))
// compare2Ten(5)
// .then(() => console.log('sucess'))
// .catch(error => console.log(error))
