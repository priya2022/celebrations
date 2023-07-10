import {BrowserRouter,Routes,Route} from "react-router-dom"
import PastCeleb from './components/PastCelebrations/PastCeleb'
import App from './App'
// import Popup from './components/Details/Popup'
import Challenge from './components/Challenges/Challenge'
import Home from './components/Home/Home'
import Save from './components/SaveProject/Save'
import Login from './components/Authentication/Login/Login'
import Signup from './components/Authentication/Login/Signup'
import ImageMasonry from './components/Masonry/ImageMasonry'



const Router  = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>

        <Route exact path='/Login' element={<Login/>}  />
        <Route path='/SignUp' element={<Signup/>}/>
        <Route path='/' element={<App/>} />
        {/* <Route path='popUp/:id' element={<Popup/>} /> */}
        <Route path='/' element={<PastCeleb/>}/>
        <Route path='/challenges' element = {<Challenge/>} />
        <Route path='/Image' element = {<ImageMasonry/>} />
        <Route path='/MyProjects' element={ <Save/> } />

    </Routes>
    </BrowserRouter>
  )
}


export default Router