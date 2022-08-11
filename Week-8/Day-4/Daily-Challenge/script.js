const gifContainer = document.querySelector('.gifs-container')
const UserInputForGif = document.querySelector('#user-search-result')


xhr = new XMLHttpRequest()

function createGif() {
    
    let UserInputForGifValue = UserInputForGif.value

    xhr.open('GET', `https://api.giphy.com/v1/gifs/random?&tag=${UserInputForGifValue}&rating=g&api_key=2Ub97pyuzJC53mHFJ8ckxVS1FtGwYbMw&limit=25`)
    
    xhr.responseType = 'json'

    xhr.send()

    xhr.onload = function(){
        // gifContainer.innerHTML = ''
        
        let objectLength = xhr.response.length
        // for (let index = 0; index < objectLength ; index++) {
            
            let objectResponseImage = xhr.response.data.images.original
            // let objectResponseImage = xhr.response.data.images.original.url
            console.log(xhr.response);
            console.log(objectResponseImage.url);
            
            
            
            
            let imgContainer = document.createElement('div')
            imgContainer.classList.add('flex', 'gifs-wrapper')
            let gifImage = document.createElement('img')
            gifImage.src = objectResponseImage.url
            gifImage.classList.add('gif')
            
            let deleteImage = document.createElement('img')
            deleteImage.classList.add('delete-gif')
            deleteImage.src = 'Fill-4.png'
            deleteImage.addEventListener('click',removeGif)


            imgContainer.append(gifImage,deleteImage)

            gifContainer.append(imgContainer)


        // }
        
    }
    
    function removeGif(){
        this.parentElement.remove();
    }}
    function removeAll() {
        let allGifs = document.querySelectorAll('.gifs-wrapper')
        if(allGifs !== null){
            allGifs.forEach(e => e.remove())
        }
        else{
            alert('There isnt any GIFS to delete!')
        }
        
    } 




// createGif()