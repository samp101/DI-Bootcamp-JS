import logo from './logo.svg';
import './App.css';
import {useState, useEffect,createContext} from 'react'

import WeatherMainDisplay from './components/WeatherMainDisplay'
import Weather5DayForecast from './components/Weather5DayForecast'
import {connect} from 'react-redux'
import {Routes, Route, Link} from 'react-router-dom'
import Favourites from './components/Favourites';
import Nav from './components/Nav'
export const AppContext= createContext();


function App(props) {
  const styleCont = {
    width:'80vw',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
}
  return (
    <div style ={styleCont} >

        <AppContext.Provider value={{cityKey:props.citiesApi.cityKey}}>
          
          <Nav></Nav>
          
          <Routes>
              <Route path='/' element={ <WeatherMainDisplay/>}></Route>
              <Route path='/favourites' element={ <Favourites/> }></Route>
          </Routes>
       </AppContext.Provider>
          
    </div>
  );
}

const statePropsToState = (state)=>{
  return {
    citiesApi: state.cityName,
    weatherApi : state.cityWeather,
    forcast: state.forcast

  }
} 
const stateDispatchToProps = (dispatch)=>{
  return {
    
  }
} 

export default connect(statePropsToState,stateDispatchToProps)(App)
