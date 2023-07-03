import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Listing from '../Listing/Listing';
import './Month.css'
import { useSelector } from 'react-redux';
const initialMonth = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]

export const MonthContext = createContext()

const Month = () => {

  const user= useSelector(state=>state.user.value)

 
    const [month,setMonth]= useState('')
    const [mynewMonth,setmyMonth]= useState(initialMonth)
    const [highlight,setHighlight]= useState('')
    const [data,setData]=useState([])
    const [days, setDays] = useState([]);
    const [monthCurrent,setCurrent] = useState([])


  //For testing
  useEffect(()=>
  {
    setCurrent(mynewMonth)
    setHighlight(monthCurrent)
  },[mynewMonth,monthCurrent])

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

  const updateCalendarDays = (selectedMonth) => {
    const year = 2023;
    const monthIndex = initialMonth.indexOf(selectedMonth);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const startDayOffset = firstDay === 0 ? 7 : firstDay - 1;
    const generatedDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const shiftedDays = [...Array(startDayOffset).fill(''), ...generatedDays];
    setDays(shiftedDays);
  };
   
  const handleChange=(month)=>{
    setMonth(month.month)
    setHighlight(month.month)
    updateCalendarDays(month.month)  
  }
  
  
  
  const dataReceiver = (data)=>{    
    setHighlight(data)  
    
  }   

   

   //handleChage for both functions
   const handleClickChange=(value)=>{

    if(value === "left")
    {
      data.map((item,index)=>
      {
        if(item.month === mynewMonth){
          let previous = index - 1;
          if(previous < 0){
            previous = data.length -1
          }       
          const myPrevious = data[previous].month
          setmyMonth(myPrevious)
          updateCalendarDays(myPrevious)                    
        }
      }) 
    }
    else if(value ==="right")
    {
      data.map((item,index)=>
      {
        if(item.month === mynewMonth){
          let next = index + 1;
          if(next >= data.length)
          {
            next = 0
          }
         
          const myNext = data[next].month
          setmyMonth(myNext)
          updateCalendarDays(myNext)
        }      
      })
    }

   }

   const myMonthData = {monthData:data,monthDays:days, updateCalendarDays:updateCalendarDays}
   
  //  if(!user.email){
  //   return
  // }
  return (
   
    <MonthContext.Provider value ={myMonthData} >
    <div className="new">      
    <div className= "myMon"  gap={2} style={{"marginTop":"3%"}}>
    {
      data.map((month)=>{
        return(         
       
          <Button className={`monthBtn ${month.month === highlight ? "high" : " "}`}  variant="outline-warning" onClick={handleChange.bind(this, month)}>{month.month}</Button>
        )
       
      })
    }
    </div>

    </div>

    
    <Listing month={month} CurrentMonth={mynewMonth} monthDataReceiver={dataReceiver}/> 
    
    </MonthContext.Provider>
  )
}

export default Month