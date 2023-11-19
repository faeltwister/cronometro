import React from 'react'
import Timerdisplay from './Timerdisplay'
import Timercontrol from './Timercontrol'
import Timerlist from './Timerlist'

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