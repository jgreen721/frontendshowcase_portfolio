import React, {useRef} from 'react'
import "./MouseHover.css"

const MouseHover = ({mouseX,mouseY}) => {
    const mouse = useRef()

  
  return (
    <div>
        <div style={{left:`${mouseX-200}px`,top:`${mouseY-200}px`}} ref={mouse} className="mouse-hover"></div>
    </div>
  )
}

export default MouseHover