import React,{useContext} from 'react'
import {  useEffect, useState,createContext } from 'react'
import {ListingContext} from '../Listing/Listing'
import './pastCelebration.css'
import { Link } from 'react-router-dom'
import PopDis from '../PopUpDisplay/PopDis';
import { popUp } from '../Features/List';
import { useDispatch } from 'react-redux';


const PastCeleb = () => {

const [show, setShow] = useState(false); 
const {prevData} = useContext(ListingContext)
const dipatch = useDispatch()


const handleSubmit=(data)=>{
  const {id,title,img,description,month,day}=data
  dipatch(popUp({id,title,img,description,month,day}))
  setShow(!show)
 }

// const dataToMap = myPast ? myPast : prevData;
  return (
    <>
      <div className="wrapperPast">

     


      <h2 className="pheading">See Past Celebration</h2>
      {
       prevData.map(item=>{

        if(item.title){
          return(
            <Link onClick={handleSubmit.bind(this,item)}  className="pastLink">
            <div className="pastCel">
  
              <div className="imgDiv ForAlign celebrityBox">
                <div className="imgBox">
                <img className="pastCelImage" src={item.img} alt="" />
                </div>
              </div>
  
              <div className='ForAlign celebTitle celebrityBox'>
              <h6>{item.title}</h6>
              </div>
  
              <div className='ForAlign celebLink celebrityBox'>
                <div className="celebrityBox2">
              <i class="bi bi-chevron-right alignCelebLink"></i>
                </div>
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

show && <PopDis show={show} setShow ={setShow}/>

}

</div>
    </>
   
  )
}

export default PastCeleb