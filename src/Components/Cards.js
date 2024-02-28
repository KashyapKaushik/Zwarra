import React from 'react'
import lab from '../assets/lab1.png'

function Cards(props) {
  return (
    <>
       <div className='cards col-12 col-md-4 col-lg-3 p-0' key={props.id}>
          <div className='cardimage'>
          <img src={props.image}/>
          </div>
          <h5>{props.title}</h5>
       </div>
    
    </>
  )
}

export default Cards
