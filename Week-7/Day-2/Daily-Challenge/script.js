let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

function getCarHonda(inventory){ 
    let Honda = inventory.filter( e=> {
        return e.car_make=='Honda'
})
    return `This is a ${Honda[0].car_make} ${Honda[0].car_model} from ${Honda[0].car_year}.`
}
function getCarHondaUsingFind(inventory){ 
    let Honda = inventory.find( e=> {
        return e.car_make=='Honda'
})
    return `This is a ${Honda.car_make} ${Honda.car_model} from ${Honda.car_year}.`
}
console.log(getCarHonda(inventory));
console.log(getCarHondaUsingFind(inventory));


// E2
function sortCarInventoryByYear(carInventory){
  carInventory.sort((first,next) => first.car_year - next.car_year)    
}

sortCarInventoryByYear(inventory)
console.log(inventory);
