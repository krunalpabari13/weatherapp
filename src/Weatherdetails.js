import React from 'react'
import './App.css'

export default function Weatherdetails(props) {
  return (
    <>
    <div className='h1 text-center my-4' style={{color:"lightgreen"}}>Weather Details</div>

    <div className='container d-flex  justify-content-center ' >
        <div >
        <div className='' style={{fontSize:"2vw"}}><b>Feels Like</b></div>
       
        <div className=' ' style={{color:"aqua",fontSize:"2vw"}}><strong>{props.temp.current.feelslike_c}&#176;C</strong></div>
        </div>

        <div style={{marginLeft:"10%"}}>
        <div className='' style={{fontSize:"2vw"}}><b>Visibility</b></div>
       
        <div className=' ' style={{color:"aqua",fontSize:"2vw"}}><strong>{props.temp.current.vis_km}km</strong></div>
        </div>

        <div style={{marginLeft:"10%"}}>
        <div className='' style={{fontSize:"2vw"}}><b>UV</b></div>
       
        <div className=' ' style={{color:"aqua",fontSize:"2vw"}}><strong>{props.temp.current.uv}</strong></div>
        </div>

        <div style={{marginLeft:"10%"}}>
        <div className='' style={{fontSize:"2vw"}}><b>Humidity</b></div>
       
        <div className=' ' style={{color:"aqua",fontSize:"2vw"}}><strong>{props.temp.current.humidity}</strong></div>
        </div>
    </div>
    </>
      )
}
