import React from 'react'
import './App.css';
import Inputs from './components/Inputs';
import Gender from './components/Gender';
import Selection from './components/Selection';
import Allergies from './components/Allergies';
import Submit from './components/Submit';
import Userinfo from './components/Userinfo';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      fname:'',
      lname:'',
      age:'',
      gender:'',
      allergy:[
        {
          peanuts:false,
          lactose:false,
          egg:false,
        }
      ],
      destination:'',
    }
    }
  
  addToState = (e)=>{  
    this.setState({[e.target.name]:e.target.value})
      console.log(e.target.name)
  }
  addCheckedToState= (e) => {  
      const value = e.target.checked
      let clone = [...this.state.allergy]
      let search = e.target.value     
      clone[0][search] = value
      this.setState({[e.target.name]:clone})
      console.log(this.state.allergy[0]);
}


submit = (e)=>{
  this.clone2 = this.state
}  


render(){
  return (
    <div className="App">
      <header className="App-header">
        <Inputs addName={this.addToState}/>
        <Gender addToState={this.addToState}/>
        <Selection addToState={this.addToState}/>
        <Allergies addCheckedToState={this.addCheckedToState}/>
        <Submit submit={this.submit} />
        <Userinfo state={this.state}/>
        <hr></hr>

      </header>
    </div>
 )
}}
export default App;
