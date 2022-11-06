import logo from './logo.svg';
import './App.css';
import FrontImage from './FrontImage';
import { useEffect, useState,useLayoutEffect } from 'react';
import Weatherdetails from './Weatherdetails';
import Card from './Card';
import Reactcarousel from './Reactcarousel';
  
function App() {
  const [state,setState]=useState(null)
  const [q,setQ]=useState("Rajkot");
  let data=null;
  
  let data1=null;
  const api=async ()=>{
    
     data=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9e99b696dbd641a9a93165809222910&q=${q}`);
     data1=await data.json();
     setState(data1)

    }
  useEffect(()=>{
    api();
  },[])
  return (
   <>

  { state && <FrontImage temp={state} setQ={setQ} api={api} q={q}/>}
  {state && <Weatherdetails temp={state}/>}
   
    <div className='container '>
    <div className='h1 text-center my-4' style={{color:"lightgreen"}}>Todays Weather</div>
      <div className="row  justify-content-center" style={{marginTop:"40px"}}>

 {state && <Reactcarousel state={state}></Reactcarousel>}
  </div>
  </div>
   </>
  );
}

export default App;
