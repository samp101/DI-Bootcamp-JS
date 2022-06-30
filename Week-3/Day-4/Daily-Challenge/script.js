let sentence = "The movie is not that bad I like it"





let newArray = sentence.split(' ')
let wordNot = newArray.indexOf('not')
let wordBad = newArray.indexOf('bad')
let space = wordBad - wordNot + 1

if(wordNot<wordBad){
    newArray.splice(wordNot,space,'good,')
    document.getElementById('text').innerHTML =  newArray.join(' ') 
}


let wordNotStr = sentence.indexOf('not')
let wordBadStr = sentence.indexOf('bad')
if(wordNotStr<wordBadStr){
      let part1 = sentence.slice(0,wordNotStr)
      let part2 = sentence.slice(wordBadStr+4)
      let result = part1.concat('good '+ part2)
          document.getElementById('text2').innerHTML =  result
  }else{
        document.getElementById('text2').innerHTML = sentence   
}