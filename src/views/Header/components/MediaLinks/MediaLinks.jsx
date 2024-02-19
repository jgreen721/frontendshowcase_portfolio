import React from 'react'
import {FaLinkedin, FaGithub, FaCodepen, FaInstagram, FaLaptop} from "react-icons/fa"
import "./MediaLinks.css"

const MediaLinks = () => {
  return (
    <ul className="media-links my-2">
    <li className="media-item">
      <a className="header-link-item media-link-item" href="https://www.linkedin.com/in/justin-green-2484513b/" target="_blank" alt="media-link">
          <FaLinkedin className="media-icon"/>
          <FaLinkedin className="shadow-icon"/>
      </a>
    </li>
    <li className="media-item">
      <a className="header-link-item media-link-item" href="https://github.com/jgreen721" target="_blank" alt="media-link">
          <FaGithub className="media-icon"/>
          <FaGithub className="shadow-icon"/>
      </a>
    </li>
    <li className="media-item">
      <a className="header-link-item media-link-item" href="https://codepen.io/jgreen721" target="_blank" alt="media-link">
          <FaCodepen className="media-icon"/>
          <FaCodepen className="shadow-icon"/>
      </a>
    </li>
    <li className="media-item">
      <a className="header-link-item media-link-item" href="https://www.instagram.com/justng2d1/" target="_blank" alt="media-link">
          <FaInstagram className="media-icon"/>
          <FaInstagram className="shadow-icon"/>
      </a>
    </li>
    <li className="media-item">
      <a className="header-link-item media-link-item" href="https://www.frontendmentor.io/profile/jgreen721" target="_blank" alt="media-link">
          <FaLaptop className="media-icon"/>
          <FaLaptop className="shadow-icon"/>
      </a>
    </li>
  </ul>
  )
}

export default MediaLinks