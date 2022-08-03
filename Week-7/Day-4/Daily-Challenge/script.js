class Video{
    constructor(title,uploader,time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch(){
        return  console.log(`${this.uploader} watched all ${Math.round(this.time/60)} minutes of ${this.title}!”`)
    }
}


const dan = new Video('The Ranger','Dan',4000)
const sam = new Video('The Sanger','Sam',3000)
const watch3 = new Video('The Sanger','Sam',3000)
const watch4 = new Video('The Sanger','Sam',3000)
const watch5 = new Video('The Sanger','Sam',3000)

let array = [
    {dan1: ['The Ranger 1','Dan1',1000]},
    {dan2: ['The Ranger 2','Dan2',2000]},
    {dan3: ['The Ranger 3','Dan3',3000]},
    {dan4: ['The Ranger 4','Dan4',4000]},
    {dan5: ['The Ranger 5','Dan5',5000]}
]

console.log(array[0].dan1[2]);

array.forEach((element,ind,arr) => {
  bob = 'new Video(movie,name1,time) = arr'
  arr[ind] = element[dan+ind] = [bob]
});



console.log(array);

// const sam = new Video() 
// an.watch()
// am.watch(