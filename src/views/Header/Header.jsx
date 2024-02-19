import React from 'react'
import { useAppContext } from '../../context/AppContext'
import {MediaLinks, SectionItems,Experience} from "./components"
import "./Header.css"

const Header = () => {
  const {currView} = useAppContext();


  console.log("currView",currView)
  return (
    <header className="header">
        <div className="header-content">
          <div>
          <div className="header-title-div">
            <h1>Justin</h1>
            <h1>Green</h1>
          </div>
          <div className="header-card">
          <div className="header-tagline">
            <h4 className="mid-thin">Front-end dev with <strong className="strong">full</strong> stack knowledge.</h4>
          </div>
          <div className="header-description my-1">
            <p>Whether a single component or full-stack site, I specialize in crafting digital experiences that seamlessly blend pixel-perfect responsiveness, aesthetically pleasing designs, and secure backends with robust session systems, ensuring a satisfying and secure experience at every click. </p>
          </div>
          </div>
          <SectionItems/>
          </div>
       <MediaLinks/>
        </div>
        <Experience/>
    </header>
  )
}

export default Header