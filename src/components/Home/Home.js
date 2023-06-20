import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className='mycontainer'>
      <div className="homecontainer">
      <div> <span className="myh">
        <i class="bi bi-emoji-smile myColor"></i></span> 
        <Link to='/'>
        <span  className="myh title">Celebration</span>
        </Link>
       
        </div>
        <div> <span className="myh">
        <i class="bi bi-hand-thumbs-up myColor"></i>
        </span>
        <Link to="challenges">
        <span  className="myh title">Challenges</span>
        </Link>         
         </div>
      <div> <span className="myh">
        <i class="bi bi-lightbulb myColor"></i></span>
         <span  className="myh title">Feature Work</span>
         </div>
         </div>
       </div>

    
    </>
  )
}

export default Home