import React,{useContext} from 'react'
import { appoi } from './App'
import './App.css'

const Count = () => {
    const [data,setData]=useContext(appoi)
    console.log(data);
    
  return (

    <div className='App'>
      length: {data.length}
    </div>
  )
}

export default Count
