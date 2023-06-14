import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Listing from '../Listing/Listing';
import './Month.css'
const initialMonth = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]

export const MonthContext = createContext()

const Month = () => {
  
  const [month,setMonth]= useState('')
 const [mynewMonth,setmyMonth]= useState(initialMonth)
 const [highlight,setHighlight]= useState('')
  const [data,setData]=useState([])
  const [days, setDays] = useState([]);


  useEffect(()=>{    


    
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let generatedDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const firstDay = new Date(currentYear, currentMonth+ 1, 1).getDay();
    const startDayOffset = firstDay === 0 ? 6 : firstDay - 1;
    const shiftedDays = [...Array(startDayOffset).fill(''), ...generatedDays];

    setDays(shiftedDays);

    // Determine the start day of the week (0 for Sunday, 1 for Monday, and so on)

    // Generate an array of days based on the start day of the week
    let d = new Date();
    let current = mynewMonth[d.getMonth()]
    setmyMonth(current)

  },[])



  const callgetApi=async()=>{
   const response = await axios.get("https://646352d67a9eead6fae32f76.mockapi.io/year")
   setData(response.data)
 }

  useEffect(()=>{
    callgetApi()
  
  },[])
  
  const handleChange=(month)=>{
    setMonth(month.month)
    console.log("month", month.month)

    const year = 2023;
    const monthIndex = initialMonth.indexOf(month.month);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    // Determine the start day of the week (0 for Sunday, 1 for Monday, and so on)
    const firstDay = new Date(year, monthIndex, 1).getDay();

    // Generate an array of days based on the start day of the week
    const generatedDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const startDayOffset = firstDay === 0 ? 7 : firstDay - 0;
    const shiftedDays = [...Array(startDayOffset).fill(''), ...generatedDays];

    setDays(shiftedDays);

  }
  
  const myMonthData = {monthData:data,monthDays:days }
  
  const dataReceiver = (data)=>{
    console.log("data",data);    
    setHighlight(data)
     
   }
  return (
   
    <MonthContext.Provider value ={myMonthData} >
     
    <div className="new">      
    <div className= "myMon"  gap={2} style={{"marginTop":"3%"}}>
    {
      data.map((month)=>{
        return(         
          <Button className={`monthBtn ${highlight.includes(month.month)  ? "high" : " "}`} variant="outline-warning" onClick={handleChange.bind(this, month)}>{month.month}</Button>
        )
       
      })
    }
    </div>

    </div>

      {/* <div className="calendar">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day === '' ? 'empty-day' : ''}`}
          >
            {day}
          </div>
        ))}
      </div> */}
    
      <Listing month={month} mynewMonth={mynewMonth} monthDataReceiver={dataReceiver}/> 
    
    </MonthContext.Provider>
  )
}

export default Month