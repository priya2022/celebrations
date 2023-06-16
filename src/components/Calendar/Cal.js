import axios from 'axios';
import * as React from 'react';
import { useEffect,useState,useContext } from 'react';
import { MonthContext } from '../Months/Month';
import {ListingContext} from '../Listing/Listing'
import './myCalendar.css'
import PastCeleb from '../PastCelebrations/PastCeleb';



const Cal=({items,dataReceiver})=> {

const {myData} = useContext(ListingContext)

  const [data,setData]= React.useState([])
  const [past,setPast]=useState()

  const {monthData,monthDays,updateCalendarDays} = useContext(MonthContext)

  const [current, setCurrent]= useState()


 
const uniqueMonth =[...new Set(items.map(item=>item.month))]
const currentMonth = uniqueMonth[0]



useEffect(() => { 
  setCurrent(currentMonth)
  
}, [currentMonth,myData])

const handleClickChange=(value)=>{

  if(value === "left")
  {
    monthData.map((item,index)=>
    {
      if(item.month === current){
        let previous = index - 1;
        if(previous < 0){
          previous = monthData.length -1
        }       
        const myPrevious = monthData[previous].month
        setCurrent(myPrevious)
         updateCalendarDays(myPrevious)
         dataReceiver(myPrevious)
        
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

      }      
    })
  }

 }
    

 
  
  var days =(items.map(item=> {return item.day}))

  return (
    
    <>
{console.log("mydays inCalendar to be highlighted",days)}
<div className="myCalCont">
<div  className="table"> 

    <div className='monthdisplay'>                 
    <h4 className="calHead">{current}  2023</h4>
      <span>
     <i className="bi bi-chevron-left " onClick={handleClickChange.bind(this,"left")}></i>
      <i className="bi bi-chevron-right " onClick={handleClickChange.bind(this,"right")} ></i>  
    </span>
   
  </div> 
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
        {monthDays.map((day, index) => (
          // <div
          //   key={index} className={`calendar-day ${day === '' ? 'empty-day' : ''} ${days.includes(2) ? 'highlight' : ''}`}>
          //   {day}
          // </div>
          <div
          key={index} className={`calendar-day ${day === '' ? 'empty-day' : ''} ${days.includes(day) ? 'theme' : ''}`}>
          {day}
        </div>

          
        ))}
      </div> 

  </div>
  <PastCeleb />
  </div>

  



    </>
  )
}

export default Cal;
