let div = document.getElementById('container')
console.log(div)
// div#container

let di = document.getElementById('container')

console.log(di)

let ul = document.getElementsByTagName('ul')

let liRichard = ul[0].getElementsByTagName('li')[1]
liRichard.innerHTML = 'Richard'

ul[0].getElementsByTagName('li')[0].innerHTML = 'Shmuel'
let a = document.getElementsByTagName('li')

a[2].innerHTML = 'Shmuel'
a[3].remove()

for (const elemenet of ul) {
    elemenet.classList.add('student_list')
}

ul[0].classList.add('university','attendance')