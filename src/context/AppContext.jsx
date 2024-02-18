import {createContext, useContext, useEffect, useState} from "react"
import {data as fileData} from "../data"
import { mapSampleIcons } from "../utils/mapSampleIcons";

const AppContext = createContext();

export const useAppContext = (()=>{
    return useContext(AppContext);
})



export const AppProvider = ({children})=>{
    const [theme,setTheme] = useState("dark");
    const [data,setData] = useState([]);
    


            useEffect(()=>{
               setData(mapSampleIcons(fileData))
            },[])



    const values={
        theme,
        data,
      
    }

    return (
    <AppContext.Provider value={{...values,blah:[]}}>
        {children}
    </AppContext.Provider>
    )
}