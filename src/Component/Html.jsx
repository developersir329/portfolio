import React from 'react'
import './html.css'
import loginimg from '../assets/login.png'
import table from   '../assets/table.png'
import qub from '../assets/Qub.png'
import Amazon from '../assets/Amazon.png'
import Ludo from '../assets/Ludo.png'
import Flipkart from '../assets/Flipkart.png'
function Html() {
  return (
    <div className='html-container'>
        <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
            <img src={loginimg} alt="" />
            <h1>Animated <span className='ls'>Login </span> <span>Page</span></h1>
            <a className='abtn' href="https://developersir329.github.io/Animated-Login-Page/">Watch Demo</a>
        </div>
        <div className='html-box table'data-aos="zoom-in-down" data-aos-duration="1000">
            <img src={table} alt="" />
            <h1>Animated <span className='ls'>Table</span> <span>Page</span></h1>
            <a className='abtn' href="https://developersir329.github.io/Animated-table/">Watch Demo</a>
        </div>
        <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
            <img src={qub} alt="" />
            <h1>Animated <span className='ls'>Cube</span> <span>Page</span></h1>
            <a className='abtn' href="https://developersir329.github.io/Scroll-Bar/">Watch Demo</a>
        </div>
         <div className='html-box Amazon'data-aos="zoom-in-down" data-aos-duration="1000">
            <img src={Amazon} alt="" />
            <h1><span className='ls'>Amazon</span> <span>Clone</span></h1>
            <a className='abtn' href="https://developersir329.github.io/Amazon-Clone/">Watch Demo</a>
        </div>
         <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
            <img src={Ludo} alt="" />
            <h1> <span className='ls'>Ludo</span> <span>UI</span></h1>
            <a className='abtn' href="https://developersir329.github.io/Ludo/">Watch Demo</a>
        </div>
         <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
            <img src={Flipkart} alt="" />
            <h1><span className='ls'>Flipkart</span> <span>Clone</span></h1>
            <a className='abtn' href="https://developersir329.github.io/Flipkart-Clone/">Watch Demo</a>
        </div>
    </div>
  )
}

export default Html