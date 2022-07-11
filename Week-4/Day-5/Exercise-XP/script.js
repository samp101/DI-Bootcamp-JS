
// E4

let books = [
    {
        title: 'Harry Potter',
        author: 'Jk Rowling',
        img: 'asa',
        alreadyRead: true ,

    },
    {
        title: 'Potter Harry',
        author: 'Jk Rowling',
        img: 'fdfd',
        alreadyRead:false,
    },
    {
        title: 'Shmuel Posner',
        author: 'shmuel',
        img: 'fdfd',
        alreadyRead:false,
    }
]

let bookList =  document.querySelector('.listBooks')

let createCard = (book) =>{
    
    let card = document.createElement('div')
    card.classList.add('card')
    let divImg = document.createElement('div')
    divImg.classList.add('imgCard')


    let image = document.createElement('img')
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/220px-Harry_Potter_wordmark.svg.png'
    image.alt = 'Harry Potter'
    image.style.width = '100px'
    divImg.append(image)

    let divCardInfo = document.createElement('div')
    divCardInfo.classList.add('card-info')

    let title = document.createElement('p')
    title.textContent = book.title
    let author = document.createElement('p')
    author.textContent = book.author

    divCardInfo.append(title,author)
    book.alreadyRead == true
    ?card.style.backgroundColor = 'red'
    :card.style.backgroundColor = 'green'
    

    card.append(divImg)
    card.append(divCardInfo)


    
    
    return bookList.append(card)``
     
}

books.forEach(createCard);
