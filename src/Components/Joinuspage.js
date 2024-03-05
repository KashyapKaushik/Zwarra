import React from 'react'

function Joinuspage() {
  return (

    <>
    <div className='container-fluid mt-5 joinpage' style={{backgroundColor:"#f7e9ec" ,paddingBottom:"1%",paddingTop:"6%"}}>
        <div className='joinimage' style={{marginLeft:"10%"}}>
            <img src={'../images/join-left.svg'}/>
        </div>
        <div className='formpart' style={{marginRight:"13%",marginTop:"3%"}}>
        <h5 style={{ color: "#AF2245" , fontSize: "20px" ,fontWeight : "600" }}>Newsletter</h5>
        <h3>JOIN US</h3>
        <h5>Subscribe to our newsletter for new updates and medcial information</h5>
        <form>
            <input type="text" placeholder='Your Email' style={{width:"68%",height:"40px",paddingLeft:"19px",fontSize:"20px",border:"none"}}/>
            <a className='subs' href="#">SUBSCRIBE</a>
            
        </form>
        </div>

    </div>
    </>
  )
}

export default Joinuspage
