
import React from 'react'
import './Question.css'
const Questions = () => {
    
  return (
    <div>
        <h2 id='question' style={{marginTop:'60px',textAlign:'center', color:'tomato'}}>Impotant questions</h2>
        <div className='question'>
            <h4>How does React work?</h4>
            <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
        </div>
        <div className='question'>
            <h4>What are the differences between props and state?</h4>
            <p>
                1.Props is a way to pass data from parent components to child components, State is an object that is used to contain data about the component. <br />

                2.Props are readonly, But state can be changes asynchronous. <br />
                3.Props are immutable, State is mutable.
                4. Props make components reusable, State can't make components reusable.
            </p>
        </div>
        <div className='question'>
            <h4>What are the use cases of use effect hook?</h4>
            <p>Running once on mount: fetch API data.
                    Running on state change: validating input field.
                    Running on state change: live filtering.
                    Running on state change: trigger animation on new array value.
                    Running on props change: update paragraph list on fetched API data update.</p>
        </div>
    </div>
  )
}

export default Questions