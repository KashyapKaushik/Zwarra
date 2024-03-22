import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import './RequestForm.css'
import PhoneNumberForm from '../../Checking/PhoneNumberForm';
import { Link } from 'react-router-dom';

function RequestForm() {

    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to handle changes in the country code dropdown
    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    // Function to handle changes in the phone number input
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    // Function to toggle the dropdown menu
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='container requestformpage'>
                    <div className='requestform'>
                        <h3>Provide my services via Sanar Request form </h3>
                        <p>We are pleased to cooperate with us in providing and facilitating access to your services Via Sanar platform</p>
                        <form className='reqforcontent'>
                            <div className='row' style={{ marginBottom: "20px" }}>
                                <div className='col-6' >
                                    <label>First Name</label><br />
                                    <input type='text' placeholder='First Name' />
                                </div>
                                <div className='col-6'>
                                    <label>Last Name</label><br />
                                    <input type='text' placeholder='Last Name' />
                                </div>

                            </div>

                            <div className='row' style={{ marginBottom: "20px" }}>
                                <label>Gender</label>

                                <div className='col-6 '>
                                    <div className='radiobtn'>
                                        <input type='radio' placeholder='First Name' name='gender' />
                                        <label>Male</label>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='radiobtn'>
                                        <input type='radio' placeholder='Last Name' name='gender' />
                                        <label>Female</label>
                                    </div>


                                </div>

                            </div>
                            <PhoneNumberForm />
                            <div className='row' style={{ marginBottom: "20px", marginTop: "20px" }}>
                                <div className='col-12'>
                                    <label>E-mail ID</label><br />
                                    <input type='text' placeholder='E-mail ID' />
                                </div>
                            </div>
                            <div className='row' style={{ marginBottom: "20px" }}>
                                <div className='col-6' >
                                    {/* <label>Country</label><br />
                                    <input type='text' placeholder='Select Country' /> */}
                                    <label>Country</label><br />
                                    <div>
                                        <select
                                            className="form-select"

                                        >
                                            <option value="">Select Country</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                        </select>

                                    </div>

                                </div>
                                <div className='col-6'>
                                    {/* <label>City</label><br />
                                    <input type='text' placeholder='Select City' /> */}
                                    <label>City</label><br />
                                    <div>
                                        <select
                                            className="form-select"

                                        >
                                            <option value="">Select City</option>
                                            <option value="USA">Dubai</option>
                                            <option value="UK">Mumbai</option>
                                            <option value="Canada">Newyork</option>
                                        </select>

                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ marginBottom: "20px" }}>
                                <div className='col-6' >
                                     <Link to='/joinin' style={{textDecoration:"none"}}>

                                    <div className='prevnextbtn'>
                                        <button><i class="ri-arrow-left-line"></i></button>
                                        <p>Previous</p>

                                    </div>
                                    </Link>


                                </div>
                                <div className='col-6'>
                                    <div className='prevnextbtn' >
                                        <p>Next</p>

                                        <button><i class="ri-arrow-right-line"></i></button>

                                    </div>
                                </div>

                            </div>

                        </form>

                    </div>


                </div>

            </div>
        </>

    )
}

export default RequestForm
