import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from '../assets/react.png'
import './project.css'
import { NavLink } from 'react-router-dom'
function Project() {
  return (
    <div className='project-container'>
        <div className='project-card'data-aos="flip-right" data-aos-duration="1000">
          <div className='thcs'>
            <img src={css} alt="" />
          <img src={html} alt="" />
           </div>
          <h1>HTML&CSS</h1>
          <NavLink to="/Html"> View Project</NavLink>
        </div>
         <div className='project-card'data-aos="flip-right" data-aos-duration="1000">
          <img src={js} alt="" />
          <h1>JAVASCRIPT</h1>
          <NavLink to="/Javascript"> View Project</NavLink>
        </div>
         <div className='project-card'data-aos="flip-right" data-aos-duration="1000">
          <img src={react} alt="" />
          <h1>REACT</h1>
          <NavLink to="/react"> View Project</NavLink>
        </div>
    </div>
  )
}

export default Project