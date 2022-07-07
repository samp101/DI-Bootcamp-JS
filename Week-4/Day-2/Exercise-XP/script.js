// E1
// function infoAboutMe(){
//     alert(`My name is Shmuel Posner I am 28 and I like to swim`)
// }
// infoAboutMe()

// let infoAboutPerson = (name,age,color) => console.log(`my name is ${name}. I am ${age} years old. My favourite color is ${color}`)

// infoAboutPerson('shmuel',28,'blue')
// infoAboutPerson('fan',48,'blue')
// // E2

// function calcTip(){
//      user = Number(prompt('please enter the bill')); 
//      if(!isNaN(user)){
//         let tip;     
//         if(user<=50 ){
//             tip= user*1.2 
//         }else if(user<200){
//           tip = user*1.15 ;
//         }else{
//             tip = user*1.1
//         }
     
//      return console.log(`Your total bill include a tip is ${Number(tip.toFixed(2))}`)
     
//     }
//     }
//     // calcTip()
//     // calcTip()
//     // calcTip()

// // E3
// function NumIsDivis(num,range){
//     let num23 = 0
//     if(!isNaN(num)){
//         for (let index = 0; index <= range; index++) {
//             index % num == 0 ? (console.log(index), num23 += index) : index
//             }   
//         }
//         return num23
//     }


// console.log(NumIsDivis(23,500))

// E4

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shopingList = ['banana','orange','apple','a','banana']

function myBill() {
// I got this answer from my teacher but I didnt understand in class until I watched the video over. and went through it slowly so I will explain his steps so it will be my work then.
   
// I will first declare a variable inorder to store the prices of my product
   let total = 0
//    Here I declare a function expression inorder that whatever argument will be passed through it will
//    checked in the first object of stock if the parameter is in the object stock then I will get the
//    price from the prices object and add that to the total variable.
//    In the Event the argument is not found in the Stock object the expression will return undifined.
//    A boolean of Undefined is False so we will make the total variable go up by 0 (not affecting the price)

   let price = elem => total += stock[elem] ? (prices[elem]):0
   
// Now what should this parameter of elem be? The teacher then used a forEach loop
// which takes each element from the given array and will apply whatever elemtn to the price function
//  so in this example we have the price function expression which will use the given argument from the forEach loop of shoppingList
//  and this will check every element in in the array and apply it to the price function and that will either add the price or add 0 to the total variable   
   shopingList.forEach(price)
   
// This I Did Myself that If something which is in the shopping list is in stock then It will stubract one from the stock.
// If it wont be in the shopping list then It wont do anything
   let minusStocks = elem => stock[elem] ? stock[elem] = stock[elem]-1 : elem
   shopingList.forEach(minusStocks)

   return total
}

console.log(myBill())
console.log(stock)
// E5

// function enoughMon(itemPrice,[quarter = 0, dime=0, nickel = 0, penny = 0]){
    
//     // Love to hear of a better way of doing this
//     let newQuarter = quarter*.25
//     let newDime = dime*.1
//     let newNickel = nickel*.05
//     let newPenny = penny*.01
//     let newWallet = [newQuarter,newDime,newNickel,newPenny]
    
//     let sum = newWallet.reduce((e1,e2) => e1 += e2,).toFixed(2)
    
//     return itemPrice>sum
//     ?false
//     :true


// }
// console.log(enoughMon(1,[2,4,4,5]))


// // E6

function hotelCost() {
    let totalHotel = 0;
    let nights = Number(prompt('How many nights would you like to stay?'))

    isNaN(nights)|| (nights==0)? (alert('You didnt enter a proper number'),hotelCost()):(totalHotel += nights*140, `The total cost before taxes for ${nights} nights is: $${totalHotel}`); // Makking amounOfDays equal Zero as a condition I take care of in the event the user enters 0, "", " ". Because Number('',' ') will equal 0 and I dont want the user to be able to enter 0
    return totalHotel
}

function planeRideCost() {
    let totalFlight = 0;
    let destination = prompt('Where are you traveling to?').toLowerCase()
    
    if(!(destination.match(/[a-z]/gi))){
        alert('You didnt enter a proper place')
        planeRideCost()
    } else if(destination == 'london') { 
        
        return totalFlight = 183 
    } else if(destination == 'paris') { 
        
        return totalFlight = 220
    }else { 
        // alert(`${destination.charAt(0).toUpperCase()}${destination.slice(1)}:$300`)
    
        return  totalFlight = 300
     }

}

function rentCarCost() {
    let amountOfDays = Number(prompt('How many days would you like to rent a car'))
    let totalCarRental = 0
    console.log(amountOfDays)
    switch (true) {
        case isNaN(amountOfDays)|| amountOfDays==0: // Makking amounOfDays equal Zero as a condition I take care of in the event the user enters 0, "", " " 
            alert('An invalid value was entered')
            rentCarCost()
            break;
        case amountOfDays >=10 :
            totalCarRental = ((amountOfDays * 40))
            totalCarRental -= (amountOfDays *.05)    
            break;
        case amountOfDays<10 :
            totalCarRental = (amountOfDays * 40)    
            break;
    
        default:
            break;
    }
    return totalCarRental
}


function totalTripCost(){
    let total = 0
    
    total = planeRideCost() + hotelCost() + rentCarCost() 

    return total

}

// console.log(totalTripCost())






// E8