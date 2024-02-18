import {useState, useEffect} from "react"


export const useObserver = (el)=>{
    const [inView,setInView] = useState(false);

    const signalSection = (entries)=>{
        // console.log("Entries",entries);
        if(entries[0].isIntersecting){
            // console.log("showing section!")
            setInView(true)
        }
        else{
            setInView(false);
        }
    }

    const observer = new IntersectionObserver(signalSection);


    useEffect(()=>{
        if(el.current){
            observer.observe(el.current)
        }


    },[]);



    return {inView}
}