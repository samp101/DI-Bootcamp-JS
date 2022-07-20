
winner = []
score = 0
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


gameInfo.forEach(element => {
    element['username'] = `${element['username']}!`
    console.log(element['username']); 
});
gameInfo.forEach(function(a) {if(a.score > 5) {winner.push(a.username)}})
gameInfo.forEach(a => score += a.score)

console.log(winner);
console.log(score);

