import React, {useRef,useEffect} from 'react'
import { useObserver } from '../../../../../../hooks/useObserver';
import {Carousel} from "./components"
import "./SampleCategorySection.css"



const SampleCategorySection = ({data}) => {
  const elRef = useRef();
  const {inView} = useObserver(elRef)
    console.log("Data",data);

    // useEffect(()=>{

    // })
    
  return (
    <div ref={elRef} className="sample-category-section">
      <div className="sample-category-title-div">
        <h3 className="my-1">{data.level}</h3>
        <h5 className="my-1">{data.description}</h5>
      </div>
     
      <Carousel samples={data.samples}/>
    </div>
  )
}

export default SampleCategorySection