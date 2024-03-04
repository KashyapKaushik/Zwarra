import React from 'react'
import Cards from './Cards'


import lab from '../assets/lab1.png'
import Lhr from '../assets/laser hair removal at home.png'


import logo from '../assets/logoo.png'

function Ourservies() {
  const carddetail=[
    {id:1,photo:'../images/laboratory_icon.svg',title:"Laboratry"},
    {id:2,photo:'../images/home-visitor-icon.svg',title:"Home visit Doctor"},
    {id:3,photo:'../images/home-spa-icon.svg',title:"Nurse visit"},
    {id:4,photo:'../images/iv-drip.svg',title:"Vitmin IV Drips"},
    {id:5,photo:'../images/caregiver-icon.svg',title:"Vaccionation"},
    {id:6,photo:'../images/beuty-saloon-icon.svg',title:"Physiotherapist"},
    {id:7,photo:'../images/join-left.svg',title:"Radiology"},
    {id:8,photo:'../images/wellness-icon.svg',title:"Corporate Wellness"},
    
  ]

  const carddetail2=[
    {id:1,photo:'../images/beuty-saloon-icon.svg',title:"Beauty Salon"},
    {id:2,photo:Lhr, title:"Laser Hair Removal"},
    {id:3,photo:'../images/home-spa-icon.svg',title:"Home Spa"},
    {id:4,photo:'../images/iv-drip.svg',title:"Vitmin IV Drips"},
    // {id:5,photo:'../images/caregiver-icon.svg',title:"Vaccionation"},
    // {id:6,photo:'../images/beuty-saloon-icon.svg',title:"Physiotherapist"},
    // {id:7,photo:'../images/join-left.svg',title:"Radiology"},
    // {id:8,photo:'../images/wellness-icon.svg',title:"Corporate Wellness"},
    
  ]
    
  return (
    <>
    <div className='container' style={{marginTop :"90px"}}>
    <h2 style={{ color: "#AF2245" , fontSize: "40px" ,fontWeight : "600"}}>Our Services</h2>
    <div className='container'>
    <p style={{color: "#AF2245"  , fontSize: "20px" ,fontWeight : "600"}}>Medical</p>

      <div className='row '>
    {carddetail.map((ele) => {
      return <Cards id={ele.id} title={ele.title} image={ele.photo}/>
      //   <div className='cards col-lg-3 p-0' key={ele.id}>
      //     <img src={ele.photo}/>
      //     <h5>{ele.title}</h5>
      //  </div>    
    })}
    </div>
    </div>
    
    <div className='container '  style={{marginTop :"30px"}}>
    <p style={{color: "#AF2245"  , fontSize: "20px" ,fontWeight : "600"}}>Non-Medical</p>
      <div className='row '>
    {carddetail2.map((ele) => {
      return <Cards id={ele.id} title={ele.title} image={ele.photo}/>
      //   <div className='cards col-lg-3 p-0' key={ele.id}>
      //     <img src={ele.photo}/>
      //     <h5>{ele.title}</h5>
      //  </div>    
    })}
    </div>
    </div>

    </div>
    </>
  )
}

export default Ourservies
