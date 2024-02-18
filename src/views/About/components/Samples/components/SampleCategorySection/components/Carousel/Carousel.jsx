import React, {useState} from 'react'
import { CarouselItem,InfoCarousel, CarouselBtnsRow } from './components';
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
        // <li onClick={()=>getProjectInfo(sample)} key={sample.id} style={{left:`${sample.translateId * 50}%`,opacity: sample.translateId == 0 || sample.translateId == samples.length-1 ? 0 : 1,borderRadius:sample?.borderRadius ? sample.borderRadius : "0rem"}} className={sample.translateId == 2 ? "carousel-item scaled-item" : "carousel-item peripheral-item"}>
        //   <div className={sample.translateId == 1 || sample.translateId == 3 ? "sample-img-container blur-sample" : "sample-img-container"}>
        //     <img className="sample-img" src={sample.img} alt="sample-img" />
        //   </div>
    
        // </li>
        <CarouselItem key={sample.id} sample={sample} samples={samples}/>
      ))}
       
      </ul> 
  <CarouselBtnsRow handleCarousel={handleCarousel}/>
      </div>
      {/* <div className="sample-info-section">
        <h3 className="my-2">{curr?.title}</h3>
        <h5>{curr?.description}</h5>
      </div> */}
      <InfoCarousel data={data}/>
      </div>
  )
}

export default Carousel