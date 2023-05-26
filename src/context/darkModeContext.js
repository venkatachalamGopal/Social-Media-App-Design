import {createContext, useEffect, useState} from "react";

export const DarkModeContext=createContext();

export const DarkModeContextProvider=({children})=>{
    const[darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMode"))||false);

    // darkmode change function :

    const toggle=()=>{
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])


    return(
        <DarkModeContext.Provider value={{toggle,darkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}