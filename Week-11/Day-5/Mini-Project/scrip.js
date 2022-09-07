const form = document.querySelector('form')
const inputName = document.querySelector('#input-name')
const inputDescription = document.querySelector('#input-description')
const inputStartTime = document.querySelector('#input-start-time')
const inputFinishTime = document.querySelector('#input-finish-time')
const inputSubmit = document.querySelector('#input-submit')
const cards = document.querySelector('.cards')

const globalArrayTasks= []
let card = 0 
inputSubmit.addEventListener('click',submitTask)

function submitTask(e) {
     e.preventDefault()

    let tasks = {
        taskName:inputName.value,
        taskDescription:inputDescription.value,
        taskStartTime:inputStartTime.value,
        taskFinishTime:inputFinishTime.value,
        taskStatus: false 
    }
    card++
    // globalArrayTasks.push(tasks)
    let myJSON = JSON.stringify(tasks)
    localStorage.setItem('card-'+card,myJSON)
    
    return false
}
