class Bird{
    constructor(){
        console.log('hello Im the parent one');
    }
}
class Flamigo extends Bird{
    constructor(){
        console.log('hello heyeyeh');
        super()
    }
}


const bird = new Flamigo()

// Since the Super function is a way to inherit from a parent class.
// If the super function is put after the constructor it will inherit everything after the constructor
// so the console.log() is being called beofer the log from the parent class