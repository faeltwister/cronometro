import React, { useEffect, useState } from 'react'
import Timerdisplay from './Timerdisplay'
import Timercontrol from './Timercontrol'
import Timerlist from './Timerlist'
// css
import './timer.css'

const Timer = () => {
  const [millisecond, setMillisecond] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [laps,setLaps] = useState([])

  // formatar o tempo

  const formatimer = ()=>{
    const minutes = ("0" + Math.floor(millisecond / 60000) % 60).slice(-2)
    const seconds = ("0" + Math.floor(millisecond / 1000) % 60).slice(-2)
    const contSeconds = ("0" + Math.floor(millisecond / 10) % 60).slice(-2)
    
    return `${minutes} : ${seconds} : ${contSeconds}`
  }

  const startTime = (interval) =>{
    return setInterval(() => {
      setMillisecond(prevMillisecond => prevMillisecond +10)
    }, 10);
  }

  const stopTimer = (interval)=>{
    clearInterval(interval)
    return interval ;
  }

  useEffect(()=>{
    let interval = null
    if(timerOn){
      interval = startTime(interval)
    }else{
      interval = stopTimer(interval)
    }

    return () => stopTimer(interval)
  },[timerOn])

  return (
    <div className='timer-container'>
        <Timerdisplay time={formatimer()}/>
        <Timercontrol onStart={()=>setTimerOn(true)} onStop={()=>setTimerOn(false)}/>
        <Timerlist/>
    </div>
  )
}

export default Timer