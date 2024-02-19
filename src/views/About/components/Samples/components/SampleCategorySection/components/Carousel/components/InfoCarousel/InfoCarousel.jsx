import React from 'react'
import "./InfoCarousel.css"

const InfoCarousel = ({data}) => {
  return (
    <div className="info-carousel-parent">
    <ul className="info-carousel">
{data.map(sample=>(
    <li key={sample.id} style={{left:`${sample.translateId * 50}%`,opacity: sample.translateId == 0 || sample.translateId == data.length-1 ? 0 : 1,borderRadius:sample?.borderRadius ? "2rem" : "0rem"}} className={sample.translateId == 2 ? "carousel-info-item scaled-info-item" : "carousel-info-item peripheral-info-item"}>
      {/* <div className={sample.translateId == 1 || sample.translateId == 3 ? "sample-img-container blur-sample" : "sample-img-container"}> */}
      <h3>{sample.title}</h3>
      <h5>{sample.description}</h5>
      {/* </div> */}
      <ul className="sample-techs">
        <h5 className="mid-thin">Built with:</h5>
        {sample.technology.map(t=>(
          <li className={t.iconSpecs.color} key={t.id}>{t.iconSpecs.icon}</li>
        ))}
      </ul>
<div className="sample-btns-row">
  <div className="open-tag-div tag-div"></div>
  <a href={sample.site} target="_blank" className="code-btn">Code</a>
  <div className="close-tag-div tag-div">
    <div className="close-line"></div>
  </div>
</div>
    </li>
  ))}
  </ul>
  </div>
  
  )
}

export default InfoCarousel