import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <center>
        <h1>Dashboard</h1><br/>
        <Link to='/' className='Link'> Home</Link>
      </center>
    </div>
  )
}

export default Dashboard
