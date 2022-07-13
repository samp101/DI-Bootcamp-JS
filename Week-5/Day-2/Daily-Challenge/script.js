let formBtn = document.querySelector('form')
let inputs = document.querySelectorAll('input')

let storyPlacement = document.getElementById('story')

let createLib = (e) =>{
    
    if(!(formBtn['noun'].value ==''||
    formBtn['adjective'].value ==''||
    formBtn['person'].value==''||
    formBtn['verb'].value == ''||
    formBtn['place'].value == '')){
        e.preventDefault()
        random = Math.floor(Math.random()*2)
        
        
        noun = formBtn['noun'].value
        adjective = formBtn['adjective'].value
        pName = formBtn['person'].value
        verb =  formBtn['verb'].value
        place =  formBtn['place'].value
        
        stories = [
                `there is a ${noun} that is very ${adjective}. Because ${pName} told me that they were ${verb} in ${place}`,
                `Welcome ${pName}. Only silly people choose ${noun} as their favorite color. ${place} is your current place or your birth place. By the way, ${adjective} is your serial number.`,
              ]
        inputs.forEach((elem) => elem.value = '')

        return storyPlacement.innerHTML = stories[random]
    }
    return alert('sorry your missing an input')
   }

formBtn.addEventListener('submit', createLib)
