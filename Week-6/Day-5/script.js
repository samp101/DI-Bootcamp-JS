

const quotes = [
    {
        id:1,
        author:'שלמה המלך',
        quote: 'A righteous man falls down seven times and gets up.',
        source : 'Proverbs, 24:16',
        likes:0

    },

    {
        id:2,
        author:'Rav Noach Weinberg',
        quote:'People often avoid making decisions out of fear of making a mistake. Actually the failure to make decisions is one of life\'s biggest mistakes.',
        source : '',
        likes:0

    },

    {
        id:3,
        author:'Rebbetzin Dena Weinberg',
        quote:'There are no problems, only opportunities for growth.',
        source : '',
        likes:0
    }

]

const pTagIncludingSpace = document.querySelector('#includeSpace')
const pTagNotIncludingSpace = document.querySelector('#notIncludeSpace')
const pTagNumOfWord = document.querySelector('#numOfWords')
const pTagLikes = document.querySelector('#likes')

const pTagDisplayQuote = document.querySelector('#display-Quote')
const pTagDispalyAuthor = document.querySelector('#display-Author')


const inputFindAuthor = document.querySelector('#inputFindAuthor')

const buttonGenerater = document.querySelector('#generate') 
const quoteTag = document.querySelector('#quote-element') 
const authorTag = document.querySelector('#author-element') 
const newAuthorInput = document.querySelector('#newAuthor') 
const NewQuote = document.querySelector('#newQuote')
const submitNewQuote = document.querySelector('#submit-new-quote') 

let quotesArrayLength = quotes.length
const form = document.querySelector('#form')
const form2 = document.querySelector('#formFindAithor')


buttonGenerater.addEventListener('click', generateQuote)

let previousSelectedNumber;

function generateQuote(){
    pTagIncludingSpace.innerHTML = ''
    pTagNumOfWord.innerHTML = ''
    pTagNotIncludingSpace.innerHTML = ''
    pTagLikes.innerHTML = ''
    
    quoteTag.innerHTML = ''
    authorTag.innerHTML = ''

    
    randomNum = Math.floor(Math.random()* quotesArrayLength)

    if(randomNum == previousSelectedNumber){
        console.log(`New num: ${randomNum}, old Numb: ${previousSelectedNumber}`);
        generateQuote()
        quoteTag.innerHTML = ''
    authorTag.innerHTML = ''
    }
    previousSelectedNumber = randomNum
    quoteTag.textContent += quotes[randomNum].quote
    authorTag.innerHTML += quotes[randomNum].author

}
function displayNumCharachterIncludingSpace(){
    return pTagIncludingSpace.innerHTML = quotes[previousSelectedNumber].quote.length
    
}
function displayNumCharachterNOTIncludingSpace(){
    let quoteWithOutSpace = quotes[previousSelectedNumber].quote.split(' ')
     return pTagNotIncludingSpace.innerHTML = quoteWithOutSpace.join('').length

}

function numOfWords(){
    return pTagNumOfWord.innerHTML = quotes[previousSelectedNumber].quote.split(' ').length

}
function numOfLikes(){
    return pTagLikes.innerHTML = quotes[previousSelectedNumber].likes +=1
}
form.addEventListener('submit',addNewQuote)

function addNewQuote(e){
    e.preventDefault()
    if((/\w/gi).test(newAuthorInput.value,NewQuote.value)){
    const newObj = { 
        id: quotesArrayLength += 1,
        author: newAuthorInput.value,
        quote: NewQuote.value,
        likes:0
    }
    newAuthorInput.value =''
    NewQuote.value =''
    return quotes.push(newObj)
    }
}

form2.addEventListener('submit',addNewQuote)

function addNewQuote(e){
    // if
    // e.preventDefault()
    // if((/\w/gi).test(inputFindAuthor.value)){
    //     pTagDispalyAuthor.innerHTML = ''
    //     pTagDispalyQuote = ''
    // }
}

