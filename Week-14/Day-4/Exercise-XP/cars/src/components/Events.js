import React from "react";


class Events extends React.Component{
    constructor(){
        super()
        this.state={
            isToggleOn: true,
        }
    }
    

    clickMe = ()=>{
        alert('I was clicked')
    }

    enterKeyPressed = (e)=>{
        if(e.charCode === 13){
            alert('The enter key was pressed. Your input is: '+e.target.value)
            e.target.value = ''
    }}
    enterOn = ()=>{
        this.state.isToggleOn? this.setState({isToggleOn:false}) : this.setState({isToggleOn:true})
    console.log(this.state.isToggleOn);
    }
    
    render(){
    return (

    <div>
        <button onClick={this.clickMe}>Click Me</button>
        <input type='text' onKeyPress={this.enterKeyPressed}></input>

        <div >
            Exercise 9:
            <button onClick={this.enterOn}>{this.state.isToggleOn?'On':'Off'}</button>

        </div>
    </div>
        )}


}

export default Events