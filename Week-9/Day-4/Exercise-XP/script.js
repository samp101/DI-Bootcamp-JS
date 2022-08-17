// // fetch("https://www.swapi.tech/api/starships/9/")
//     // .then(response => response.json())
//     // .then(result => console.log(result));


// const newPromise = async () =>{
//     try{
//         for (let index = 9; index <=10 ; index++) {
//             const starwars = await fetch(`https://www.swapi.tech/api/starships/${index}/`)
//             const data = await starwars.json()
//             console.log(data);
//             console.log(data.result.properties.name);
//         }
//     }
//     catch(error){
//         console.log(`Oops! There was an error`, error);

//     }
        
    
// }

// newPromise()

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// What I think will happen is a promise will be made from the resolve function which is being called from the asyncCall function
// since there is  setTimeout therefore the there will be a console.log(calling) then an await call will make run after which will wait 2 seconds and then eveything else will hjappen after words