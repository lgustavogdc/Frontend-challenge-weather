import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar'
import Capitals from './components/Capitals/Capitals'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { getWeatherData} from './services/api'


function App() {
  const [weatherData, setWeatherData] = useState({})
  //setWeatherData(/*getWeatherData('location=Vitoria da Conquista,BA')*/)
  //  useEffect(()=>{
  //    setWeatherData(getWeatherData('location=Vitoria da Conquista,BA'))
  //    console.log(weatherData)
  //    //document.title = `A cidade é ${weatherData.location.city}`
  //  },[])
 
  return (
    <div className="App">
      <h1 className="App-title">Previsão do tempo</h1>
        <WeatherCard 
        cidade={"Vitoria da Conquista, BA - Brasil"} 
        clima="20º C Nublado"  
        min="16Cº" 
        max="25Cº" 
        sensation="19Cº" 
        wind="70km/h" 
        humidity="89%"/>
      <Searchbar />
      <Capitals />
      <button onClick={()=>setWeatherData(getWeatherData('location=Vitoria da Conquista,BA'))}>Hello, boy</button>
    </div>
  );
}

export default App;
