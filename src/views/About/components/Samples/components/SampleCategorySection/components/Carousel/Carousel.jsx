import React, {useState} from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiLogoBlender } from "react-icons/bi";
import { FaCss3,FaHtml5,FaJs,FaReact,FaVuejs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

import "./Carousel.css"

const Carousel = ({samples}) => {
  console.log(samples)
    const [data,setData] = useState(samples)
    const [curr,setCurr] = useState(samples.filter(s=>s.translateId == 2)[0])


    // console.log(curr)

    const handleCarousel = (dir)=>{

        let temp = data;
        if(dir == "next"){
        temp = temp.map((t=>t.translateId == 0 ? {...t,translateId:samples.length-1} : {...t,translateId:t.translateId -1}))
        }
        else{
            temp = temp.map((t=>t.translateId == samples.length-1 ? {...t,translateId:0} : {...t,translateId:t.translateId +1}))

        }
        setData(temp)
        setCurr(temp.filter(s=>s.translateId == 2)[0])

    }

    const getProjectInfo = (info)=>{
      if(info.translateId != 2){
        console.log("nothing to do, exiting out");
      }
    }
  return (
    <div className="carousel-sampleinfo-wrapper">
      <div className="carousel-container">   
      <ul className="carousel">
      {data.map(sample=>(
        <li onClick={()=>getProjectInfo(sample)} key={sample.id} style={{left:`${sample.translateId * 50}%`,opacity: sample.translateId == 0 || sample.translateId == samples.length-1 ? 0 : 1,borderRadius:sample?.borderRadius ? sample.borderRadius : "0rem"}} className={sample.translateId == 2 ? "carousel-item scaled-item" : "carousel-item peripheral-item"}>
          <div className={sample.translateId == 1 || sample.translateId == 3 ? "sample-img-container blur-sample" : "sample-img-container"}>
            <img className="sample-img" src={sample.img} alt="sample-img" />
          </div>
    
        </li>
      ))}
       
      </ul> 
      <button className="carousel-btn next" onClick={()=>handleCarousel("next")}>
        <MdOutlineKeyboardArrowLeft className="high-z"/>
      </button>
      <button className="carousel-btn prev" onClick={()=>handleCarousel("prev")}>
        <MdOutlineKeyboardArrowRight className="high-z"/>
      </button>
      </div>
      {/* <div className="sample-info-section">
        <h3 className="my-2">{curr?.title}</h3>
        <h5>{curr?.description}</h5>
      </div> */}
      <div className="info-carousel-parent">
        <ul className="info-carousel">
{data.map(sample=>(
        <li onClick={()=>getProjectInfo(sample)} key={sample.id} style={{left:`${sample.translateId * 50}%`,opacity: sample.translateId == 0 || sample.translateId == samples.length-1 ? 0 : 1,borderRadius:sample?.borderRadius ? "2rem" : "0rem"}} className={sample.translateId == 2 ? "carousel-info-item scaled-info-item" : "carousel-info-item peripheral-info-item"}>
          {/* <div className={sample.translateId == 1 || sample.translateId == 3 ? "sample-img-container blur-sample" : "sample-img-container"}> */}
          <h3>{sample.title}</h3>
          <h5>{sample.description}</h5>
          {/* </div> */}
          <ul className="sample-techs">
            <h5>Built with:</h5>
            {sample.technology.map(t=>(
              <li className={t.iconSpecs.color} key={t.id}>{t.iconSpecs.icon}</li>
            ))}
          </ul>
    
        </li>
      ))}
      </ul>
      </div>
      </div>
  )
}

export default Carousel