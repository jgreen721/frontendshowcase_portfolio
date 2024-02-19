import React from 'react'
import { useAppContext } from '../../context/AppContext'
import {MediaLinks, SectionItems} from "./components"
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
            <h4>Front-end dev with <strong>full</strong>stack knowledge.</h4>
          </div>
          <div className="header-description my-1">
            <p>Whether a single component or full-stack site, I specialize in crafting digital experiences that seamlessly blend pixel-perfect responsiveness, aesthetically pleasing designs, and secure backends with robust session systems, ensuring a satisfying and secure experience at every click. </p>
          </div>
          </div>
          <div className="sections-list-mobile-desktop-div">
          <ul className="section-items desktop desktop-list">
            <li className={currView == "newbie" ? "section-item in-view" : "section-item"}>
              <a className="section-link-item header-link-item" href="#newbie">
                <h3>Newbie</h3>
              </a>
            </li>
            <li className={currView == "beginner" ? "section-item in-view" : "section-item"}>
              <a className="section-link-item header-link-item" href="#beginner"><h3>Beginner</h3></a>
            </li>
            <li className={currView == "junior" ? "section-item in-view" : "section-item"}>
              <a className="section-link-item header-link-item" href="#junior"><h3>Junior</h3></a>
            </li>
            <li className={currView == "senior" ? "section-item in-view" : "section-item"}>
              <a className="section-link-item header-link-item" href="#senior"><h3>Senior</h3></a>
            </li>

          </ul>
          {/* <div className="mobile-div mobile mobile-curr-section">
            <h3 className="curr-section-h3">{currView ? currView[0].toUpperCase() + currView.substr(1,currView.length-1) : ""}</h3>
          </div> */}
          </div>
          </div>
       <MediaLinks/>
        </div>
    </header>
  )
}

export default Header