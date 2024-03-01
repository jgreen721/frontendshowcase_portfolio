import {useState} from "react";
import {Header,About} from "./views";
import {MouseHover} from "./components"
import './App.css'
import { useAppContext } from "./context/AppContext";

function App() {
  const {theme} = useAppContext();
  const [coords,setCoords] = useState({x:0,y:0})
  const [screenHeight,setScreenHeight] = useState(window.innerHeight);


  const mouseMove = (e)=>{
    // distinguish between mouseMove and onScroll -- first find onScroll to fire desirably
      if(Math.abs(e.clientY - screenHeight) > 250){
        // setCoords((coords)=>coords={x:e.clientX,y:e.clientY});
        // console.log("SET!")
      }
      else{
        // console.log("NO SET!")
      }
  }

  onresize=()=>{
    console.log('resize!!')
    setScreenHeight(window.innerHeight)
  }

  return (
    <div onMouseMove={(e)=>mouseMove(e)} data-theme={theme} className="app">
      <div className="app-content">
        <MouseHover mouseX={coords.x} mouseY={coords.y}/>
        <div className="app-column flex-1">
          <Header/>
        </div>
        <div className="app-column flex-2 overflow-column">
          <About/>
        </div>
      </div>
    </div>
  )
}

export default App
