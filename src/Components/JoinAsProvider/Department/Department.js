import React from 'react'
import './Department.css'
import im1 from '../../../assets/Joinaspovider/join-sanar-mob.png'
import im4 from '../../../assets/Joinaspovider/sanar-down-desk.png'
import im2 from '../../../assets/Joinaspovider/app-store.svg'
import im3 from '../../../assets/Joinaspovider/play-store.svg'
import im5 from '../../../assets/Joinaspovider/serviceproviderbg.svg'
import { Link } from 'react-router-dom'


import { useState } from 'react'


function Department() {

    const [showImage, setShowImage] = useState(im1); // Initial image to be displayed

    const [newshowImage, setNewShowImage] =useState (im3);
    const handleNewBtnClick = (nimage) => {
        setNewShowImage(nimage)
    };
    const [new1showImage, setNew1ShowImage] =useState (im2);
    const handleNewBtnClick1 = (n1image) => {
        setNewShowImage(n1image)
    };

    // Function to handle button click
    const handleButtonClick = (image) => {
      setShowImage(image);
    };
  return (
    <>
    <div className='container mt-5'>
        <div className='row newdpartment'>
            <div className='col-4 p-0'>
                <h5>Many virtual clinics in different departments, 24+ E-clinics.</h5>
                <span>Join now as a general practitioner, specialist, or consultant with any of the subspecialties and provide your consultations remotely.</span>

            </div>
            <div className='col-8 p-0 optionpart'>
                <div className='differentdep'>
                    <ul className='option1 p-0'>
                        <li>
                        <i class="icon-checked"></i>
                        Instant Consultation
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        General Medicine
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Family Medicine
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Psychiatry
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Psychology
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Pediatrics
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Obstetrics and Gynecology
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Dermatology & Plastic Surgery
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Ear Nose Throat (ENT)
                        </li>
                    </ul>  
                    <a href=''>And more clinilc...</a> 
                    <Link to='/joinin'>
                    <a className='taggs newtag' href=''> Join as doctor<i class="icon-arrow-right"></i></a>  </Link>     
                </div>

            </div>

        </div>
        <div className='row newdpartment' style={{marginTop:"70px"}}>
            <div className='col-4 p-0'>
                <h5>Many integrated medical servicesin different fields</h5>
                <span>Home visit - home medical services - video consultations</span>

            </div>
            <div className='col-8 p-0 optionpart' >
                <div className='differentdep'>
                    <ul className='option1 p-0'>
                        <li>
                        <i class="icon-checked"></i>
                        Virtual Consultations
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Laboratory
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Home visit Doctor
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Nurse visit
                        </li>
                        <li>
                        <i class="icon-checked"></i>
                        Vitamin IV Drips
                        </li>
                        
                    </ul>  
                    <a href=''>And more clinilc...</a> 
                    <Link to='/joinin'>
                    <a className='taggs newtag' href=''> Join as services provider<i class="icon-arrow-right"></i></a></Link>  
                </div>

            </div>

        </div>
        <div className='row downloadpart' style={{marginTop:"100px"}}>
            <div className='col-6 dpart1'>
                <h2>Download Zwaara Pro</h2>
                <div className='dbutton'>
                    <button onClick={() => (handleButtonClick(im1),handleNewBtnClick(im2),handleNewBtnClick1(im2))}>Application Download</button>
                    <button onClick={() => (handleButtonClick(im4),handleNewBtnClick(im3),handleNewBtnClick1(im3))}>Desktop Download</button>
                </div>
                <div className='playstore'>
                    <img src={newshowImage} />
                    <img src={new1showImage} />
                </div>

            </div>
            <div className='col-6 dpart2'>
                {/* <img src={im1}/> */}
                
                <img src={showImage} alt='Download Image' />

            </div>

        </div>
        <div className='joinsanarback' style={{marginTop:"100px"}}>
            <h2>Join Zwaara Now</h2>
            <p>To provide your medical services and enjoy innovative benefits</p>
            <button><i class="icon-welfare sa-pr10"></i>Request join as service provider</button>


        </div>

    </div>
    </>
  )
}

export default Department
