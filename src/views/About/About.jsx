import React from 'react'
import { AboutMe,Samples,Footer } from './components'
import "./About.css"

const About = () => {
  return (
    <div className="about-view-container">
          <AboutMe/>
      <div className="sections-container">
        <Samples/>
      </div>
      <Footer/>
    </div>
  )
}

export default About