
import React, { createContext, useState } from 'react'

// Creating Context
export const ThemeContext=createContext();

//Provider Function
export default function ThemeContextProvider(props) {
    const [dark,setDark]=useState(true);
  return (
   <ThemeContext.Provider
   value={{dark,setDark}}>
  {props.children}
   </ThemeContext.Provider>
 
  )
}
