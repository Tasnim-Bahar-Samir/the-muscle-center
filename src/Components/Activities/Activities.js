import React, { useEffect, useState } from 'react'
import ActivityDetails from '../Details/ActivityDetails'
import Exercises from '../Exercises/Exercises'
import './Activities.css'

const Activities = () => {
    const [activities,setActivities] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
  return (
    <div className='activity-container'>
        <div className='exercises'>
            {
                activities.map(activity => <Exercises activity = {activity} key ={activity.id}/>)
            }
         
        </div>
        <div className='activity-details'>
            <ActivityDetails/>
        </div>
    </div>
  )
}

export default Activities