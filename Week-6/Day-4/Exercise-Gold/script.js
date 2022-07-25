let landscape = function() {

    let result = "";
//    Here I changed it to an an arrow function is this a nested afunction whihc they are asking for?
    let flat = (x)=>{
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
//    Here I changed it to an an arrow function is this a nested afunction whihc they are asking for?
    let mountain = (x) => {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
   }
   
   console.log(landscape())
//    ____/''''\____
let div;