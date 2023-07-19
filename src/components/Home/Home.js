import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Home = () => {
  const user= useSelector(state=>state.user.value)

  // if(!user.email){
  //   return
  // }
  
  return (
    <>
    <div className='mycontainer'>
      <div className="homecontainer">

      <div>  
        <Link to='/'  className="myLink">
        <span className="myh">
        <i class="bi bi-emoji-smile myColor"></i></span>
        <span  className="myh title">Celebrations</span>
        </Link>
       
        </div>

        <div> 
        <Link to="challenges" className="myLink">
        <span className="myh">
        <i class="bi bi-hand-thumbs-up myColor"></i>
        </span>
        <span  className="myh title">Inspirations</span>
        </Link>         
         </div>

        <div> 
          <Link to="Image" className="myLink">
          <span className="myh">
          <i class="bi bi-lightbulb myColor"></i></span>
          <span  className="myh title">Feature Works</span>
          </Link>
         
          </div>

          
        <div> 
        <Link to="MyProjects" className="myLink">
        <span className="myh">
        <i class="bi bi-download"></i>
        </span>
        <span  className="myh title">Saved Project </span>
        </Link>         
         </div>


          </div>
        </div>

        

    
    </>
  )
}

export default Home