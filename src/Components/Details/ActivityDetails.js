import React, { useState } from 'react'
import './details.css'
import user from '../../image/img-1.png'
import Break from '../Break/Break';
const ActivityDetails = ({cart}) => {
    const breakTime = [
        {time:10},
        {time:20},
        {time:30},
        {time:30},
        {time:40},
    ];

    let exerciseTime = 0;
    for(const item of cart){
        exerciseTime += item.time;
    }
    
    const [breakPeriod,setBreackPeriod] = useState(breakTime)
  return (
    <div>
        <div className='user-details'>
            <img src={user} alt="" />
            <span>MD Samir</span>
        </div>
        <div className='physical-details'>
            <div>
                <p><b>56</b>kg</p>
                <p>Weight</p>
            </div>
            <div>
                <p><b>6.0</b></p>
                <p>Height</p>
            </div>
            <div>
                <p><b>21</b>y</p>
                <p>Age</p>
            </div>
        </div>

    <div>
        <h4>Add A Break</h4>
        <div className='break-time'>
            {
                breakPeriod.map(rest => <Break restTime={rest}/>)
            }
        </div>

    </div>
        <div>                
            <h4>Exercise Details</h4>
            <h5 className='common'><span>Exersice time</span> <span>{exerciseTime}minutes</span></h5>
            <h5 className='common'><span>Break time</span>  <span></span></h5>
        </div>
    </div>
  )
}

export default ActivityDetails