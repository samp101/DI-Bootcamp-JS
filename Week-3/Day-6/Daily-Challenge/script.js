

let n =6 
let star = ''

for (let index = 0; index < n; index++) {
    for (let j = 0 ; j<index+1; j++) {
        star += "*"
    }
    star += '\n'
    
}
console.log(star);

n = 6
star = ''

for (let index = 0; index < n; index++) {
    for (let j = 0 ; j<n-index; j++) {
        star += "*"
    }
    star += '\n'
    
}
console.log(star);

n = 6

star = ''

for (let index1 = 0; index1 < n; index1++) {
    for (let jj = 0 ; jj < index1+1; jj ++) {

            if(index1 == n-1 || jj == 0 || jj == index1){
                star += "*"
        }else{
                star += " "
        }
    }
    star += '\n'
    
}
console.log(star);

n = 6
star = ''

for (let index1 = 0; index1 < n; index1++) {
    for (let jj = 0 ; jj < n-index1; jj ++) {

            if(index1 == 0 || jj == 0 || jj == n-1-index1){
                star += "*"
        }else{
                star += " "
        }
    }
    star += '\n'
    
}
console.log(star);

n =7
star = ''

for (let index1 = 0; index1 < n; index1++) {
    for (let jj = 0 ; jj < index1+1; jj ++) {

            if(jj == 0 || jj == index1){
                star += "*"
        }else{
                star += " "
        }
    }
    star += '\n'
    
}
n=6

for (let index1 = 0; index1 < n; index1++) {
    for (let jj = 0 ; jj < n-index1; jj ++) {
        
        if(jj == 0 || jj == n-1-index1){
            star += "*"
        }else{
            star += " "
        }
    }
    star += '\n'
    
}
console.log(star);




// console.log(star);

let row; star; 
n=6
row = 1
star = 0

for(  row = 1; row <= n ;){
    if ( star< row ){
        document.write('* ')
        star++;
        continue
    }
    if(star == row){
        document.write('<br>');
        row++
        star = 0
    }

}
