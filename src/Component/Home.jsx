import React from 'react'
import mk from '../assets/mk.jpeg'
import mk2 from '../assets/mk2.png'
import { useTypewriter,Cursor } from 'react-simple-typewriter' 
import './Home.css'
function Home() {
   
 const [text] = useTypewriter({
  words: ['Front-end Developer','Back-end Developer'],
  loop:{},
  typeSpeed: 200,
  delaySpeed: 80,
 })



  return (
    <div className='main-container'>
      <div className='profile-image'data-aos="fade-right" data-aos-duration="1000">
        <img src={mk} alt="" />
        <div className='img2'>
          <img className='mk2' src={mk2} alt="" />
        </div>
      </div>
      <div className='profile-text'data-aos="fade-left" data-aos-duration="1000">
         <h1><span className='intro'>Hi  i am</span></h1>
         <h1>Manjeet <span>Sharma</span></h1>
         <h2>I'am a
          <span style={{fontWeight:'bold',color:'oranged', }}>  {text}</span>
          <Cursor/>
          </h2>
      <p>I build responsive, interactive web applications using <span>React</span>, <span>JavaScript</span>, and <span>modern CSS</span>. I enjoy turning <span>UI designs into clean</span> , functional interfaces. Currently learning backend development with the MERN stack to become a full-stack developer.</p>
      <button><a href="">Download CV</a></button>
       </div>
    </div>
  )
}

export default Home