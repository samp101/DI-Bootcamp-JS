let td = document.querySelectorAll('td')

for (const iterator in td) {
    if(iterator%6==0||iterator%4==0 ){
        td[iterator].style.backgroundColor = 'red'
    }   
}
