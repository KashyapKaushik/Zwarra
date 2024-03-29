import React from 'react'
import './JoinInPage.css'
import { Link } from 'react-router-dom'

function JoinInPage() {
  return (
    <>
    <div className='container-fluid'>
        <div className='container joininpage'>
            <div className='joincard'>
                <h3>Provide my services via Zwaara Request form </h3>
                <p>We are pleased to cooperate with us in providing and facilitating access to your services Via Zwaara platform</p>
                <div className='card-imagepart'>
                    <h3>Provide your services as</h3>
                    <ul className='cardul'>

                    <Link to='/req' style={{textDecoration:"none", color:"#000"}}>

                        <li className='card-part1'>
                            
                        <i class="sa-sprite-new sa-doc-spe"></i>Doctor / specialist
                        
                            
                        </li>
                    </Link>

                        <Link to='/req' style={{textDecoration:"none", color:"#000"}}>
                        <li className='card-part2'>
                            
                        <i class="sa-sprite-new sa-hos-cen"></i>Hospital or health center
                            
                            
                        </li>
                        </Link>
                        <Link to='/req' style={{textDecoration:"none", color:"#000"}}>

                        <li className='card-part3'>
                            
                        <i class="sa-sprite-new sa-in-company"></i>Insurance company
                            
                            
                        </li>
                        </Link>
                        <Link to='/req' style={{textDecoration:"none", color:"#000"}}>

                        <li className='card-part4'>
                            
                        <i class="sa-sprite-new sa-practitioners"></i>Practitioners
                            
                            
                        </li>
                        </Link>
                    </ul>

                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default JoinInPage
