import React from 'react'
import Month from './components/Months/Month'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login/Login'
import Signup from './components/Authentication/Login/Signup'
import { useSelector } from 'react-redux'
import ToCheck from './components/Calendar/ToCheck'


const App = () => {
  
  return (
    <> 
    <div>
    {/* <Login /> */}
          {/* <Home /> */}
          <Month />
          {/* <ToCheck /> */}
    
    {/* <Display /> */}
    </div>
    </>
  )
}

export default App
