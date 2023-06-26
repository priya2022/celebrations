import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import { Link } from 'react-router-dom';
import Cal from '../Calendar/Cal';
export const ListingContext = createContext();


const Listing = ({month,CurrentMonth,monthDataReceiver}) => {
  
  var filteredData;
    const [mydata, setData] = useState([])
    const [calData,setCalData]=useState([])
    const [prevData,setPrev] = useState([])
    const [past,setPast]=useState([])
 
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


    //     const currentIndex = mydata.findIndex((item) => item.month === selectedMonth);
    // const previousIndex = currentIndex - 1;
    // if (previousIndex >= 0) {
    //   const previousMonth = mydata[previousIndex].month;
    //   const previousData = mydata.filter((item) => item.month === previousMonth);
    //   setPast(previousData);
    // } else {
    //   setPast([]);
    // }



        // if (previousIndex >= 0) {
        //   const previousMonth = filteredData[previousIndex].month;
        //   const previousData = filteredData.filter((item) => item.month === previousMonth);
          
        //   setPast(previousData)

        // } else {
        //   setPast([]);
        // }
     },[selectedMonth,mydata])

     const toSetPast = (calValue)=>{
    console.log("calValue",calValue)
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
 
      

      var previousAndListData = {
        prevData:past,myData:mydata 
      }

       return (
        <>
         {/* {console.log("past inListing",past)} */}
      <ListingContext.Provider value={previousAndListData}>
     
       <div className="myListingcontainer">      
        {
        
          calData.map((item)=>{

            if(item.title)
            {
              return(
              <Link to ={`/${item.id}`} > 
                  
                <Card key ={item.id} className="myCard">
                <Card.Img  variant="left" className="cardimg" src={item.img} />    
                 <Card.Body className="cardBody">
                   <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="cardText ">
                    {item.description}
                   </Card.Text>
                   <Card.Text className="text">
                     <span className="MonthDay">{item.month} {item.day}</span>
                    <span className="icon"><i class="bi bi-arrow-right-short"></i></span>
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
        
        </ListingContext.Provider>
        </>
      
    
       )
     }

export default Listing

