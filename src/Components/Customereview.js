import React from 'react'
import lab from '../assets/lab1.png'

function Customereview() {
  return (
   <>
    <div className='container'>
   <h2 style={{ color: "#AF2245" , fontSize: "40px" ,fontWeight : "600"}}>Customer Review</h2>  

   <div className='container owl-carousel'>
   
   <div className='item'>
          <p><i class="ri-double-quotes-l" style={{color:"grey",fontSize:"21px"}}></i>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          <i class="ri-double-quotes-r" style={{color:"grey",fontSize:"21px"}} ></i></p>
          <img src={lab}/> 
          <div className='ratings'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div>
          <h5 style={{color:"black",fontSize:"21px", fontWeight:"700"}}>Kaushik Kashyap</h5>
          <h6 style={{color:"black", fontWeight:"700"}}>User</h6>
    </div>
    <div className='item'>
          <p><i class="ri-double-quotes-l" style={{color:"grey",fontSize:"21px"}}></i>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          <i class="ri-double-quotes-r" style={{color:"grey",fontSize:"21px"}} ></i></p>
          <img src={lab}/> 
          <div className='ratings'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div>
          <h5 style={{color:"black",fontSize:"21px", fontWeight:"700"}}>Kaushik Kashyap</h5>
          <h6 style={{color:"black", fontWeight:"700"}}>User</h6>
    </div>
    <div className='item'>
          <p><i class="ri-double-quotes-l" style={{color:"grey",fontSize:"21px"}}></i>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          <i class="ri-double-quotes-r" style={{color:"grey",fontSize:"21px"}} ></i></p>
          <img src={lab}/> 
          <div className='ratings'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div>
          <h5 style={{color:"black",fontSize:"21px", fontWeight:"700"}}>Kaushik Kashyap</h5>
          <h6 style={{color:"black", fontWeight:"700"}}>User</h6>
    </div>
    
    
   

    


   </div>
   </div>
  
   </>
  )
}

export default Customereview



  //  <div className='item'>
  //         <p><i class="ri-double-quotes-l" style={{color:"grey",fontSize:"21px"}}></i>
  //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  //         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
  //         <i class="ri-double-quotes-r" style={{color:"grey",fontSize:"21px"}} ></i></p>
  //         <img src={lab}/>
  //         <div className='ratings'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div>
  //         <h5>Kaushik Kashyap</h5>
  //         <h6>User</h6>
  //       </div>
