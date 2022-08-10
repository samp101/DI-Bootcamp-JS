
const gifContainer = document.querySelector('.gifs-container')

xhr = new XMLHttpRequest()

function createGif() {
    
    xhr.open('GET', `https://api.giphy.com/v1/gifs/random?&rating=g&api_key=2Ub97pyuzJC53mHFJ8ckxVS1FtGwYbMw&limit=25`)
    
    xhr.responseType = 'json'

    xhr.send()

    xhr.onload = function(){
        // gifContainer.innerHTML = ''
        let objectResponseImage = xhr.response.data.images.original.url
        console.log(xhr.response);
        
            let gifImage = document.createElement('img')
            gifImage.src = objectResponseImage
            gifImage.classList.add('gif')

            gifContainer.append(gifImage)

    }
}
createGif()