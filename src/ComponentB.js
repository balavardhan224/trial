import React,{useContext} from 'react'
import { apoi } from './App'
const ComponentB = () => {
  const [data,useData]= useContext(apoi)
  return (
    <div>
      {data}
    </div>
  )
}

export default ComponentB
