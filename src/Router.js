import React, { Suspense, lazy } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Listing from './components/Listing/Listing'
import Calendar from './components/Calendar/Calendar'
import PastCeleb from './components/PastCelebrations/PastCeleb'
import App from './App'
import Popup from './components/Details/Popup'
import Challenge from './components/Challenges/Challenge'
import Home from './components/Home/Home'
import Save from './components/SaveProject/Save'
import Login from './components/Authentication/Login/Login'
import Signup from './components/Authentication/Login/Signup'
import ImageMasonry from './components/Masonry/ImageMasonry'


// const Listing = lazy(() => import('./components/Listing/Listing'));
// const Calendar = lazy(() => import('./components/Calendar/Calendar'));
// const PastCeleb = lazy(() => import('./components/PastCelebrations/PastCeleb'));
// const App = lazy(() => import('./App'));
// const Popup = lazy(() => import('./components/Details/Popup'));
// const Challenge = lazy(() => import('./components/Challenges/Challenge'));
// const Home = lazy(() => import('./components/Home/Home'));
// const Save = lazy(() => import('./components/SaveProject/Save'));
// const Login = lazy(() => import('./components/Authentication/Login/Login'));
// const Signup = lazy(() => import('./components/Authentication/Login/Signup'));

//  export const MainRoutes=()=>{
//   <Routes>
//       <Route path='/' element={<App/>} />
//       <Route path='popUp/:id' element={<Popup/>} />
//   </Routes>

// }

const Router  = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>

        <Route exact path='/Login' element={<Login/>}  />
        <Route path='/SignUp' element={<Signup/>}/>
        <Route path='/' element={<App/>} />
        <Route path='popUp/:id' element={<Popup/>} />      
        <Route path='/' element={<PastCeleb/>}/>
        <Route path='/challenges' element = {<Challenge/>} />
        <Route path='/Image' element = {<ImageMasonry/>} />

        <Route path='/MyProjects' element={ <Save/> } />

    </Routes>
    </BrowserRouter>
  )
}


export default Router