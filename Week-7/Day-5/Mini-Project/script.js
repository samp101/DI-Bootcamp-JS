const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


    
const containerOfAllCards =  document.querySelector('#container-for-the-cards')
const section =  document.querySelector('#main')
const form =  document.querySelector('form')
const inputToFindRobo =  document.querySelector('#robo-input')


function createCard(robotsArr){


    robotsArr.forEach(element => {

    let cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    
    let roboImg = document.createElement('img')
    roboImg.classList.add('card-img-top')
    roboImg.src = element.image
    roboImg.alt = element.username
    
    let cardTextContainer = document.createElement('div')
    cardTextContainer.classList.add('card-body')
    
    
    let usernamePTag = document.createElement('p')
    usernamePTag.classList.add('card-text')
    usernamePTag.textContent = element.username

    let emailPTag = document.createElement('p')
    emailPTag.textContent = element.email 
    emailPTag.classList.add('card-text')

    cardTextContainer.append(usernamePTag,emailPTag)
    cardContainer.append(roboImg,cardTextContainer)
    containerOfAllCards.append(cardContainer)
});

}

form.addEventListener('submit',function addNewQuote(e){
    e.preventDefault()
    
    userInput = inputToFindRobo.value
    console.log(userInput);
    if(userInput == ''){
        return createCard(robots)   
    }
    let newSearch = robots.filter((e,ind)=> e.username.includes(userInput) )
    console.log(newSearch);
    containerOfAllCards.innerHTML = ''
    createCard(newSearch)
})




createCard(robots)
