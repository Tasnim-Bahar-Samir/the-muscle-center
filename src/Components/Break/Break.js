import React from 'react'
import './break.css'

const Break = ({restTime}) => {
  return (
    <div>      
        <button className='break-btn'>{restTime.time}m</button>
    </div>
  )
}

export default Break