
// In order to iterate over eveything I stored all the planet in a array object
// I also stored each planet in an object inorder to save certain values to the planet like the color and the it has moons 
planet = [
    {Mars: ['red','Deimos','Phobos']},
    {Earth:['blue','Moon']},
    {Jupiter:['green', 'Amalthea', 'Callisto', 'Europa','Ganymede','Io']},
    {Neptune:['pink','Nereid','Triton']},
    {Saturn:['orange','Dione','Enceladus','Hyperion']},
]

let planetContainer = document.getElementById('planet-container')


// Here I am using a forEach loop which will iterate over the planet array
planet.forEach((element) => {

    // I defined KeyPlanetName variable inorder to be able to access the planet object which is inside the planet Array
    // For example on the first time the planet.forEach is ran the first index ([0]) will be the planet array first value which in this case 
    // is an object which key is mars and its value is an array
    // So every time the forEach is ran I have stored the string of the objects key in a variable which is the planets name;
    // Just a heads up. the Object.Keys() method will return an array of the objects keys so I want to access the key as a string so I select its first (and only value)
    // to get the objects key as a string
    let KeyPlanetName = Object.keys(element)[0]

    // I then create a div which the Id will be keyPlanetName and it will have a class for called planet
    let planet = document.createElement('div')
    planet.setAttribute('class','planet')
    planet.setAttribute('id', KeyPlanetName)

    // I then access the object of KeyPlanetName and I access its first value in its array which will be the color of the planet 
    planet.style.backgroundColor = element[KeyPlanetName][0]

    // I then use the name of the key and I created a textnode inorder use it as the div planets html text
    let planetName = document.createTextNode(KeyPlanetName)
    //  Here I am appending the Node
    planet.append(planetName)
    
    // I wanted to organize the moons nicely so I created A element as a div inorder to store all the moons inside
    let moonContainer = document.createElement('div')
    moonContainer.setAttribute('class','moonContainer') 
    

    // I wanted to continue and add all the moons to each planet div which were a value of an array which were the value of the object keys so since I am looping
    // through the planet array and I stored the moons as an array in objects value I created another foreach loop.
    element[KeyPlanetName].forEach((element,ind) => {
        // I also made the color to be the arrays first value therefore I ust want the moons So I created an if statement inorder to start the loop on the first index
        // (the second value)
        if(ind>0){
            // I am creating a element to be the moon and giving it a class of moon and giving it an ID as the value of the array (element)
            let moon = document.createElement('div')
            moon.setAttribute('class','moon')
            moon.setAttribute('id', element)
            // I create a textnode of the value of the array which is the moons name and I will append the to the moon div append that to the moonContainer
            let moonName = document.createTextNode(element)
            moon.append(moonName)
            moonContainer.append(moon)
        }
        
        
    });
    // I the append the moon container with all the moons to the original planet div and then I append the planet to the planet container
    planet.append(moonContainer)
    planetContainer.append(planet)


   });

