
// let h1 =  document.querySelector('h1')
// let h2 =  document.querySelector('h2')
// let h3 =  document.querySelector('h3')
// let article = document.querySelector('article')
// let p = document.querySelectorAll('p')

// let da = document.createElement('button')
// da.classList.add('shmuel')
// da.textContent ='Make Red'
// article.append(da)
// let button = document.createElement('button')
// article.append(button)

// article.lastElementChild.remove()
// let changeColor = (element) => {element.target.style.backgroundColor = 'green'}  
// let hide = (element) => {element.target.style.display = 'none'}  

// let makeR = ()=>{
//     for (const iterator of p) {
//         iterator.style.backgroundColor = 'red' 
//     }
// }
// let makeBig = (e) => {
//     e.target.style.fontSize = `${Math.floor(Math.random()*100 +1)}px`
// }

// let hover = (e) => {
//     e.target.style.opacity = `${Math.random()}`
// }




// h2.addEventListener('click', changeColor)
// h3.addEventListener('click', hide)
// da.addEventListener('click',makeR)

// h1.addEventListener('mouseover',makeBig)
// h2.addEventListener('mouseover',hover)


// console.log(h1);

// e2


// let submitForm = (e)=> {
//     e.preventDefault()
//     if (inputId2.value && inputId.value){
//     console.log(inputId.value)
//     console.log(inputId2.value)

//     let li1 = document.createElement('li')
//     li1.innerHTML = inputId.value
//     let li2 = document.createElement('li')
//     li2.innerHTML = inputId2.value
//     ul.append(li1)
//     ul.append(li2)

//     }

// }
// let form = document.querySelector('form')
// console.log(form);

// let inputId = document.getElementById('fname')
// let inputId2 = document.getElementById('lname')
// console.log(inputId,inputId2)
// let inputName = document.getElementsByName('fname')[0]
// let inputName2 = document.getElementsByName('lname')[0]
// console.log(inputName,inputName2)

// let formSubmit = document.querySelector('form')
// console.log(formSubmit);
// formSubmit.addEventListener('click',submitForm)

// let ul = document.querySelector('ul')


// e3
// let allBoldItems;
// let p = document.querySelector('p')

// let getBold = () =>{
//     allBoldItems = document.querySelectorAll('strong')
// }
// let highlight = () => { 
//     allBoldItems.forEach(element => { element.style.color ='blue'
// });
// }
// let returnNormal = () => { 
//     allBoldItems.forEach(element => { element.style.color ='black'
// });
// }


// getBold();

// p.addEventListener('mouseover',highlight)
// p.addEventListener('mouseout',returnNormal)


// e4


// e5

let rad = document.querySelector('#radius')

rad.addEventListener('click', (e) => 
    e.target.style.color ='red'
)

rad.addEventListener('mouseover', (e) =>{ 
    e.target.style.position ='absolute'
    e.target.style.top ='150px'}

)
rad.addEventListener('mouseout', (e) =>{ 
    e.target.style.position ='absolute'
    e.target.style.bottom ='150px'}

)
rad.addEventListener('dblclick', (e) =>{ 
    e.target.style.fontSize ='40px'}
)

rad.addEventListener('click', (e) => 
    e.target.style.color ='red'
)

rad.addEventListener('click', (e) => 
    e.target.style.color ='red'
)