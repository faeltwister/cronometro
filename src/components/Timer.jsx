import React from 'react'
import Timerdisplay from './Timerdisplay'
import Timercontrol from './Timercontrol'
import Timerlist from './Timerlist'
// css
import './timer.css'

const Timer = () => {
  return (
    <div className='timer-container'>
        <Timerdisplay/>
        <Timercontrol/>
        <Timerlist/>
    </div>
  )
}

export default Timer