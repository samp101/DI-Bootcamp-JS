

let tries = 0

function playTheGame() {

    let confirmGame = confirm('would you like to play the game')
    if(confirmGame){
        let userNum = prompt('Please enter a number between 1-10')
        if(userNum.match(/[a-z]/gi)){
            console.log(typeof userNum);
            return alert('Sorry Not a number, Goodbye')
        }else if(userNum.match(!/^[1-9]|10$/g)) {
            return  alert('You entered a number greate then 10')
        } else{
           let computerUser = Math.floor(Math.random()*1+1)
           alert('ok! The computer is picking!')
           
           compareNum(userNum,computerUser) 
           
        }

    }
    else{
        confirm('OK. Your loss')
    }
}

function compareNum(user1,user2){
     console.log(tries)
    if (tries==2){
        tries = 0 
        return alert('Im sorry your not allowed to pick again. You have already tried three times your out of here!')
    }
     if(user1==user2){
        alert('You win!')
        console.log(user1,user2)
        return tries = 0
    }
    user1>user2
    ? user1 = prompt('Your number is higher then the Bot try again!')
    : user1 = prompt('Your number is lower then the Bot try again!')
    tries++
    compareNum(user1,user2)
}

// function letsPlay(){
//     playTheGame()
//     return compareNum()

// }

