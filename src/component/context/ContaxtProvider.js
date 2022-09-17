import React, { createContext, useState } from 'react'

export const DeleteContext = createContext("") 

const ContaxtProvider = ({children}) => {
 
    const [dlttask,setDelttask] = useState(false);

  return (
    <>
    <DeleteContext.Provider value={{dlttask,setDelttask}}>
        {children}
    </DeleteContext.Provider>
    </>
  )
}

export default ContaxtProvider