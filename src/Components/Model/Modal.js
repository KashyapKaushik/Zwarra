// import React, { useState } from 'react';
// import './Modal.css';
// import { countriess } from '../Data/CountryData';

// function Modal() {
//     const [flag, setFlag] = useState('');
//     const [ctCode, setCtCode] = useState('+91');
//     const [ctName, setCtName] = useState('Select Name');
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleCountryClick = (country) => {
//         setFlag(country.flag);
//         setCtName(country.country);
//         setCtCode(country.phone_code);
//     };

//     const filteredCountries = countriess.filter(desh =>
//         desh.country.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <>
//             <div className="modal fade" id="loginpopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body">
//                             <button type="button" className="btn-close closebtn" data-bs-dismiss="modal" aria-label="Close"></button>
//                             <form>
//                                 <div className='newbody'>
//                                     <div className='selectcountrypart'>
//                                         <label>Country</label>
//                                         <div className='dropdown'>
//                                             <div className='dp' style={{ marginBottom: "0px" }}><img src={flag} height={30} width={30} />{ctName}</div>

//                                             <div className='dpcontent' style={{ paddingTop: "10px" }}>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Search Country"
//                                                 value={searchQuery}
//                                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                                 className="search-input"
//                                             />
//                                                 {filteredCountries.map((country, index) => (
//                                                     <div onClick={() => { handleCountryClick(country) }} key={index} style={{ marginBottom: "20px", marginLeft: "10px" }}>
//                                                         <img src={country.flag} height={30} width={30} />{country.country} {country.phone_code}</div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <div className='mnumbercontent'>
//                                             <div className='codepart'>({ctCode})</div>
//                                             <input type='text' placeholder='Mobile Number' />
//                                         </div>
//                                         <h6 style={{ margin: "15px 0px" }}>By clicking continue you agree to our <a id="clink">Terms & Conditions</a> and <a id="clink">Privacy Policy</a></h6>
//                                         <button className='btn btn-primary'>Continue</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Modal;

import React, { useState } from 'react'
import './Modal.css'
import { countriess } from '../Data/CountryData'


function Modal() {
    const [flag, setFlag] = useState('https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png');
    const [ctCode, setCtCode] = useState('+91')
    const [ctName, setCtName] = useState('Select Name');
    const [serach, setSearch] = useState('');
    console.log(serach)


    const handleCountryClick = (country) => {
        setFlag(country.flag);
        setCtName(country.country);
        setCtCode(country.phone_code);
    };

    // const countriess = [
    //     {
    //         name: "India",
    //         flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png",
    //         code: "+91",
    //       },
    //       {
    //         name: "United States",
    //         flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png",
    //         code: "+1",
    //       },
    //       {
    //         name: "United Kingdom",
    //         flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png",
    //         code: "+44",
    //       },
    // ];
    return (
        <>
            <div class="modal fade" id="loginpopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="btn-close closebtn" data-bs-dismiss="modal" aria-label="Close"></button>
                            <form>
                                <div className='newbody'>
                                    <div className='selectcountrypart'>
                                        <label>Country</label>
                                        <div className='dropdown'>
                                            <div className='dp' style={{ marginBottom: "0px" }}><img src={flag} height={30} width={30} />{ctName}</div>
                                            <div className='dpcontent' style={{ paddingTop: "10px" }}>
                                                <input id="searchid" type='text' placeholder='search here' onChange={(e) => setSearch(e.target.value)} />
                                                {countriess.filter((item) => {
                                                    return serach.toLowerCase() === ''? item : item.country.toLowerCase().includes(serach);
                                                }).map((country, index) => (
                                                    <div onClick={() => { handleCountryClick(country) }} key={index} style={{ marginBottom: "20px", marginLeft: "10px" ,borderBottom:"1px solid gray",padding:"5px"}}><img src={country.flag} height={30} width={30} />{country.country} {country.phone_code}</div>
                                                ))}
                                            </div>


                                        </div>  
                                        <div className='mnumbercontent'>
                                            <div className='codepart'>({ctCode})</div>
                                            <input type='text' placeholder='Mobile Number' />
                                        </div>
                                        <h6 style={{ margin: "15px 0px" }}>By clicking continue you agree to our <a id="clink">Terms & Conditions</a> and <a id="clink">Privacy Policy</a></h6>
                                        <button className='btn btn-primary'>Continue</button>
                                    </div>
                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal



// <select>
// <option>Select a country</option>
// {countriess.map((country, index) => (
//     <option key={index} value={country.code}> {country.name} ({country.code}) <img src={country.flag} height={'30'} width={'30'}/> </option>
// ))}
// </select>