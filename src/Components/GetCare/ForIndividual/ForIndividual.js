import React from 'react'
import './ForIndividual.css'

function ForIndividual() {
  return (
    <>
    <div className='Container-fluid mt-5'>
        <div className='top-content-img'>
          <div className='container'>
            <h1>We are here to meet the needs of you and your family</h1>
          </div>
          <p>An integrated hospital at your fingertips. Our services will be delivered at your home, in an easy, convenient and fast way.</p>

        </div>

        <div className='container cardssection'>
          <div className='gccards'>
            <i class="sa-sprite-new sa-journey"></i>
            <h6>Easy treatment journey</h6>
            <p>Quick access to the doctors with different specialization. Text chat or video call, around the clock, with high privacy and confidentiality. Home visits and clinical examination without waiting in clinics for long hours</p>
          </div>
          <div className='gccards'>
            <i class="sa-sprite-new sa-ele-cardio"></i>
            <h6>Counseling and integrated care</h6>
            <p>A suitable diagnosis of your condition, issuance of prescriptions and e medical reports, and dispensing medicines while you are at home.</p>
          </div>
          <div className='gccards'>
          <i class="sa-sprite-new sa-doc-bag"></i>
            <h6>Integrated treatment programmes</h6>
            <p>Treatment plans include consultations, clinical and laboratory examinations periodically , with follow-up of your condition with a specialist doctor without the hassle of going to hospitals.</p>
          </div>
          <div className='gccards'>
          <i class="sa-sprite-new sa-money-fill"></i>
            <h6>Clear costs and great care</h6>
            <p>Medical services at an affordable price with the possibility of quick linking with various insurance companies</p>
          </div>
        </div>
        <div className='container ordersanar'>
          <h2>How to order from SANAR</h2>
          <ul className='order-sanar-list'>
            <li>
            <i className="icon-home-plus sa-icon-bg iconpart"><small>1</small></i>
            <h3>Choose the service or clinic</h3>
            <span>Doctor visits, Lab, vaccinations, home nursing services, etc</span>
            <i className="icon-arrow-right-thick arr"></i>
            </li>
            <li>
            <i className="icon-online-meeting sa-icon-bg iconpart"><small>2</small></i>
            <h3>Select location and schedule</h3>
            <span>Synchronized with your schedule from comfort of your home</span>
            <i className="icon-arrow-right-thick arr"></i>
            </li>
            <li>
            <i class="icon-online-meeting sa-icon-bg iconpart"><small>3</small></i>
            <h3>Explain your problem</h3>
            <span>And get an appropriate medical diagnosis</span>
            <i className="icon-arrow-right-thick arr"></i>
            </li>
            <li>
            <i className="icon-medical-report sa-icon-bg iconpart"><small>4</small></i>
            <h3>Find report in the application</h3>
            <span>Medical reports and prescriptions will be attached to the application</span>
            <i className="icon-arrow-right-thick arr"></i>
            </li>
          </ul>

        </div>
        <div className='container specialitysection'>
          <div className='row p-0'>
            <div className='col-9 p-0 lspart1'>
              <h2>Licensed doctors in various specialties</h2>

            </div>
            <div className='col-3 p-0'>
              <div className='lspart2'>
              <div className='circlecontent'></div>
              <p>859 doctors are now available for immediate consultation</p>
              </div>

            </div>
            <div className='row tickpart'>
              <div className='col-3'><i class="icon-checked"></i>Immunologist</div>
              <div className='col-3'><i class="icon-checked"></i>Ophthalmologist</div>

              <div className='col-3'><i class="icon-checked"></i>Surgeon</div>

              <div className='col-3'><i class="icon-checked"></i>Sports medicine specialist</div>

            </div>
            <div className='row tickpart'>
              <div className='col-3'><i class="icon-checked"></i>Colon and rectal surgeon</div>
              <div className='col-3'><i class="icon-checked"></i>Dentist</div>

              <div className='col-3'><i class="icon-checked"></i>Hand surgeon</div>

              <div className='col-3'><i class="icon-checked"></i>Spinal cord injury specialist</div>

            </div>
            <div className='col-12' style={{marginTop:"20px"}}>
              <a id='ss'>more specialties...</a>
            </div>
          </div>
        </div>
        <div className='container backimgcontent'>
          <div className='row'>
            <div className='col-6 backimp1'>
              <h3>Book an appointment from our available services</h3>
              <p>Get immediate care for you and your family</p>
            </div>
            <div className='col-6 backimp2'>
              <h3>Request personalized health services</h3>
              <p>We will contact you to meet your specific needs</p>
              <button><i class="icon-heart-rate sa-pr10"></i>Request Now</button>
            </div>

          </div>
        </div>
      
    </div>
    </>
  )
}

export default ForIndividual
