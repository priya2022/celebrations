import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import Calendar from '../Calendar/Calendar';
import { Link } from 'react-router-dom';
import Cal from '../Calendar/Cal';
export const ListingContext = createContext();


const Listing = ({month,CurrentMonth,monthDataReceiver}) => {
  
  var filteredData;
    const [mydata, setData] = useState([])
    const [calData,setCalData]=useState([])
    const [prevData,setPrev] = useState([])

    

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
    

     useEffect(()=>{
      //CallData
      const initialData = mydata.filter((item)=> item.month === selectedMonth)
      setCalData(initialData)  
      console.log("initialData",initialData)
      
      //Previous Month
      // for(let i=0;i<mydata.length;i++)
      // {
      //   if(mydata[i].month === selectedMonth)
      //   {
      //     var firstOne= mydata.findIndex((item)=>item.month === selectedMonth)
      //     console.log("firstOne",firstOne)
      //     var previousIndex=firstOne-1   

      //     var value = mydata[previousIndex].month.toString()
      //     console.log("myMonth",value)
      //     var previous = mydata.filter(item => item.month === value)
      //     console.log("letMyPrevious",previous)
      //     setPrev(previous)
      //   }
      // }
       
     },[selectedMonth, mydata])
     
     
     const dataReceiver = (data)=>{      
      

        monthDataReceiver(data)
     
        filteredData= mydata.filter((item)=>item.month === data)         
        setCalData(filteredData)

        const calendarMonth = calData.map(item=> item.month )        
        const calendarValue = Object.values(calendarMonth)[0] 

     }
 
      filteredData= mydata.filter((item)=> item.month === selectedMonth )

      var previousAndListData = {
        prevData,myData:mydata 
      }

       return (
        <>
         
      <ListingContext.Provider value={previousAndListData}>
     
       <div className="myListingcontainer">      
        {
        
          calData.map((item)=>{

            if(item.title)
            {
              return(
              <Link to ={`/${item.id}`} >
                {console.log("previousINLisnting",prevData)}
                <Card key ={item.id} className="myCard">
                <Card.Img  variant="left" className="cardimg" src={item.img} />    
                 <Card.Body className="cardBody">
                   <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="cardText ">
                    {item.description}
                   </Card.Text>
                   <Card.Text className="text">
                     <span>{item.month} {item.day}</span>
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
        {/* <Calendar items={calData} dataReceiver = {dataReceiver}/> */}
        <Cal  items={calData} dataReceiver = {dataReceiver}/>
        </ListingContext.Provider>
        </>
      
    
       )
     }

export default Listing

