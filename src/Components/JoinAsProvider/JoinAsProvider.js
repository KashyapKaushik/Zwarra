import React from 'react'
import './JoinAsProvider.css'
import d1 from '../../assets/Joinaspovider/d1.jpeg'
import d2 from '../../assets/Joinaspovider/d2.jpg'
import d3 from '../../assets/Joinaspovider/d3.jpg'
import d4 from '../../assets/Joinaspovider/d4.jpg'
import d5 from '../../assets/Joinaspovider/d5.jpg'
import d6 from '../../assets/Joinaspovider/d6.jpg'
import AdvantagePart from './AdvantagePart/AdvantagePart'



function JoinAsProvider() {
  return (
    <>
    <div className='container-fluid'>
        <div className='header-img-content'>
            <h2>Participate in facilitating access to medical services in modern and flexible ways with sanar</h2>
            <div>
                <div className='client-img'>
                    <img src={d1} alt='img'/>
                    <img src={d2} alt='img'/>
                    <img src={d3} alt='img'/>
                    <img src={d4} alt='img'/>
                    <img src={d5} alt='img'/>
                    <img src={d6} alt='img'/>
                    <div>
                        <p>Trusted by over healthcare providers in the country</p>
                    </div>


                </div>
            </div>
        </div>
        <div className='container howtojoinpart'>
            <h2>How to join as a service provider</h2>
           <ul className='service-join-list'>
            <li>
            <i class="icon-report3 sa-icon-bg sa-icon-bg-lg mainicon"><small>1</small></i>
            <h5>fill form and Submit your data</h5>
            <i class="icon-arrow-right-thick"></i>
            </li>
            <li>
            <i class="icon-call-center-agent sa-icon-bg sa-icon-bg-lg mainicon"><small>2</small></i>
            <h5>Sanar team will Contact you</h5>
            <i class="icon-arrow-right-thick"></i>
            </li>
            <li>
            <i class="icon-correction sa-icon-bg sa-icon-bg-lg mainicon"><small>3</small></i>
            <h5>Start receiving orders more widely</h5>
            </li>
            </ul> 
        </div>
        <AdvantagePart/>
        

    </div>
    </>
  )
}

export default JoinAsProvider
