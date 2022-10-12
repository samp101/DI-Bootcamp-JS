import logo from './logo.svg';
import React from 'react';
import './App.css';
import CarInfo from './components/Cars';
import  CarColor from './components/CarColor'; 
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';

class App extends React.Component {
  constructor(){
    super()
    
  }
  
  render(){
  const carinfo = {name: "Ford", model: "Mustang"}
  return (
    <div>
      
        <div>
            < CarInfo model= {carinfo.model} />
          
        </div>
        <div>
          
          
            {/* < CarColor color= {this.state.color} model = {carinfo.model}  /> */}
            < CarColor model = {carinfo.model}   />
            
          </div>
          <Events/>
          <Phone/>
          <Color/>
        
    </div>
  )
}}

export default App;
