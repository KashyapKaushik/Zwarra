import React from 'react'
import lab from '../assets/lab1.png'
import abus from '../assets/abus.jpg'
import { Link } from 'react-router-dom'


function Aboutzwaara() {
  return (
    <>
    <div className='container-fluid aboutpage mt-5'>
      <div className='container'>
      <h1 style={{ color: "#AF2245" , fontSize: "40px" ,fontWeight : "600"}}>ABOUT ZWAARA</h1>
      </div>
      <div className='container aboutfield mt-3'>
        <div className='row mt-3'>
          <div className='col-lg-4 p-0' style={{border:"8px solid #AF2245" ,borderRadius:"12%"}}>
          <img src={abus} alt='imag' style={{width:"100%" , height:"100%" ,borderRadius:"10%"}}/>
          </div>
          <div className='col-lg-8 writingcontent'>
            <p>
            Welcome to Zwaara, your premier online platform dedicated to empowering doctors and healthcare professionals in managing their hospitals, clinics, and physiotherapy practices with ease and efficiency. At Zwaara, we understand the complexities and challenges faced by medical professionals in running their practices, and we strive to provide comprehensive solutions tailored to their needs.
            </p>
            <p>
            Our platform serves as a centralized hub for doctors, offering a range of features and tools designed to streamline administrative tasks, enhance patient care, and optimize workflow processes. Whether you're managing a small clinic or a large hospital, Zwaara equips you with the resources necessary to excel in today's dynamic healthcare landscape.
            </p>
            {/* <p>
            One of the key pillars of Zwaara is its intuitive hospital management system, which empowers healthcare providers to efficiently organize and oversee various aspects of their facilities. From appointment scheduling and patient records management to inventory tracking and billing, our robust system simplifies day-to-day operations, allowing doctors to focus more on delivering quality care to their patients.
            </p> */}
          </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 contdive'>
            <Link className='continue' to="/home">Continue</Link>

            </div>
        </div>


      </div>
    </div>
 
    </>
  )
}

export default Aboutzwaara
