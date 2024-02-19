import React, { useEffect, useState } from 'react'
import {Canvas} from "@react-three/fiber"
import {Float, useAnimations, useGLTF} from "@react-three/drei"
import "./Experience.css"


const Scene = ()=>{
    const img = useGLTF("./models/newtypingscene.glb")
    const {mixer,actions} = useAnimations(img.animations, img.scene);
    const [pos,setPos] = useState([1.15,-2.5,0])
    const [scale,setScale] = useState(.25)
    const [rotateIntensity,setRotateIntensity] = useState(1)
    const [floatIntensity,setFloatIntensity] = useState(1)
    const [floatingRange,setFloatingRange] = useState([1,1])
    

    useEffect(()=>{

        setConf();

        img.animations.forEach(animation=>{
            console.log("animation",animation)
            if(animation.name == "Typing"){
            const action = mixer.clipAction(animation);
            action.play();
            }
        })
    },[]);

    const setConf = ()=>{
        if(innerWidth > 1150){
            setScale(.35)
            setRotateIntensity(1)
            setFloatIntensity(1)
            setFloatingRange([1,1])
            setPos([1.15,-2.5,0])

         }
        if(innerWidth < 1125){
            setPos([3.25,-2,0])
            setScale(.6)
            setRotateIntensity(.35)
            setFloatIntensity(.4)
            setFloatingRange([.6,.6])
        }

        if(innerWidth < 850){
            setPos([.5,-2.75,0])
            setScale(.385)
            setRotateIntensity(.5)
        }
       
    }

    onresize=()=>{
        setConf();
    }

    return (
        <Float speed={2}
        rotationIntensity={rotateIntensity} // XYZ rotation intensity, defaults to 1
        floatIntensity={floatIntensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={floatingRange} >
        <group position={pos}>
            <primitive scale={scale} rotation={[0,Math.PI * -.3,0]} object={img.scene}/>
        </group>
        </Float>
    )
}

const Experience = () => {
  return (
    <div className="experience-overlay">
      
        <Canvas style={{height:'100%',backgroundColor:'transparent'}}>
            {/* <color attach="background" args={["black"]}/> */}
            <ambientLight intensity={.3}/>
            <directionalLight/>
            <pointLight/>
            <Scene/>
        </Canvas>
    </div>
  )
}

export default Experience