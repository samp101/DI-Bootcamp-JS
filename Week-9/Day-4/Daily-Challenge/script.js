// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4c2c47e777msh3d602a9bb3bb371p134041jsnc1f25e35e718',
// 		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
// 	}
// };

// url1 = [
//     // 'https://alpha-vantage.p.rapidapi.com/query?to_currency=ILS&function=CURRENCY_EXCHANGE_RATE&from_currency=CAD',
//     // 'https://alpha-vantage.p.rapidapi.com/query?to_currency=ILS&function=CURRENCY_EXCHANGE_RATE&from_currency=USD',
//     // 'https://alpha-vantage.p.rapidapi.com/query?to_currency=ILS&function=CURRENCY_EXCHANGE_RATE&from_currency=EUR'
//     `https://www.swapi.tech/api/starships/5/`,
//      `https://www.swapi.tech/api/starships/3/`,
//     `https://www.swapi.tech/api/starships/9/`,
// ]

// const promise1 = Promise.resolve(3);
// const promise2 = fetch('https://www.swapi.tech/api/starships/5/')
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });


// Promise.all([promise1,promise2,promise3]).then((values)=> {
//     console.log(values);
// })

// EXERCISE 2

let c1Long  = document.querySelector('#c1-long')
let c1Lat = document.querySelector('#c1-lat')
let c2Long = document.querySelector('#c2-long')
let c2Lat = document.querySelector('#c2-lat')
const submit = document.querySelector('#submit')

const spanCollectionForSunriseTime = document.querySelectorAll('span')


submit.addEventListener("click", () => {

    // I just did it this way to save time You can use the other keys to get the values
    c1Long = 48.864716, c1Lat =2.349014
    c2Long = 31.7470, c2Lat =34.9881
    
    // c1Long  = c1Long.value,c1Lat  = c1Lat.value
    // c2Long = c2Long.value,c2Lat = c2Lat.value
    const url =[]
    
    url[0] = `http://api.sunrise-sunset.org/json?lat=${c1Long}=${c1Lat}`
    url[1] = `http://api.sunrise-sunset.org/json?lat=${c2Long}=${c2Lat}`
    
    Promise.all([fetch(url[0]),fetch(url[1])]).then(res => 
            res.forEach((items,index) =>{
                // inorder to clear the span if you check a differnt place
                spanCollectionForSunriseTime[index] = ''
                items.json()
                .then(data=>{ 
                     text = document.createTextNode(data.results.sunrise);
                     spanCollectionForSunriseTime[index].append(text)
                }
                )
            })
        )})
    
