import React from 'react'
import "./CarouselItem.css";

const CarouselItem = ({sample,samples}) => {
  return (
    <li key={sample.id} style={{left:`${sample.translateId * 50}%`,opacity: sample.translateId == 0 || sample.translateId == samples.length-1 ? 0 : 1,borderRadius:sample?.borderRadius ? sample.borderRadius : "0rem"}} className={sample.translateId == 2 ? "carousel-item scaled-item" : "carousel-item peripheral-item"}>
    <div className={sample.translateId == 1 || sample.translateId == 3 ? "sample-img-container blur-sample" : "sample-img-container"}>
      <img className="sample-img" src={sample.img} alt="sample-img" />
   <div>
     <div className={sample.translateId == 2 ? "visit-link-div" : "visit-link-div no-hover"}>
     <a className="visit-link desktop-link" href={sample.site} target="_blank">Visit Site</a>
     </div>
   </div>
    </div>

  </li>
  )
}

export default CarouselItem