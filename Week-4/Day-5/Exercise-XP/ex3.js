let social = document.querySelector('#navBar')

social.setAttribute('id', 'socialNetworkNavigation')


let newLi = document.createElement('li')
let a =  document.createElement('a')
let text = document.createTextNode('Logout')
a.innerText = 'Logout'
a.href = '#'
newLi.append(a)
let ul = document.querySelector('ul')
ul.append(newLi)


console.log(ul.firstElementChild.textContent,ul.lastElementChild.textContent)