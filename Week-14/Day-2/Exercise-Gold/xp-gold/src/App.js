import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import celebrities from './Components/API';
import planets from './Components/Planets';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {celebrities.map((e,ind)=>{
        return(
          <div key ={ind} className="card m-5" style={{width: '30rem'}}>
              <img className="card-img-top" src={e.imageUrl} alt="Card image cap" />
              <div style = {{color:'black'}} className="card-body">
                  <h5  className="card-title">{e.title}</h5>
                  <p className="card-text">{e.description}</p>
                  <a href={e.buttonUrl} class="btn btn-primary">{e.buttonLabel}</a>
              </div>
          </div>
      )   
})}

        <ul class="list-group">
      {planets.map((e,ind)=>{
        return(
        <li key = {ind} class="list-group-item">{e}</li>
        )})}
      </ul>
        
     
      {/* </header> */}
    </div>
  );
}

export default App;
