import React from 'react'
import './jspage.css'
import ps from '../assets/ps.png'
import bmi from '../assets/bmi.png'
import stw from '../assets/stw.png'
import dgc from '../assets/dgc.png'
import Swiggy from '../assets/Swiggy.png'
import cuntrydata from '../assets/cuntrydata.png'
function Jspage() {
  return (
    <div className='main'>
    <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                <img src={ps} alt="" />
                <h1><span className='ls'>Password</span> <span>Generator</span></h1>
                <a className='abtn' href="https://developersir329.github.io/Random-password-genarator/">Watch Demo</a>
            </div>
            <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                <img src=
                {bmi} alt="" />
                <h1>BMI<span className='ls'>Calculator</span></h1>
                <a className='abtn' href="https://developersir329.github.io/Random-password-genarator/">Watch Demo</a>
            </div>
            <div className='html-box js-box'data-aos="zoom-in-down" data-aos-duration="1000">
                <img src={stw} alt="" />
                <h1>Stop<span className='ls'>Watch</span></h1>
                <a className='abtn' href="https://developersir329.github.io/Stop-Watch/">Watch Demo</a>
            </div>
            <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                <img src={dgc} alt="" />
                <h1>Digital<span className='ls'>Clock</span></h1>
                <a className='abtn' href="https://developersir329.github.io/Digital-Watch/">Watch Demo</a>
            </div>
             <div className='html-box js-box'data-aos="zoom-in-down" data-aos-duration="1000">
                <img src={Swiggy} alt="" />
                <h1>Swiggy <span className='ls'>Clone</span></h1>
                <a className='abtn' href="https://developersir329.github.io/Swiggy-Clone/">Watch Demo</a>
            </div>
             <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                <img src={cuntrydata} alt="" />
                <h1>Country<span className='ls'>Fetching</span></h1>
                <a className='abtn' href="https://developersir329.github.io/cuntry-data-feching/">Watch Demo</a>
            </div>
    </div>
  )
}

export default Jspage