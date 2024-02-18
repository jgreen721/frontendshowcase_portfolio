import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import "./CarouselBtnsRows.css"

const CarouselBtnsRow = ({handleCarousel}) => {
  return (
    <div className="carousel-btns-row">
    <button className="carousel-btn next" onClick={()=>handleCarousel("next")}>
      <MdOutlineKeyboardArrowLeft className="high-z carousel-btn-arrow"/>
    </button>
    <button className="carousel-btn prev" onClick={()=>handleCarousel("prev")}>
      <MdOutlineKeyboardArrowRight className="high-z carousel-btn-arrow"/>
    </button>
    </div>
  )
}

export default CarouselBtnsRow