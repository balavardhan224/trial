import React,{useContext} from 'react'
import { apoi } from './App'

const ComponentA = () => {
   const [data,setData]= useContext(apoi)
  return (
    <div className="card">
        <div className="card-body">
            ComponentA {data}
        </div>
      
    </div>
  )
}

export default ComponentA
