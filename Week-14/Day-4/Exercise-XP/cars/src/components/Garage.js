import React from "react";


class Garage extends React.Component{

    constructor(){
        super()
    }
    render(){
        const {size}= this.props    
        return (
            <div>
                Who lives in my {size} Garage?
            </div>
        )
    }
}



export default Garage