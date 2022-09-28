import React from 'react'
import './break.css'

const Break = ({restTime,setBreak}) => {
  return (
    <div>      
        <button onClick={()=>setBreak(restTime.time)} className='break-btn'>{restTime.time}m</button>
    </div>
  )
}

export default Break