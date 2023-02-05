import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const name="John";
    return(
        <div>
        <center>
        <h1>
            home screen
        </h1>
        <Link to={'/Dashboard'} className='Link'> Dashboard</Link><br/><br/><br/>
        <Link to='/About' className='Link'> About</Link>
        </center>
    </div>
    )
    
    }

export default Home
