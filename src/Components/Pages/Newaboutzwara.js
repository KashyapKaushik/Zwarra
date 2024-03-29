import React from 'react'
// import sec1 from '../../../public/images/beuty-saloon-icon.svg'
// import sec1 from '../../assets/laser hair removal at home.png'
import sec1 from '../../assets/telemedicen.png'
import sec2 from '../../assets/lab-en.png'
import sec22 from '../../assets/vaccination-en.png'
import sec3 from '../../assets/heart.png'
import sec4 from '../../assets/hands.png'
import sec5 from '../../assets/radiology-en.png'
import back from '../../assets/icon-bg.svg'


function Newaboutzwara() {
  return (
    <>

    <div className='container-fluid   mt-5 newaboutzwara'>
        <h1>Primary care services and telemedicine consultations providers</h1>
        <p className='pp'>We provide an integrated services range from providing consultations by elit of licensed specialists and consultants who are accredited by Saudi (MOH), to delivery of medicines at your home.</p>
        <div className='container sectionabout'>
            <div className='sec1'><img src={sec1} /></div>
            <div className='sec2'>
                <div className='secdiv'style={{borderRadius:"5px"}}>
            <img src={sec22} style={{borderRadius:"5px"}}/>

                </div>
                <div className='secdiv' style={{marginTop:"10px",height:"170px",color:"#00c7e5"}}>
            <img src={sec2} style={{width:"215px",height:"180px",borderRadius:'5px'}}/>

                </div>
            </div>
            <div className='sec3'><img src={sec3} style={{borderRadius:"5px"}}/></div>
            <div className='sec4'>
                <div className='secdiv' >
                    <h5 >Cities covered</h5>
                    <h6>24</h6>
                </div>
                <div className='secdiv' style={{marginTop:"10px"}}>
                <img src={sec4} style={{borderRadius:"5px"}}/>

                </div>
            </div>
            <div className='sec5' ><img src={sec5} style={{borderRadius:"5px"}}/></div>
            

        </div>
        <div className='container linkpart'>
            <a href=''>To link your insurance login or sign up</a>

        </div>

        <div className='container cardcont'>
            <div className='cardsss'>
            <div className='heading'>
            <i class="icon-eye sa-icon-bg"></i>
            {/* <img src={back}/> */}
            <h3>Our Vision</h3>
            </div>
            <h5>To be the best provider of integrated and reliable medical services; Providing solutions that raise the quality of healthy life for the individual and society.</h5>

            </div>
            <div className='cardsss'>
            <div className='heading'>
            {/* <i class="icon-eye sa-icon-bg"></i> */}
            <i class="icon-target sa-icon-bg"></i>
            {/* <img src={back}/> */}
            <h3>Our Mission</h3>
            </div>
            <h5>Providing high quality home medical care services in a wide geographical distribution and an effective medical digital solutions for medical consultations and a unified EMR.</h5>

            </div>

        </div>
        <div className='container newcardsab'>
            <h2>Who we serve</h2>
            <div className='row'>
                <div className='col-lg-7  me-4 cardpt1'>
                    <h4>Patients and their families</h4>
                    <p>provide a wide rang of service from video medical consultations to home delivery of medicines. As well as follow-up of their health, periodic vaccinations, physiotherapy and many.</p>
                    <a className='taggs' href='' style={{marginTop:"100px"}}><i class="icon-arrow-right"></i> See Services</a>
                </div>
                <div className='col-lg-4 cardpt2'>
                    <h4>Companies and employees</h4>
                    <p>We support you in apply occupational safety and health to enhance loyalty of all of your employees</p>
                    <a className='taggs' href='' style={{marginTop:"66px"}}><i class="icon-arrow-right"></i> See Services</a>

                </div>
                

            </div>
            <div className='row'>
                    <div className='col-lg-12 cardpt3'>
                        <h4>Doctors and specialists</h4>
                        <p>Would you like to provide your medical advice through Zwaara?</p>
                    <a className='taggs' href='' style={{marginTop:"55px"}}><i class="icon-arrow-right"></i> See Services</a>

                    </div>
            </div>
            <div className='row' style={{marginTop:"24px"}}>
            <div className='col-lg-4  me-4 cardpt2'>
                    <h4>Insurance companies</h4>
                    <p>Do you want to provide distinguished medical services to members and subscribers?</p>
                    <a className='taggs' href='' style={{marginTop:"66px"}}><i class="icon-arrow-right"></i> See Services</a>

                </div>
                <div className='col-lg-7  cardpt1'>
                    <h4>Hospitals and healthcare centers</h4>
                    <p>Would you like to provide your medical services through Zwaara?</p>
                    <a className='taggs' href='' style={{marginTop:"151px"}}><i class="icon-arrow-right"></i> See Services</a>
                </div>
                {/* <div className='col-lg-4'>
                    <h4>Insurance companies</h4>
                    <p>Do you want to provide distinguished medical services to members and subscribers?</p>
                    <a className='taggs' href=''><i class="icon-arrow-right"></i> See Services</a>
                </div>
                <div className='col-lg-8'>
                    <h4>Hospitals and healthcare centers</h4>
                    <p>Would you like to provide your medical services through Zwaara?</p>
                    <a className='taggs' href=''><i class="icon-arrow-right"></i> See Services</a>

                </div>
                 */}

            </div>

        </div>
        <div className='container whysanar'>
            <h2>Why Zwaara?</h2>
            <p className='textws'>Zwaara will guarantees for you the best medical care from specialized consultations and home medical services such as lab tests, nursing, and etc, with an elit of consultants and specialists.</p>
            <div className='row sanar'>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>Integrated services in variety of medical fields</p>
                </div>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>Freedom to choose the place and time 24/7</p>
                </div>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>Wide geographical coverage 12+ cities</p>
                </div>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>An elite of consultants and specialists</p>
                </div>
            </div>
            <div className='row sanar'>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>24+ E-clinics.</p>
                </div>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>unified EMR</p>
                </div>
                <div className='col-3'>
                <i class="icon-checked"></i>
                <p>Multiple & secure payment methods</p>
                </div>
          
            </div>

        </div>

        <div className='container backimage'>
            <h2>Join us and get benefit from Zwaara services</h2>
            <div>
                <button style={{marginRight:"35px"}}><i class="icon-welfare sa-pr10"></i>Provide a service</button>
                <button><i class="icon-users sa-pr10"></i>Get care</button>
            </div>

        </div>

    </div>
    </>
  )
}

export default Newaboutzwara
