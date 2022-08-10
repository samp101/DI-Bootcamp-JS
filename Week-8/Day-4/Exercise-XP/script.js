const gifs = document.querySelector('.GIF') 
const xhr = new XMLHttpRequest();

function aaa() {

    
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?&q=hilarious&rating=g&api_key=2Ub97pyuzJC53mHFJ8ckxVS1FtGwYbMw&limit=25");
    xhr.responseType = 'json';
    xhr.send()
    xhr.onload = function () {
        console.log(xhr.response)
        		
    // for (let index = 0; index < xhr.response.data.length; index++) {
    //     img = document.createElement('img')
    //     img.src = xhr.response.data[index].images.downsized.url
    //     gifs.append(img)
    // }    
    //     };
    }}
    

function sun() {

    
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?&q=sun&rating=g&api_key=2Ub97pyuzJC53mHFJ8ckxVS1FtGwYbMw&limit=10&offset=2");
    xhr.responseType = 'json';
    xhr.send()
    xhr.onload = function () {
        console.log(xhr.response)
        		
    // for (let index = 0; index < xhr.response.data.length; index++) {
    //     img = document.createElement('img')
    //     img.src = xhr.response.data[index].images.downsized.url
    //     gifs.append(img)
    // }    
    //     };
    }}



   