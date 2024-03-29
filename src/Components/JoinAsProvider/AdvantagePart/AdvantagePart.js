import React from 'react'
import './AdvantagePart.css'
import js1 from '../../../assets/Joinaspovider/care-provider-hospitals-section.png'
import Department from '../Department/Department'
import { Link } from 'react-router-dom'

function AdvantagePart() {
  return (
    <div className='container advantagepart mt-5'>
    <h4>Advantages of joining</h4>
    <div className='row joinpart1'>
        <div className='col-6'>
          <h2>For doctors and specialists</h2>
          <p style={{fontSize:"14px",color:"grey", marginBottom:"30px"}}>We believe in the technology as enabler tool in health and medicine sector. So we aim to create a supportive environment where you can develop your career and extend your services</p>
          <ul className='doctorlist'>
            <li>
              <div className='iconcontain'>
              <i class="icon-hospital3 sa-icon-bg"></i>
              <h5>Virtual clinic</h5>

              </div>
              <p id='newid'>Ease of managing and directing appointments - setting appropriate times for your appointments and advising your clients virtually.</p>
            </li>
            <li>
              <div className='iconcontain'>
              <i class="icon-digital-nomad sa-icon-bg"></i>
              <h5>Digital presence</h5>

              </div>
              <p id='newid'>Enhance your presence on the Internet, search engines and through the application, Also reach to a large segment of patients.</p>
            </li>
            <li>
              <div className='iconcontain'>
              <i class="icon-purse sa-icon-bg"></i>
              <h5>Additional income</h5>

              </div>
              <p id='newid'>Flexible work schedule - set the price of the consultation according on your experiences and preferences</p>
            </li>

          </ul>

        </div>
        <div className='col-6 imagepart'>
            

        </div>
    
    </div>
    <div className='joinbtn'>
    <Link to='/joinin'>
    <button type='button' className='btn btn-primary' >Join in</button></Link>
    </div>
    <div className='row joinpart1' style={{marginTop:"90px"}}>
        <div className='col-6 imagepart2'> 
        <img src={js1} />
        </div>
    
        <div className='col-6'>
        <h4>Advantages of joining</h4>
          <h2>For Hospitals & medical center</h2>
          <p style={{fontSize:"14px",color:"grey", marginBottom:"30px"}}>Be our partner and join in our distinguished list of hospital and medical centers who want to expand the reach of its services through providing patients with high quality home care experines tailored to their needs,</p>
          <ul className='doctorlist'>
            <li>
              <div className='iconcontain'>
              <i class="icon-date-time sa-icon-bg"></i>
              <h5>Manage appointments easily</h5>

              </div>
              <p id='newid'>Receiving and managing reservation requests and appointing your medical staff.</p>
            </li>
            <li>
              <div className='iconcontain'>
              <i class="icon-target sa-icon-bg"></i>
              <h5>Serving a wider segment</h5>

              </div>
              <p id='newid'>Reducing pressure on outpatient clinics and patient's stay in the hospital. Reducing long waiting lines, which increases patient's satisfactionز</p>
            </li>
            <li>
              <div className='iconcontain'>
              <i class="icon-skill sa-icon-bg"></i>
              <h5>Integrated professional services</h5>

              </div>
              <p id='newid'>Adding the medical staff and managing them - adding your medical services - a control panel for your institution and many more..</p>
            </li>
            <div className='joinbtn' style={{justifyContent:"end"}}>

            <Link to='/joinin'><button type='button' className='btn btn-primary'>Join in</button></Link>
    </div>

          </ul>

        </div>
    </div>
    <div className='boxes'>

      <div className='p1'>
        <h2>370255+</h2>
        <span>Bookings</span>
      </div>
      <div className='p1'>
        <h2>2348+</h2>
        <span>Service Providers</span>
      </div>
      <div className='p1' style={{borderRight:"none"}}>
        <h2>211+</h2>
        <span>Doctors</span>
      </div>

    </div>
    <Department/>

</div>
  )
}

export default AdvantagePart
