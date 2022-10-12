import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
        ], 
    }

  }


  addVote = (name)=>{
    const language = [...this.state.languages]
    language[name].votes++    
    this.setState({languages:language}) 
  }

  render(){  
  return (
    <div className="App">
     
      {
       this.state.languages.map((e,ind)=>{
        return( 
          <div>
           {e.votes} {e.name} <button onClick={()=>this.addVote(ind)}> Click to vote </button>
          </div>
        )}
      )}

      
    </div>
  );}
}

export default App;
