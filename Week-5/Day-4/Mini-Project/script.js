let color = document.querySelectorAll('.colors')
let divs = document.querySelector('#main').children
let colorSelected ;

function clear1(){
    for (let index = 0; index < divs.length; index++) {
        divs[index].style.backgroundColor = 'white'
    }
    colorSelected=''

}
function selectTheColor(e){
    colorSelected = e.target.style.backgroundColor
}

function colorTheBackground(e){
    e.target.style.backgroundColor = colorSelected
}

color.forEach(element => {
    element.addEventListener('click',selectTheColor) 
});

for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener('mouseover',colorTheBackground)
    
}