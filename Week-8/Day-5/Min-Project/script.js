
const weatherCard = document.querySelector('.weatherIcon')

xhr = new XMLHttpRequest()


let userInput = document.querySelector('#user-search')   
function load(e){
console.log(userInput);
userInput = userInput.value    
console.log(userInput);
    const apiKey = '6bc236fa8bd5e7e03f83fd8cea3eac74'

    xhr.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`)
    
    xhr.responseType = 'json'
    xhr.send()
    
}
xhr.onload = function(){
        // Storing the response in a Variable inorder the make it simplier
        const jsonFileResponse = xhr.response
        console.log(xhr.response);


        //Container for the card  
        let weatherCardContainer = document.createElement('div')
        weatherCardContainer.classList.add('weather-card')
        weatherCardContainer.setAttribute('id',jsonFileResponse.name)

        let infoCont = document.createElement('div')
        infoCont.classList.add('info-for-card')
        
        // To add intials of the country 
        let placeCont = document.createElement('div')
        placeCont.classList.add('city-country-cont')

        let countryIdName = document.createElement('span')
        countryIdName.classList.add('country')
        countryIdName.innerHTML = jsonFileResponse.sys.country
        
        // The city name + Country
        let cityName = document.createElement('p')
        cityName.classList.add('city-name')
        cityName.innerHTML = jsonFileResponse.name 

        placeCont.append(cityName,countryIdName)
        infoCont.append(placeCont)
        
        // What the temp an once I changed it to celsius through adding in th url &units=metric
        let tempContainer = document.createElement('div')
        tempContainer.classList.add('temp-cont')

        let tempCS = document.createElement('p')
        tempCS.classList.add('tempeture')

        let tempSpan = document.createElement('span')
        tempSpan.classList.add('celsius')
        tempSpan.innerHTML = '°C'
        // tempCS.style.display = 'block'
        tempCS.innerHTML = Math.round(jsonFileResponse.main.temp) 

        tempContainer.append(tempCS,tempSpan)
        infoCont.append(tempContainer)
        
        // The Icon of whats going on that day
        let img = document.createElement('img')
        img.classList.add('cardImg')
        img.src = `http://openweathermap.org/img/wn/${xhr.response.weather[0].icon}@2x.png`
        infoCont.append(img)
        
        // The description of whats the weather
        let weatherDescription = document.createElement('span')
        weatherDescription.classList.add('weather-description')
        weatherDescription.innerHTML = jsonFileResponse.weather[0].description
        infoCont.append(weatherDescription)

        weatherCardContainer.append(infoCont)
        weatherCard.append(weatherCardContainer)
        

}



// shimon Arush
// yehuda iszchaki  
