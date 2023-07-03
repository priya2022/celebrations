import React,{useContext} from 'react'
import {  useEffect, useState,createContext } from 'react'
import {ListingContext} from '../Listing/Listing'
import './pastCelebration.css'
import { Link } from 'react-router-dom'
import PopDis from '../PopUpDisplay/PopDis';
import { popUp } from '../Features/List';
import { useDispatch } from 'react-redux';


const PastCeleb = () => {

const [showPopup, setShowPopup] = useState(false); 
const {prevData} = useContext(ListingContext)
const dipatch = useDispatch()


const handleSubmit=(data)=>{

     
  const {id,title,img,description,month,day}=data
  
  dipatch(popUp({id,title,img,description,month,day}))
  setShowPopup(!showPopup)
 }

// const dataToMap = myPast ? myPast : prevData;
  return (
    <>

      <h2 className="pheading">See Past Celebration</h2>
      {
       prevData.map(item=>{

        if(item.title){
          return(
            <Link onClick={handleSubmit.bind(this,item)}  className="pastLink">
            <div className="pastCel">
  
              <div className="imgDiv ForAlign">
              <img className="pastCelImage" src={item.img} alt="" />
              </div>
  
              <div className='ForAlign celebTitle'>
              <h6>{item.title}</h6>
              </div>
  
              <div className='ForAlign celebLink'>
              <i class="bi bi-chevron-right alignCelebLink"></i>
              </div>
  
            </div>
            </Link>
          )
        }
        else{
          return null;
        }       
       })
      }

      {

      showPopup && <PopDis/>

      }

    </>
   
  )
}

export default PastCeleb