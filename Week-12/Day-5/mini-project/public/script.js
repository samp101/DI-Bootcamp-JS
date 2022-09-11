const foodList = document.querySelector('#food-list')
const form = document.querySelector('form')
const inputFood = document.querySelector('#shopping-item')
const inputAmount = document.querySelector('#shopping-amount')

function preventDefault1(event){
    event.preventDefault()
    const item = inputFood.value
    const amount = inputAmount.value
    fetch('/list',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({
            item,
            amount
        })
    })
    .then(res=>{
        console.log(res);
        return res.json()})
    .then(data=>{
        foodList.innerHTML = '';

        const listKeys = Object.keys(data)

        listKeys.forEach(element => {
            const li = document.createElement('li');
            const list = document.createElement('h3');
            list.innerHTML = `${data[element].item} : ${data[element].amount}`;

            li.append(list)
            foodList.append(li)
            form.reset()

            
        })
    })
    .catch(e=>console.log(e))
    



}

