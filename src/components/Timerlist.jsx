import React from 'react'

const Timerlist = ({laps}) => {
  return (
    <div className='timer-laps'>
        <h3>Registro:</h3>
        <ul>
          {laps.map((lap,index)=>(
              <li key={index}>{lap}</li>
          ))}
        </ul>
    </div>
  )
}

export default Timerlist