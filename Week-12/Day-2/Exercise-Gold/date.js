function checkDiffBetweenDates(endDate){
    const start = new Date()
    const end = new Date(endDate)
    
    const dateDifference = end - start
    console.log(dateDifference.getMinutes());
    const days = dateDifference / (24 * 60 * 60 *1000)

    return `There are ${days.toFixed(2)} days till Jan 1 2023`
}

function birthday(bday){
    const birthday = new Date(bday)
    const today = new Date() 

    const min = today - birthday
    return min / (60) 



}
const start = '2023-01-01' 

module.exports = {
    checkDiffBetweenDates
}