

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

const buttonIncludingSpace  = document.querySelector('buttonIncludingSpac')
const buttonNotIncludingSpace = document.querySelector('buttonNotIncludingSpac')
const buttonNumberOfWords = document.querySelector('buttonNumberOfWord')
const buttonLikes = document.querySelector('buttonLike')


const buttonGenerater = document.querySelector('#generate') 
const quoteTag = document.querySelector('#quote-element') 
const authorTag = document.querySelector('#author-element') 
const newAuthorInput = document.querySelector('#newAuthor') 
const NewQuote = document.querySelector('#newQuote')
const submitNewQuote = document.querySelector('#submit-new-quote') 

let quotesArrayLength = quotes.length
const form = document.querySelector('#form')


buttonGenerater.addEventListener('click', generateQuote)

let previousSelectedNumber;

function generateQuote(){

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
    pTagIncludingSpace.innerHTML = quotes[previousSelectedNumber].quote.length
    
}
function displayNumCharachterNOTIncludingSpace(){
    let quoteWithOutSpace = quotes[previousSelectedNumber].quote.split(' ')
     return pTagNotIncludingSpace.innerHTML = quoteWithOutSpace.join('').length

}

function numOfWords(){
    console.log(quotes[previousSelectedNumber].quote.split(' '));
    pTagNumOfWord.innerHTML = quotes[previousSelectedNumber].quote.split(' ').length

}
function numOfLikes(){
     pTagLikes.innerHTML = quotes[previousSelectedNumber].likes +=1
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

