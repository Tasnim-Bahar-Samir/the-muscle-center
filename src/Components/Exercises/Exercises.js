import React from 'react'
import './Exercises.css'

const Exercises = (props) => {
    const {id,img,name,age,time} = props.activity
    
  return (
    <div className='exercise'>
        <img src={img} alt="" />
        <div className='exercise-details'>
            <p>Name:{name}</p>
            <p>For Age: {age}</p>
            <p>Time Required: {time}m</p>
            <button onClick={()=>props.cartHandler(props.activity)} className='cart-btn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Exercises