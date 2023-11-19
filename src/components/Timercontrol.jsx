import React from 'react'

const Timercontrol = ({onStart, onStop}) => {
  return (
    <div className='timer-control'>
      <button onClick={onStart}>Iniciar</button>
      <button onClick={onStop}>Zerar</button>
    </div>
  )
}

export default Timercontrol