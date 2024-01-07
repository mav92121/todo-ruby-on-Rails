import React, { createContext, useState } from 'react'
export const formContext=createContext();

const FormContext = ({children}) => {
  const [title,setTitle]=useState('');
  const [id,setId]=useState();
  const [content,setContent]=useState('');
  const [update,setUpdate]=useState(false);

  return (
    <formContext.Provider value={{title,setTitle,content,setContent,update,setUpdate,id,setId}}>
      {children}
    </formContext.Provider>
  )
}

export default FormContext