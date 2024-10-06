import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'
import play_icon from'../../assets/play-icon.png'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img }alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          {setPlayState(true)}
        }}/>

      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomoroow's Leaders Today </h2>
        <p>Embark and Experience the perfect blend of academic excellence and practical skills with a dynamic curriculum designed for the modern professional. Offering a wide range of courses to enhance both personal and career growth,   </p>
        <p>Experience an education that blends academic excellence with real-world relevance. Offering a diverse range of programs designed to cultivate critical thinking, leadership, and innovation. </p>
        <p> Our forward-thinking curriculum goes beyond textbooks, shaping innovators, problem-solvers, and leaders ready to tackle tomorrow's challenges. With hands-on experience and cutting-edge resources, we transform passion into purpose. </p></div>
    </div>
  )
}

export default About;
