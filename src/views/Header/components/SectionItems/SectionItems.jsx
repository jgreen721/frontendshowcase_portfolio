import React from 'react'
import { useAppContext } from '../../../../context/AppContext';
import "./SectionItems.css";


const SectionItems = () => {
  const {currView}  = useAppContext();
  return (
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
  )
}

export default SectionItems