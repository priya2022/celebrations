import axios from 'axios'
import { useDispatch } from 'react-redux';
import React, {  useEffect, useState,createContext, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import { popUp } from '../Features/List';
import { Link } from 'react-router-dom';
import Cal from '../Calendar/Cal';
import { MonthContext } from '../Months/Month';

import PopDis from '../PopUpDisplay/PopDis';
export const ListingContext = createContext();



const Listing = ({month,CurrentMonth,monthDataReceiver}) => {


  var filteredData;
    const [mydata, setData] = useState([])
    const [calData,setCalData]=useState([])
    const [prevData,setPrev] = useState([])
    const [show, setShow] = useState(false); 
    const [past,setPast]=useState([])

    // Displaying Canvas
    // const handleClose = () => setShow(false);

    const dipatch = useDispatch()

  const {monthCurrent} = useContext(MonthContext)

    const callgetApi=async()=>{
      const response = await axios.get("https://646352d67a9eead6fae32f76.mockapi.io/months")
      setData(response.data)
    }

     useEffect(()=>{
       callgetApi()
     },[])

     const myCurrentMonth= Object.values({CurrentMonth})[0]
     const myMonth= Object.values({month})[0]
     const selectedMonth = myMonth||myCurrentMonth
     filteredData= mydata.filter((item)=> item.month === selectedMonth )

    

     useEffect(()=>{


      const filteredData = mydata.filter((item) => item.month === selectedMonth);
        setCalData(filteredData);
        toSetPast()
     },[selectedMonth,mydata])

     const toSetPast = (calValue)=>{
    const month =   calValue || selectedMonth
      const currentIndex = mydata.findIndex((item) => item.month === month);
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
          const previousMonth = mydata[previousIndex].month;
          const previousData = mydata.filter((item) => item.month === previousMonth);
          setPast(previousData);
        } else {
          setPast([]);
        }
     }
     
     
     const dataReceiver = (data)=>{      
        monthDataReceiver(data)
        filteredData= mydata.filter((item)=>item.month === data)         
        setCalData(filteredData)
     }

    

     const handleSubmit=(data)=>{
      setShow(true)
      const {id,title,img,description,month,day,isSaved}=data
      dipatch(popUp({id,title,img,description,month,day,isSaved}))
     }
 
      var previousAndListData = {
        prevData:past,myData:mydata 
      }

       return (
        <>
      <ListingContext.Provider value={previousAndListData} className="listingMainClass">
        <div className="listingMainClass">
        {console.log("filteredData current month in listing",filteredData)}
       <div className="myListingcontainer">      
        {
        
          calData.map((item)=>{

            if(item.title)
             {
              return(

                <Link onClick={handleSubmit.bind(this,item)}  >
                  {console.log("isSavedin listing",item.isSaved)}
                <Card key ={item.id} className="myCard">
                  
                  <div className="mainCardImage">
                  <Card.Img  variant="left" className="cardimg" src={item.img} />                        
                  </div>
                
                 <Card.Body className="cardBody">
                   <Card.Title className="cardTitle">{item.title}</Card.Title>
                  <Card.Text className="cardText ">
                    {item.description}
                   </Card.Text>
                   <Card.Text className="text">
                     <span className="MonthDay">{item.month} {item.day}</span>
                    <span className="icon" onClick={handleSubmit.bind(this,item)}><i class="bi bi-arrow-right-short"></i></span>
                   </Card.Text>                 
                 </Card.Body>
               </Card> 
               </Link>
              )
            }
            else
            {
              return null;
            }
            
          })
        }
        </div>       

        <Cal  items={calData} dataReceiver = {dataReceiver} pastData ={toSetPast}/>
        
        {

        show && <PopDis show={show} setShow ={setShow}/>

        }


        
        </div>
        </ListingContext.Provider>
        </>
      
    
       )
     }

export default Listing

