
let wrapper = document.getElementById('container')
let clear = document.getElementById('clear')
let callFunction = ()=> alert('Hello World')

count = 0

let writeFunction = ()=> {
    let p = document.createElement('p')
    p.textContent = 'Hello World'
    wrapper.append(p)
    if(count == 4){
        clearIntervals()
    }
    count += 1
    
}

// setTimeout( callFunction,2000)
// setTimeout( writeFunction,2000)

let intervals = setInterval(writeFunction,1000)


let clearIntervals = () =>  clearInterval(intervals)

clear.addEventListener('click',clearIntervals)
