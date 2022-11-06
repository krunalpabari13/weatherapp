import React from 'react'
import './App.css'
export default function Card(props) {
  let time=new Date().getHours();
  return (
    <>

<div className="card1 mx-4 my-4">
  <div style={{position:"relative"}}>
  <img src="greenlandscape.jpg" className='img-fluid' alt="Avatar" style={{width:"100%",borderRadius:"5px 5px 0px 0px",position:"relative"}}>
  </img>
  <div className='nextweather'><strong>{props.temp.forecast.forecastday[0].hour[props.time].temp_c}&#176;C</strong></div>
  </div>

  <div className="container1 text-center">
    <h4><b  style={{color:"green"}}>{props.time }:00- {props.time+1}:00</b></h4>

  </div>
</div>
  </>
  )
}
