let small = document.getElementById('animate')

// I had a few issues with this exercise I wasnt able to get the 
// clearInterval working based on a clear button since the initial setInterval method was inside the myMove function.
// Therefore limiting it to the myMove functions scope and not the cancelInt scope. Also I tried to put the cancelInt in to the myMove
// function itself but I wasnt able to call it since it in the my move function

// since setinterval is constantly repaeding itself therefore if the clearInterval is called it will change the global cancel variable and stopping the myMOve function
let cancel = false;
// I made this global incase the clearInt function is called then the box will remain in its position once the myMove() is called again 
let pos = 0
let functionRunning = false

let myMove = ()=>{
    if(functionRunning){
        return
    }
    functionRunning = true

    let inte = setInterval(()=>{
        if(cancel == true){
            cancel = false
            functionRunning = false
            return clearInterval(inte)
        }
    if(pos == 325 ){
        clearInterval(inte)
        let back = setInterval(()=>{
            if(cancel == true){
                cancel = false
                functionRunning = false
                clearInterval(back)
                c()
            }
            if(pos == 0){
                // I had to add this in because I didnt want the code to run numerous if else statements but with out
                // adding "small.style.left = pos + 'px'" then pos would be subracted one more time because line 34 so
                //  when pos reached to 0 reached it makes the left propery == 0px and then returns the function inorder to run pos-= 25  
                small.style.left = pos + 'px'
                functionRunning = false
                // I have a bug here. If the user clicks the click me  button calling the myMove function it wont continue subtracting pos rather it will increase it from the beggingn of the function. for antoher time lol!
               return clearInterval(back)
            }
            small.style.left = pos + 'px'
            pos-=25
        },100)
    }
    console.log(pos)
    pos+=25
    small.style.left = pos + 'px'
},100) 
}

let cancelInt = () =>{
     cancel = true 
    
}

// let c = () => setInterval(()=>{
//     small.style.left = pos + 'px'
//     pos+=25
// },200)

// let d = () => clearInterval(c)

// let e = () => setInterval(()=>{
//     small.style.left = pos + 'px'
//     pos-=25
// },200)