const container = document.querySelector('#user-info')

function getUser(){
    fetch('http://localhost:3000/home')
    .then((res) => res.json())
    .then(data=>{
        console.log(data)
        const getname = document.createElement('h1')
        
        getname.innerHTML = `Question 1 ${data.firstname} ${data.lastname}????`

        container.append(getname)

    })
    .catch(e=>console.log(e))

}
function getUserWithId(){
    fetch('http://localhost:3000/50000')
    .then((res) => res.json())
    .then(data=>{
        console.log(data)
        const getname = document.createElement('h1')
        
        getname.innerHTML = `Question 2 ${data.id}`

        container.append(getname)

    })
    .catch(e=>console.log(e))

}

const alert1 = () => alert('I was clicked')

getUserWithId()
getUser()
