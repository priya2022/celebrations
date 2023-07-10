import axios from 'axios';
import * as React from 'react';
import { useEffect,useState,useContext } from 'react';
import { MonthContext } from '../Months/Month';
import {ListingContext} from '../Listing/Listing'
import './myCalendar.css'
import PastCeleb from '../PastCelebrations/PastCeleb';



const Cal=({items,dataReceiver,pastData})=> {


  const [data,setData]= React.useState([])
  const [past,setPast]=useState()
  const [current, setCurrent]= useState()

  const[highlighDays,setHighlightDays]= useState([])

  const {monthData,monthDays,updateCalendarDays} = useContext(MonthContext)

  const {myData} = useContext(ListingContext)


const uniqueMonth =[...new Set(items.map(item=>item.month))]
const currentMonth = uniqueMonth[0]

var days =(items.map(item=> {return item.day}))
var mydays = days.filter(Boolean)



useEffect(() => { 
  const MyCurrentMonth =  currentMonth 
  setCurrent(MyCurrentMonth)
  
}, [currentMonth,myData])


const handleClickChange=(value)=>{

  if(value === "left")
  {
    monthData.map((item,index)=>
    {
      if(item.month === current){
        console.log("current month in hanldeClickchange",current)
        let previous = index - 1;
        if(previous < 0){
          previous = monthData.length -1
        }       
        const myPrevious = monthData[previous].month
        setCurrent(myPrevious)
         updateCalendarDays(myPrevious)
         dataReceiver(myPrevious)
         pastData(myPrevious)
        
      }
    }) 
  }
  else if(value ==="right")
  {
    monthData.map((item,index)=>
    {
      if(item.month === current){
        let next = index + 1;
        if(next >= monthData.length)
        {
          next = 0
        }
       
        const myNext = monthData[next].month
        setCurrent(myNext)
        updateCalendarDays(myNext)
        dataReceiver(myNext)
        pastData(myNext)
        
      }      
    })
  }

 }
    
  

  return (
    
    <>
    {console.log("current month in calendar",uniqueMonth)}
    {console.log("Mydaysin Calendar",mydays)}
    {console.log("daysin Calendar",days)}

<div className="myCalCont">
<div  className="table"> 

    <div className='monthdisplay'>                 
    <h4 className="calHead">{current}  2023</h4>
      <span className="arrow">
     <i className="bi bi-chevron-left " onClick={handleClickChange.bind(this,"left")}></i>
      <i className="bi bi-chevron-right " onClick={handleClickChange.bind(this,"right")} ></i>  
    </span>
   
  </div> 

    
  <div className="mainContent">

  <ul className="weeks">
      <li className="weekDays">Sun</li>
      <li className="weekDays">Mon</li>
      <li className="weekDays">Tue</li>
      <li className="weekDays">Wed</li>
      <li className="weekDays">Thu</li>
      <li className="weekDays">Fri</li>
      <li className="weekDays">Sat</li>
    </ul>

    <div className="calendar">
      

{monthDays.map((day, index) => {
    let className = 'calendar-day';

    if (day === '') {
      className += ' empty-day';
    } else if (days.includes(day.toString())) {
      className += ' theme';
    }

    return (
      <div className={className}>
          <div key={index} >
        {day}
      </div>
      </div>
      
    );
  })}
      </div> 
      </div>


  </div>
  <PastCeleb />
  </div>

  



    </>
  )
}

export default Cal;
