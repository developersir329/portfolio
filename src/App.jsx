import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from  './Component/Home'
import Social from  './Component/Social'
import Eduction from  './Component/Eduction'
import Skills from  './Component/Skills'
import Project from  './Component/Project'
import Html from './Component/Html'
import css from './Component/css'
import Jspage from './Component/Jspage'
import Reactpage from './Component/Reactpage'
import Aos from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
      Aos.init();
  },[])

  return (
    <>
      
      <BrowserRouter >  
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Social' element={<Social/>}/>
        <Route path='/Eduction' element={<Eduction/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Html' element={<Html/>}/>
        <Route path='/Javascript' element={<Jspage/>}/>
        <Route path='/React' element={<Reactpage/>}/>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
