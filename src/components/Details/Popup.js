import { useState,useEffect, createContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Popup.css'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { saveProject,removeProject } from '../Features/Save';
import { useParams ,useNavigate} from 'react-router-dom';

export const SaveContext = createContext();

function Popup() {

  const [show, setShow] = useState(true);
  const {id} = useParams();
  const [data, setData] = useState([])
  
  const[save,setSave] = useState({})
  const [isSaved,setIsSaved] =useState(false)


  const navigate= useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const savedState = localStorage.getItem('savedState');
    setIsSaved(savedState === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('savedState', isSaved);
  }, [isSaved]);

 
  const handleSave = (data) => {
    if (!isSaved) {
      dispatch(saveProject(data));
    }
    else{
      dispatch(removeProject(data.id))
      
    }
    setIsSaved((prevState) => !prevState);
  };
  // useEffect(()=>{
  //   localStorage.setItem('savedState',isSaved)
  // },[isSaved])

  // useEffect(()=>{
  //   const savedState= localStorage.getItem('savedState')
  //   if(savedState === 'true')
  //   {
  //     setIsSaved(true)
  //   }
  // },[])

    useEffect(()=>{
        
        axios.get( `https://646352d67a9eead6fae32f76.mockapi.io/months/${id}`)
        .then(response => {
            // Handle the response data
            setData(response.data)
          })        
          .catch(error => {
            // Handle errors
            console.error(error);
          });
    },[])

    const handleClose = () => {
      setShow(false)
      navigate('/')
    
    }

    // const handleSave = (item) => {
    //   if (!isSaved) {
    //     setSave(item)
    //     dispatch(saveProject(data));
    //   }
    //   setIsSaved(!isSaved);
    // };


    // const handleSave=(item)=>{
    //   if(save === null){
    //     setSave(item)
    //   dispatch(saveProject(item))

    //   }
    //   else{
    //     setSave(null)
    //   }
    //   // handleClose()
    // }


  return (
    <>

    <SaveContext.Provider value ={save}>
      <Offcanvas show={show} onHide={handleClose} placement="bottom" className="PopUpcontainer" >
        <Offcanvas.Header closeButton className="popUpHeader">
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="popUpContent">
          <div className="main">    

            <div className="PopupImg">
                <img src={data.img} alt="" className="pImg" />
            </div>

            <div className="PopUpContent">

              <div className="popUpButton">
                <Button className='myButton'>Celebration</Button>
                <Button  className={`saveBtn ${isSaved ? 'toYellow': ''}`} variant="outline-warning" onClick={handleSave.bind(this, data)}>
                  {isSaved ? 'Saved': "Save"}
                </Button>
                {/* <Button className='saveBtn' onClick={handleSave.bind(this, data)} variant="outline-warning">Save</Button> */}

                {/* handleSave to display either save or saved option */}
                {/* {
                  save === null ? 
                  (
                    <Button className='saveBtn' onClick={handleSave.bind(this,data)} variant="outline-warning"> saved</Button>
                  )
                  :
                  (
                <Button className='saveBtn' onClick={handleSave} variant="outline-warning">Save</Button>
                  )
                } */}
              </div>

              <div className="popUpTitle">
                 <h4 className="popUpMainTitle">{data.title}</h4><span className=" month">{data.month} {data.day}, {data.year}</span>
                  <p className="dataDescription">{data.description}</p>
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
      </SaveContext.Provider>
      

    </>
  );
}

export default Popup;

   
