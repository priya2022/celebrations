import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { saveProject,removeProject } from '../Features/Save';
import './Popup.css'


const selectProjectInfo = (state)=> state.save.projects.map(project=>({
  id:project.id,
  isSavedinMyProject:project.isSaved
}))


function PopDis({show,setShow}) {

  const offCanvasStyles ={
    height:'95vh',
    borderTopLeftRadius:"50px",
    borderTopRightRadius:"50px",
    border:"2px solid purple",

  }

  const popUpContent={
    display:"flex",
    flexDirection:"column",   
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: "80vh",
    border:"2px solid red",
    textAlign: "justify",
  }

  const projectInfo = useSelector (selectProjectInfo )
  const dispatch = useDispatch()
  const data = useSelector(state=> state.listing.value)
  const {id,title,img,description,day,month,isSaved} = data
  
  const isSavedProject = projectInfo.find(project=> project.id === id)?.isSavedinMyProject
  const buttonVariant = isSavedProject ? 'highlightYellow' : ' '
  const buttonText = isSavedProject ? 'Saved' : 'Save';

  const handleSave = (data) => {
    if(isSavedProject){
      dispatch(removeProject(data.id))
    }
    else{
      dispatch(saveProject({...data,isSaved:true}));
    }
  };


  const handleClose = () => setShow(false);

  return (
    <>
    <div >
    <Offcanvas show={show} onHide={handleClose} placement="bottom" style={offCanvasStyles}>

        <Offcanvas.Header closeButton className="popUpHeader">
          <Offcanvas.Title>{title} </Offcanvas.Title>
        </Offcanvas.Header>
        
      
      <Offcanvas.Body className="popUpContent" >
          <div className="main">    

            <div className="PopupImg">
                <img src={img} alt="" className="pImg" />
            </div>

            <div className="PopUpContent2">

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

              <div className="wpast">

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
                  {/* <div className="setDiv">
                  <img src="" alt=""  className="pUimage"/>
                  </div>
                  <div className="setDiv">
                  <img src="" alt="" className="popUPIMage" />
                  </div>
                  <div className="setDiv">
                  <img src="" alt=""  className="popUPIMage"/>
                  </div>  */}
                </div>

                </div>

            </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>


        </div>
    </>
  );
}

export default PopDis;