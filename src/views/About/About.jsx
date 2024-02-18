import React from 'react'
import { AboutMe,Samples } from './components'
import "./About.css"

const About = () => {
  return (
    <div className="about-view-container">
          <AboutMe/>
      <div className="sections-container">
        <Samples/>
        {/* <Carousel/> */}
      </div>
    </div>
  )
}

export default About