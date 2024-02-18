import { BiLogoBlender } from "react-icons/bi";
import { FaCss3,FaHtml5,FaJs,FaReact,FaVuejs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";


export const mapSampleIcons = (data)=>{
    // console.log("Data",data);
    // let techIcons = [];
    // data.forEach((category)=>{
    //     let techIcons = [];

    //     category.samples.forEach(sample=>{
    //         sample.technology.forEach((tech,idx)=>{
    //             if(tech == "HTML"){
    //                 techIcons.push({id:idx+1,tech:"HTML",icon:<FaHtml5/>})
    //             }
    //             if(tech == "CSS"){
    //                 techIcons.push({id:idx+1,tech:"CSS",icon:<FaCss3/>})
    //             }
    //             if(tech == "React"){
    //                 techIcons.push({id:idx+1,tech:"React",icon:<FaReact/>})
    //             }
    //             if(tech == "Blender"){
    //                 techIcons.push({id:idx+1,tech:"Blender",icon:<BiLogoBlender/>})
    //             }
    //             if(tech == "ThreeJS"){
    //                 techIcons.push({id:idx+1,tech:"ThreeJS",icon:<TbBrandThreejs/>})
    //             }
    //             if(tech == "JS"){
    //                 techIcons.push({id:idx+1,tech:"JS",icon:<FaJs/>})
    //             }
    //             if(idx == sample.technology.length-1){
    //                 sample.technology = techIcons;

    //             }
    //         })

    //     })

      data = data.map(category=>({...category,samples:category.samples.map(s=>({...s,technology:s.technology.map((t,idx)=>({id:idx+1,tech:t,iconSpecs:t == "HTML" ? {icon:<FaHtml5/>,color:'html-orange'} : t == "JS" ? {icon:<FaJs/>,color:"js-yellow"} : t == "CSS" ? {icon:<FaCss3/>,color:"css-blue"} : t == "Blender" ? {icon:<BiLogoBlender/>,color:"blender-orange"} : t == "React" ? {icon:<FaReact/>,color:"react-blue"} : {icon:<TbBrandThreejs/>,color:"three-green"}}))}))}))

        console.log("data",data);
        return data;
    // })
}