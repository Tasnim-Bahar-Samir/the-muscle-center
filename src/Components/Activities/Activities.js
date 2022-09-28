import React, { useEffect, useState } from 'react'
import ActivityDetails from '../Details/ActivityDetails'
import Exercises from '../Exercises/Exercises'
import './Activities.css'

const Activities = () => {
    const [activities,setActivities] = useState([])
    const[cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    const addToCart = (activity)=>{
        const newActivity = [...cart,activity]
        setCart(newActivity);
    }
  return (
    <div className='activity-container'>
        <div className='exercises'>
            {
                activities.map(activity => <Exercises activity = {activity} key ={activity.id} cartHandler = {addToCart}/>)
            }
         
        </div>
        <div className='activity-details'>
            <ActivityDetails cart ={cart}/>
        </div>
    </div>
  )
}

export default Activities