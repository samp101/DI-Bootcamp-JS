// const fetchy = fetch('https://form-method.herokuapp.com/login?q=a')
// .then(res =>  res.json())
// .then(data => console.log(data))



// async function a(){


// }

// const ab = async function (){
    
// } 

// const abc = async() => {

// }

// const url = 'https://jsonplaceholder.typicode.com/users'

// const fetchy1 = fetch(url)
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// })
// .catch(a=> {
//     console.log(a);
// })



async function exe() {
    console.log('First');
    const data = fetchy1
    
    return fetchy1
}


console.log();

// Daniel Robin8:02 PM
// const url = "https://jsonplaceholder.typicode.com/users";
// async function fetcher(url) {
//   const data = await fetch(url);
//   if (data.ok) {
//     return data;
//   } else {
//     throw Error("Error");
//   }
// }

// fetcher(url)
//   .then((res) => {
//     const jsoned = res.json();
//     return jsoned;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });



// const buyOranges = async () =>{
//      await setTimeout(console.log('buying oranges') ,3000)
// } 
// const peelingOrange = async () =>{
//    await setTimeout(console.log('peeling oranges') ,2000)
// } 
// const juicingOrange = async () => {
//     await setTimeout(console.log('juicing oranges') ,1000)
// } 

const buyOranges = () =>{
    return new Promise(res => {
     setTimeout(()=>res(console.log('buying oranges')) ,3000)
    })
} 
const peelingOrange = () =>{
    return new Promise(res => {
   setTimeout(()=>res(console.log('peeling oranges')) ,2000)
    })
} 
const juicingOrange = () => {
    return new Promise(res => {
    setTimeout(()=>res(console.log('juicing oranges')) ,1000)
    })
} 

// buyOranges()
const process = async()=>{
     await buyOranges()
     await peelingOrange()
     await juicingOrange()
}


process()

// const buyOranges = () =>{
//      setTimeout(()=>console.log('buying oranges') ,3000)
// } 
// const peelingOrange = () =>{
//    setTimeout(()=>console.log('peeling oranges') ,2000)
// } 
// const juicingOrange = () => {
//     setTimeout(()=>console.log('juicing oranges') ,1000)
// } 

// // buyOranges()
// const process = async ()=>{
//      await buyOranges()
//      await peelingOrange()
//       juicingOrange()
// }


// process()











