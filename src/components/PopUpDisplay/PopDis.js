import React, { useEffect, useState } from 'react'
// import store from './path/to/your/store';
import {useSelector} from 'react-redux'
import { createSelector} from '@reduxjs/toolkit'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useDispatch} from 'react-redux'
import { saveProject,removeProject } from '../Features/Save';
import './Popup.css'


    const selectProjectInfo = (state)=> state.save.projects.map(project=>({
      id:project.id,
      isSavedinMyProject:project.isSaved
    }))


const PopDis = ({show,setShow}) => {

  const projectInfo = useSelector (selectProjectInfo )

  const dispatch = useDispatch()

    const data = useSelector(state=> state.listing.value)
    const {id,title,img,description,day,month,isSaved} = data

  const isSavedProject = projectInfo.find(project=> project.id === id)?.isSavedinMyProject
  const buttonVariant = isSavedProject ? 'highlightYellow' : ' '
  const buttonText = isSavedProject ? 'Saved' : 'Save';

  
  
  
    
    // const projectInfo = useSelector(selectProjectInfo)
    

    // const toBeSaved = useSelector(state=> state.save.toBeSaved)

    const handleClose = () => {
        setShow(false)
      }

      const handleSave = (data) => {
        if(isSavedProject){
          dispatch(removeProject(data.id))
        }
        else{
          dispatch(saveProject({...data,isSaved:true}));
        }
      };


  return (
    <div>
 <Offcanvas show={show} onHide={handleClose} placement="bottom" className={`${show ? 'clicked':' '} PopUpcontainer`}  >
        <Offcanvas.Header closeButton className="popUpHeader">
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="popUpContent">
          <div className="main">    

            <div className="PopupImg">
                <img src={img} alt="" className="pImg" />
            </div>

            <div className="PopUpContent">

              <div className="popUpButton">
                <Button className='myButton'>Celebration</Button>

                <Button  className={`saveBtn ${buttonVariant} `} variant="outline-warning" onClick={handleSave.bind(this, data)}>
                  {buttonText}
                </Button>
              </div>

              <div className="popUpTitle">
                 <h4 className="popUpMainTitle">{title}</h4><span className="month">{month} {day}, 2023</span>
                  <p className="dataDescription">{description}</p>
              </div>
                  <h2 className="inspirations">Inspirations</h2>
                <div className="DetailedImage">
                
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage" />
                  </div>
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage"/>
                  </div>
                  <div className="setDiv">
                  <img src="" alt="" className="popUPIMage" />
                  </div>
                  <div className="setDiv">
                  <img src="" alt=""  className="pUimage"/>
                  </div>
                  <div className="setDiv">
                  <img src="" alt="" className="popUPIMage" />
                  </div>
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage"/>
                  </div> 
                </div>
            </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>


    </div>
  )
}

export default PopDis

