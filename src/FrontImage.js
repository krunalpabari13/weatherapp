import React, { useState,useRef } from 'react'
import './App.css'

export default function FrontImage(props) {
    const [city,setCity]=useState("")  
    const reference=useRef(null);
     const handleclick=(e)=>{
      setCity(e.target.value)
      props.setQ(e.target.value);
      console.log(props.q)
     
      props.api();
      

    }

    let arr=["Ahmedabad","Baroda","Surat","Rajkot","Bhavnagar","Jamnagar","Gandhinagar","Gandhidham","junagadh","Navsari","Anand","Morbi","Nadiad","Surrendranagar","Bharuch","Mehsana","Bhuj","Porbandar","Palanpur","Valsad","Vapi","Gondal","Verval","Godhra","Patan","Dahod","Kalol","Botad","Amreli","Deesa","Jetpur"];
  
    return (
          <div className='box imageposition'>   
    <img src="bencheslandscape.jpg" ref={reference} className="img-fluid"/>
    <div className='text h6 '>Weatherify</div>
    <img src="map-location.png"   className='locationimage '/>
    <div className=' absolute'><strong>{props.temp.current.temp_c}&#176;&nbsp;C</strong> </div>
    <div className='sunriseset h6'><strong>Sunrise : {props.temp.forecast.forecastday[0].astro.sunrise}</strong></div> 
    <div className=' sunriseset  h6' style={{marginTop:"5%"}}><strong>Sunset &nbsp;: {props.temp.forecast.forecastday[0].astro.sunset}</strong></div>

    <div >
  <select className="location btn"  id="selectNumber" onChange={handleclick}>
    
    { 
      arr.map((element)=>
        <option value={element}>{element}</option>
        
      )
    }
  </select>
</div>
  </div>
  
  )
}

