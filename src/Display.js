import React,{useContext} from 'react'
import { appoi } from './App'
import './App.css'

const Display = () => {
    const [data,setData]=useContext(appoi);
    console.log(data)
    console.log(data.map(item=>item.brand))
  return (
    <div  className='card'>
    {/* {
        data.map(function(user){
          // returns Nathan, then John, then Jane
          return <ul> {user.brand} </ul> 
        })
      } */}
      <div className='card-body'>
       {
       data.map(item=>
            <h3 className="card-title">
            {item.brand}
           </h3>
            )
        }
     
          
     </div>
      
    </div>
  )
}

export default Display
// // data.map(element => {data[element].brand})