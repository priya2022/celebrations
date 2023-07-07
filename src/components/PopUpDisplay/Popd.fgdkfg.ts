// import React, { useEffect, useState } from 'react'
// // import store from './path/to/your/store';
// import {useSelector} from 'react-redux'
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import {useDispatch} from 'react-redux'
// import { saveProject,removeProject } from '../Features/Save';
// import './Popup.css'


// const PopDis = () => {

//   const [show, setShow] = useState(true);
//   const[save,setSave] = useState({})
  
//   const dispatch = useDispatch()

//     const data = useSelector(state=> state.listing.value)
//     const isSaved = useSelector(state=> state.save.isSaved)
//     const {id,title,img,description,day,month} = data

//     const handleClose = () => {
//         setShow(false)
//       }

//       const handleSave = (data) => {
//         if (!isSaved) {
//           dispatch(saveProject(data));
//         }
//         else{
//           dispatch(removeProject(data.id))
          
//         }
//       };




//   return (
//     <div>
//          <Offcanvas show={show} onHide={handleClose} placement="bottom" className={`${show ? 'clicked':' '} PopUpcontainer`}  >
//         <Offcanvas.Header closeButton className="popUpHeader">
//           <Offcanvas.Title ></Offcanvas.Title>
//         </Offcanvas.Header>
        
//         <Offcanvas.Body className="popUpContent">
//           <div className="main">    

//             <div className="PopupImg">
//                 <img src={img} alt="" className="pImg" />
//             </div>

//             <div className="PopUpContent">

//               <div className="popUpButton">
//                 <Button className='myButton'>Celebration</Button>
//                 <Button  className={`saveBtn ${isSaved ? 'toYellow': ''}`} variant="outline-warning" onClick={handleSave.bind(this, data)}>
//                   {isSaved ? 'Saved': "Save"}
//                 </Button>
//               </div>

//               <div className="popUpTitle">
//                  <h4 className="popUpMainTitle">{title}</h4><span className="month">{month} {day}, 2023</span>
//                   <p className="dataDescription">{description}</p>
//               </div>
//                   <h2 className="inspirations">Inspirations</h2>
//                 <div className="DetailedImage">
                
//                   <div className="setDiv">
//                   <img src="" alt=""  className="popUPIMage" />
//                   </div>
//                   <div className="setDiv">
//                   <img src="" alt=""  className="popUPIMage"/>
//                   </div>
//                   <div className="setDiv">
//                   <img src="" alt="" className="popUPIMage" />
//                   </div>
//                   <div className="setDiv">
//                   <img src="" alt=""  className="pUimage"/>
//                   </div>
//                   <div className="setDiv">
//                   <img src="" alt="" className="popUPIMage" />
//                   </div>
//                   <div className="setDiv">
//                   <img src="" alt=""  className="popUPIMage"/>
//                   </div> 
//                 </div>
//             </div>
//             </div>
//         </Offcanvas.Body>
//       </Offcanvas>


//     </div>
//   )
// }

// export default PopDis