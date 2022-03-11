import React, { useState, createContext } from 'react'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export const Context = createContext({})

export default function UserContextProvider({children}) {
  const [jwt, setJwt] = useState(cookies.get('user') || null)

  return <Context.Provider value={{jwt, setJwt}}>
    {children}
  </Context.Provider>
}
