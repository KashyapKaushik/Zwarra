import React from 'react'
import logo from '../assets/logoo.png'

function Footerzwaara() {
    return (
        <>
            <div className='container-fluid footersw mt-5' >
                <div className='row' style={{padding:"60px 120px"}}>
                    <div className='col-5'>
                        <div className='logoiconpart'>
                        <img src={logo}  style={{backgroundColor:"white",alignItems:"center"}}/>
                        <div className='socialmed'>
                            <div id="fb"><i class="ri-facebook-fill"></i></div>
                            <div id="fb"><i class="ri-twitter-fill"></i></div>
                            <div id="fb"><i class="ri-linkedin-fill"></i></div>
                            <div id="fb"><i class="ri-vimeo-fill"></i></div>

                        </div>
                        </div>

                    </div>
                    <div className='col-7'>
                    <div className='row'>
                    <div className='col-4'>
                        <h5>COMPANY</h5>
                        <a href='#'>Home</a><br/>
                        <a href='#'>About</a><br/>
                        <a href='#'>Join as Provider</a><br/>
                        <a href='#'>Get Care</a><br/>
                        <a href='#'>Join Us</a><br/>

                    </div>
                    <div className='col-4'>
                    <h5>LABORATORY</h5>
                        <a href='#'>Genral Test</a><br/>
                        <a href='#'>Blood Test</a><br/>
                        <a href='#'>Urine Test</a><br/>
                        <a href='#'>DNA Test</a><br/>

                    </div>
                    <div className='col-4'>
                    <h5>CONTACT</h5>
                    <p className='m-0'>+923489934721</p>
                    <p className='m-0'>zwaraa@health.com</p>
                    <p className='p-0'>Riadh 2343,Saudi Arabia</p>

                    </div>
                    </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footerzwaara
