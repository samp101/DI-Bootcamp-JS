import React, {Component} from "react";

class CarColor extends Component{
    constructor(){
        super()
        this.state = {
            color:'red'
        }
    }
    render(){

        const {model} = this.props;
        return(
            <h1>this car is a msg {this.state.color} {model} </h1>
        )
    }
}

export default CarColor;
