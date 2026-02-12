import React from 'react'
import insta  from '../assets/insta.png'
import fb from '../assets/fb.png'
import gth from '../assets/gth.png'
import './Social.css'
function Social() {
  return (
    <div className='skills-container'>
      <div className='insta-box'data-aos="flip-right" data-aos-duration="1000">
        <h1>instagram</h1>
        <a href="https://www.instagram.com/manjeetsharma7302?igsh=MW9ncjA2b3VjMjVocQ=="><img src={insta} alt="" /></a>
      </div>
      <div className='insta-box'data-aos="flip-right" data-aos-duration="1000">
        <h1>Fecbook</h1>
        <a href="https://www.facebook.com/share/1DdXbvB46Y/"><img src={fb} alt="" /></a>
      </div>
      <div className='insta-box'data-aos="flip-right" data-aos-duration="1000">
        <h1>Github</h1>
        <a href="https://github.com/developersir329"><img src={gth} alt="" /></a>
      </div>
    </div>
  )
}

export default Social