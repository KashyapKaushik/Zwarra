import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'; // Importing icon from react-icons library
// import 'flag-icon-css/css/flag-icon.css'; // Importing flag-icon-css styles



const PhoneNumberForm = () => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to handle changes in the country code dropdown
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
    // e.preventDefault();
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
    <div className="container">
      <div className="row">
        <label className="col-12" htmlFor="phone-number">Phone Number</label>
        <div className="col-12 d-flex align-items-center">
          <div className="dropdown mr-2">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="countryCodeDropdown"
              onClick={toggleDropdown}
            >
              <span className={`flag-icon flag-icon-${countryCode ? countryCode.toLowerCase() : 'unknown'} mr-2`}></span> {/* Using country code to display flag */}
              {countryCode || 'Select Country Code'}
              <BsChevronDown className="ml-2" />
            </button>
            <div className={`dropdown-menu${dropdownOpen ? ' show' : ''}`} aria-labelledby="countryCodeDropdown">
              <button className="dropdown-item" onClick={() => handleCountryCodeChange({ target: { value: 'US' } })}>
                <span className="flag-icon flag-icon-us mr-2"></span> United States (+1)
              </button>
              <button className="dropdown-item" onClick={() => handleCountryCodeChange({ target: { value: 'GB' } })}>
                <span className="flag-icon flag-icon-gb mr-2"></span> United Kingdom (+44)
              </button>
              <button className="dropdown-item" onClick={() => handleCountryCodeChange({ target: { value: 'IN' } })}>
                <span className="flag-icon flag-icon-in mr-2"></span> India (+91)
              </button>
              {/* Add more options as needed */}
            </div>
          </div>
          <input
            type="tel"
            className="form-control"
            id="phone-number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberForm;
