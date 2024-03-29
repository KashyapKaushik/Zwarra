import React from 'react'
import logo from '../assets/logoo.png'
import { NavLink } from 'react-router-dom'
import Modal from './Model/Modal'

function Navbarz() {
  return (
    <>
    <div className="Navbar">
                    <a href="#" className="Navbar-brand">
                        <img className='logo' src={logo} alt="Zwaara Logo" /> 
                    </a>
                    <ul className="Navbar-nav">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/newabout">About Zwaara</NavLink></li>
                        <li><NavLink to="/join">Join As Provider</NavLink></li>
                        <li className='Dropdown'><a href="#">Get Care<i className="ri-arrow-drop-down-line"></i></a>
                        <div className="Dropdown-content">
                                <li><NavLink to="/individualp">CareIndividual</NavLink></li>
                                <li><NavLink to="/business">Carebussines</NavLink></li>        
                        </div>
                        </li>
                        <li className="Dropdown">
                            <button className="Dropbtn"><i className="ri-global-line"></i><i className="ri-arrow-drop-down-line"></i></button>
                            <div className="Dropdown-content">
                                {/* <li><a>English</a></li> */}
                                <li><a href="#">English</a></li>
                                <li><a href="#">Hindi</a></li>
                                <li><a href="#">French</a></li>
                                <li><a href="#">Gujrati</a></li>
                                <li><a href="#">Marathi</a></li>
                                <li><a href="#">Polish</a></li>
                                
                            </div>
                        </li>
                        <li><a className='logbtn' href="#" data-bs-toggle="modal" data-bs-target="#loginpopup">Login</a></li>
                        <Modal/>
                    </ul>
                </div>
    </>
  )
}

export default Navbarz
