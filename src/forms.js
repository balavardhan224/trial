import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [data,setData]=useState({
    name:'',
    password:'',
    email:'',
    number :'',
    location:'',
  });
  const changehHandler=(e)=>{
    setData({...data,[e.target.name]:[e.target.value]});
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    // if(data.password.length<5){
    //   alert("password should be more than 5 ")
    // }
    // else{
      console.log(data.password)
      console.log(typeof(data.password))
      console.log(data.password.length)
    // }
    
  }
  return (
    <div className='App' >
       <form onSubmit={submitHandler} >
        <label>name{" "}</label>
        <input type="text" name="name" onChange={changehHandler}/><br/>
        <label>password</label><br/>
        <input type="password" name="password" onChange={changehHandler}/><br/>
        <label>location</label><br/>
        <input type="text" location="location" onChange={changehHandler}/><br/> 
        <label>email</label><br/>
        <input type="text" name="email" onChange={changehHandler}/><br/>
        
        <label>number</label><br/>
        <input type="text"name="number" onChange={changehHandler}/><br/>
        <input type="submit"value="Login"/><br/>
       </form>
    </div>
  )
}

export default App
