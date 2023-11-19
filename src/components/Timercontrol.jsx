import React from 'react'

const Timercontrol = ({onStart, onStop,timerOn, onReset, onLap}) => {
  return (
    <div className='timer-control'>
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onLap}>Marcar</button>}
      <button onClick={onReset}>Zerar</button>
      
    </div>
  )
}

export default Timercontrol