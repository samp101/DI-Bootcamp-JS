import React, {Component} from 'react';
import Garage from './Garage';


const CarInfo = (props)=>{
    const {model} = props;

    return(
        <div>
            <h1>this car is a {model}</h1>
            <h1><Garage size='small' /> </h1>
        </div>
    )
}








export default CarInfo


