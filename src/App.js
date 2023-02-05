import React,{createContext,useState} from 'react'

import Count from './Count'
import Display from './Display'

export const appoi= createContext()
const App = () => {
  const [data,setData]=useState([
    {
      brand: "sam"
    },
    {
      brand: "vivo"
    },
    {
      brand: "1+"
    }
  ]);
  return (
    <appoi.Provider value={[data,setData]}>
        <div>
          <Count/>
          <Display/>
        </div>
    </appoi.Provider>
    
  )
}

export default App
