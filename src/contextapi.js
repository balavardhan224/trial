import React,{createContext,useState} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
export const apoi=createContext()
const App = () => {
  const [data,setData]=useState(0);
  return (
   <apoi.Provider value={[data,setData]}>
      <center>
        <ComponentA />
        <ComponentB />
        <button onClick={()=> setData(data+1)}> Incr</button>
      </center>
      
    </apoi.Provider>
  )
}

export default App
 