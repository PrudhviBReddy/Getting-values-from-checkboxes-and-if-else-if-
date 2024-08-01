import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    let loc = useLocation();
    console.log(loc);
  return (
    <div className='App'>
        <h2>HOME</h2>
        <h2>{loc && loc.state && loc.state.msg ? loc.state.msg : "ERROR"}</h2> 
    </div>
  )
}

export default Home