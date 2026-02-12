import React from 'react'
import './Skills.css'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import mongo from '../assets/mongo.png'
import express from '../assets/express.png'
function Skills() {
  return (
    <div className='skills-container'>
      <div className='skills-box' data-aos="flip-right" data-aos-duration="1000">
        <img src={html} alt="ING" />
        <h2>HTML</h2>
      </div>
      <div className='skills-box'data-aos="flip-right" data-aos-duration="1000">
        <img src={css} alt="ING" />
        <h2>CSS</h2>
      </div>
      <div className='skills-box'data-aos="flip-right" data-aos-duration="1000">
        <img src={js} alt="ING" />
        <h2>Javascript</h2>
      </div>
      <div className='skills-box'data-aos="flip-right" data-aos-duration="1000">
        <img src={react} alt="ING" />
        <h2>React</h2>
      </div>
      <div className='skills-box'data-aos="flip-right" data-aos-duration="1000">
        <img src={nodejs} alt="ING" />
        <h2>Node.js</h2>
      </div>
      <div className='skills-box'data-aos="flip-right" data-aos-duration="1000">
        <img src={mongo} alt="ING" />
        <h2>MongoDb</h2>
      </div>
      <div className='skills-box'data-aos="flip-right" data-aos-duration="1000">
        <img src={express} alt="ING" />
        <h2>Express.js</h2>
      </div>
    </div>
    
  )
}

export default Skills