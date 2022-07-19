let big = document.querySelector('#target')
let small = document.querySelector('#box')




let allowDrop = (e)=>{
    console.log(e)
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
}

// I couldnt get the effect of get the div to look like its moving would love feedback!!
// All that would happen is the box would move to the other bigger boxed when placed
let drag = (e)=>{
     e.dataTransfer.setData("text", e.target.id);
     e.dataTransfer.effectAllowed = "move";
}


let drop = (e)=>{
    e.preventDefault()  
    let data = e.dataTransfer.getData('text')
    small.style.marginTop = '75px'
    small.style.marginLeft = 'auto'
    small.style.marginLeft = 'auto'
    e.target.append(document.getElementById(data))
}



big.addEventListener('drop',drop)
big.addEventListener('dragover',allowDrop)
small.addEventListener('dragstart',drag)