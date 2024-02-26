import React from 'react'
import lab from '../assets/lab1.png'

function Cards(props) {
  return (
    <>
       <div className='cards col-12 col-md-3 col-lg-3 p-0' key={props.id}>
          <img src={props.image}/>
          <h5>{props.title}</h5>
       </div>
    
    </>
  )
}

export default Cards
