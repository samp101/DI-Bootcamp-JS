import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {addition} from './reducers/action'
import Inputs from './components/Inputs';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Press A button & See what happens </h1>
        <Inputs/>

      </header>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    b: state.count
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    // handleAddition:(dispatch(addition()))

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
