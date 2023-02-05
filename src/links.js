import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './About';
import Dashboard from './Dashboard';
import Home from './Home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='About' element={<About/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
