import React from 'react'
import './Reactpage.css'
import Student  from  "../assets/Student Att.png"
import routerproject from '../assets/routerproject.png'
import expense from "../assets/expense.png"
import DalayTask from '../assets/DalayTask.png'
function Reactpage() {
  return (
     <div className='main'>
        <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={Student} alt="" />
                    <h1>Students<span className='ls'>Attendents</span> <span>UI</span></h1>
                    <a className='abtn' href="https://student-attendance-fgag.vercel.app/">Watch Demo</a>
                </div>
                <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={routerproject}
                     alt="" />
                    <h1>React<span className='ls'>Routing</span><span>Project</span></h1>
                    <a className='abtn' href="https://react-routing-omega-wine.vercel.app/">Watch Demo</a>
                </div>
                <div className='html-box rt-box'data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={expense} alt="" />
                   <h1>Expense<span className='ls'>Tracker</span></h1>
                    <a className='abtn' href="https://expense-tracker-kappa-pink-90.vercel.app/">Watch Demo</a>
                </div>
                <div className='html-box rt-box'data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={DalayTask}
                     alt="" />
                    <h1>Add<span className='ls'>Dalay</span><span>Task</span></h1>
                    <a className='abtn' href="https://add-dalay-task.vercel.app/">Watch Demo</a>
                </div>
                 <div className='html-box js-box'data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src="" alt="" />
                    <h1>Swiggy <span className='ls'>Clone</span></h1>
                    <a className='abtn' href="https://developersir329.github.io/Swiggy-Clone/">Watch Demo</a>
                </div>
                 <div className='html-box'data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src="" alt="" />
                    <h1>Cuntry<span className='ls'>Feching</span></h1>
                    <a className='abtn' href="https://developersir329.github.io/cuntry-data-feching/">Watch Demo</a>
                </div>
        </div>
  )
}

export default Reactpage