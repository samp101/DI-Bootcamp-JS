import React from 'react'

class Phone extends React.Component{
    constructor(){
        super()
        this.state= {
            brand: "Samsung",
            model: "Galaxy S20",
            color: 'Black',
            year: 2020
        }
    }


    changeColor = ()=>{
    let colors = ['Red','Green','Yellow','Pink','Purple','Black']
    const colorLength = colors.length
    let randomNum = Math.floor(Math.random() * colorLength)
    if(this.state.color == colors[randomNum]){

        console.log(`${colors[randomNum]} has already been picked`);
        this.changeColor()
        
    }else(
            this.setState({color:colors[randomNum]})
    )
        }   

render(){
    const l = this.state.color
    const white = {p:{color:`white`}}
    console.log(l);
    return(
        <div style={{backgroundColor:`${this.state.color}`}}>
            {/* <h1>{Object.keys(this.state).map(e=>)} */}
            <h1 style = {white.p}>
                My Phone is {this.state.brand}
            </h1  >
                <p style={white.p}>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
                <button onClick={this.changeColor}>Change Color</button>
        </div>

        
    )
}
}
export default Phone