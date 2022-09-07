const cardsContainer = document.querySelector('.cards')

const allArrCards = []

let table = document.createElement('table')
function getAllCardFromStorage(){

    let arrKeys = Object.keys(localStorage)
    console.log(arrKeys);
    let arrLength = arrKeys.length
    console.log(arrLength);
    

    x = 0
    while (x < arrLength){
        let cardName = 'card'+x
        cardName = localStorage.getItem(arrKeys[x])
        cardName = JSON.parse(cardName)
        allArrCards.push(cardName)
        x++
    }

    function createTableWithDaysHeader(){
        let row = document.createElement('tr')
        const lengthOfTheWeek = 7
        
        const namesOfTheDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        for (let index = 0; index < lengthOfTheWeek; index++) {
            let th = document.createElement('th')
            th.innerHTML = namesOfTheDays[index]
            row.append(th)
        }
        table.append(row)
        // cardsContainer.append(table)
    }


    createTableWithDaysHeader()



    createTask()
}
function createTask() {
    allArrCards.forEach((e)=>{

        let startTimeAsDateFunction = new Date(e.taskStartTime)
        let finsihTimeAsDateFunction = new Date(e.taskFinishTime)
        

        const startsTimeNumberOfDayWeek = startTimeAsDateFunction.getDay() 
        const finishTimeNumberOfDayWeek = finsihTimeAsDateFunction.getDay() 
        
        const boxUntilTheEndOfTheWeek = 7-finishTimeNumberOfDayWeek
        
        const row = document.createElement('tr') 

        for (let index = 0; index < startsTimeNumberOfDayWeek ; index++) {
            let td = document.createElement('td')
            td.classList.add('box')
            row.append(td)
        }
        for (let index = startsTimeNumberOfDayWeek; index <= finishTimeNumberOfDayWeek ; index++) {
            let td = document.createElement('td')
            if(index == startsTimeNumberOfDayWeek || index == finishTimeNumberOfDayWeek){
                td.classList.add('ends')
            }
            td.classList.add('task')
            row.append(td)
        }
        for (let index = 1; index < boxUntilTheEndOfTheWeek; index++) {
            let td = document.createElement('td')
            td.classList.add('box')
            row.append(td)
            
        }
        
        let card = document.createElement('div')
        card.classList.add('card')

        table.append(row)
        cardsContainer.append(table)

        
    })

}

getAllCardFromStorage()

function getDay(date){
    // this will give me the date in a long form
    const day = new Date()
    return day.getDay()
}