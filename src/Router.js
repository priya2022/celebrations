import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Listing from './components/Listing/Listing'
import Calendar from './components/Calendar/Calendar'
import PastCeleb from './components/PastCelebrations/PastCeleb'
import App from './App'
import Popup from './components/Details/Popup'
import Challenge from './components/Challenges/Challenge'
import Home from './components/Home/Home'


const Router = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>
      
       <Route path='/' element={<App/>} />
       <Route path='/' element={<Listing/>} />
       <Route path='/' element={<Calendar/>} />
       <Route path='/' element={<PastCeleb/>}/>
       <Route path='/:id' element={<Popup/>} />
       <Route path='/challenges' element = {<Challenge/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default Router