import React from 'react'
import { useAppContext } from '../../context/AppContext'
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
          <div className="header-description">
            <p>Whether a single component or full-stack site and everything in between, I specialize in crafting digital experiences that seamlessly blend pixel-perfect responsiveness, aesthetically pleasing designs, and secure backends with robust session systems, ensuring a flawless user journey at every click. </p>
          </div>
          </div>
          <div className="sections-list-mobile-desktop-div">
          <ul className="section-items desktop desktop-list">
            <li className="section-item">
              <a className={currView == "newbie" ? "section-link-item header-link-item in-view" : "section-link-item header-link-item"} href="">
                <h3>Newbie</h3>
              </a>
            </li>
            <li className="section-item">
              <a className={currView == "beginner" ? "section-link-item header-link-item in-view" : "section-link-item header-link-item"} href=""><h3>Beginner</h3></a>
            </li>
            <li className="section-item">
              <a className={currView == "junior" ? "section-link-item header-link-item in-view" : "section-link-item header-link-item"} href=""><h3>Junior</h3></a>
            </li>
            <li className="section-item">
              <a className={currView == "senior" ? "section-link-item header-link-item in-view" : "section-link-item header-link-item"} href=""><h3>Senior</h3></a>
            </li>

          </ul>
          <div className="mobile-div mobile mobile-curr-section">
          <h5>CurrSection:</h5>
            <h3 className="curr-section-h3">Junior</h3>
          </div>
          </div>
          </div>
          <ul className="media-links">
            <li className="media-item">
              <a className="header-link-item media-link-item" href="https://www.linkedin.com/in/justin-green-2484513b/" target="_blank" alt="media-link">LinkedIn</a>
            </li>
            <li className="media-item">
              <a className="header-link-item media-link-item" href="https://github.com/jgreen721" target="_blank" alt="media-link">Github</a>
            </li>
            <li className="media-item">
              <a className="header-link-item media-link-item" href="https://codepen.io/jgreen721" target="_blank" alt="media-link">Codepen</a>
            </li>
            <li className="media-item">
              <a className="header-link-item media-link-item" href="https://www.instagram.com/justng2d1/" target="_blank" alt="media-link">Github</a>
            </li>
            <li className="media-item">
              <a className="header-link-item media-link-item" href="https://www.frontendmentor.io/profile/jgreen721" target="_blank" alt="media-link">Github</a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header