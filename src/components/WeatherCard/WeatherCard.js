import React from 'react';

import './WeatherCard.css'
let arr = ['Segunda','Terça','Quarta' , 'Quinta', 'Sexta']
const WeatherCard = (props) => {
  let teste = arr.map((el)=>{
    return <p>{el}</p>
  })
  return(
    <div className="weather-card">
        <div className="header">
            <p className="city-name">{props.cidade}</p>
            <span>x</span>
        </div>
        <h3 className="weather-data">{props.clima}</h3>
        <div className="temperatures">
            <ion-icon name="arrow-down-outline"></ion-icon>
            <p className="bolder">{props.min}</p>
            <ion-icon name="arrow-up-outline"></ion-icon>
            <p className="bolder">{props.max}</p>
            <p className="bolder"><span className="lighter">Sensação:</span> {props.sensation}</p>
        </div>
        <div className="temperatures">
            <p className="bolder"><span className="lighter">Vento:</span> {props.wind}</p>
            <p><span className="lighter">Humidade:</span> {props.humidity}</p>
        </div>
        <hr></hr>
        <div className="days">
            {teste}
        </div>
    </div>
    )
  
}

export default WeatherCard;