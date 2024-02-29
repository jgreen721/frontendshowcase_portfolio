import React from 'react'
import { useAppContext } from '../../../../context/AppContext'
import {SampleCategorySection} from "./components"
import "./Samples.css"

const Samples = () => {
    const {data} = useAppContext();
    // console.log(data);
  return (
    <div className="samples-parent-container">
      
         {data.map(d=>(
            <SampleCategorySection key={d.id} data={d}/>
        ))} 
        
    </div>
  )
}

export default Samples