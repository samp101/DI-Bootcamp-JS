import React from 'react'


class Color extends React.Component{
    constructor(){
        super()
        this.state = {
            favouriteColor:'Red', 
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor:'Yellow'})
        },5000);
    }
    changeToBlue = ()=>{
    this.setState({favouriteColor:'Blue'})
}

render(){
    return(
    <div>
        <h1>My Favourite Color is {this.state.favouriteColor}</h1>
    <button onClick={this.changeToBlue}>Change to Blue</button>
    </div>
    )
}
}
export default Color
