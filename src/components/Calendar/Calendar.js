import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import './myCalendar.css'
import { MonthContext } from '../Months/Month';
import { useContext } from 'react';
import { useState } from 'react';
import PastCeleb from '../PastCelebrations/PastCeleb'
import {ListingContext} from '../Listing/Listing'


const Calendar=({items,dataReceiver})=> {

  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(0);

  const {myData} = useContext(ListingContext)
  const [data,setData]= React.useState([])

  const uniqueMonth =[...new Set(items.map(item=>item.month))]
  const currentMonth = uniqueMonth[0]

  
  const {monthData} = useContext(MonthContext)

  const {monthDays} = useContext(MonthContext)

  const [next,setNext]= useState([])
  const [prev, setPrev]=useState([])
  const [past,setPast]=useState()
const [current, setCurrent]= useState()

 
useEffect(() => { 


  setCurrent(currentMonth)
    //Previous Month
    for(let i=0;i<myData.length;i++)
    {
      if(myData[i].month === current)
      {
        var firstOne= myData.findIndex((item)=>item.month === current)
        var prev=firstOne-1
       if(firstOne < 0)
       {
         prev =myData.length-1
       }
      //  else if(firstOne >= mydata.length)
      //  {
      //   prev =0
      //  }       
        var value = myData[prev].month.toString()
        var previous = myData.filter(item => item.month === value)
        setPast(previous)
        
      }
    }     
    
 
}, [currentMonth, myData])
    
  
  var days =(items.map(item=> {return item.day}))
  

  useEffect(() => {
   callGetApi()
  }, [])

  

  const callGetApi=async()=>{
    const response = await axios.get("https://646476cc127ad0b8f89f469a.mockapi.io/days")
    setData(response.data)
  }

  const prevMonth = () => {
    setMonth(prevMonth => prevMonth - 1);
  };

  const nextMonth = () => {
    setMonth(prevMonth => prevMonth + 1);
  };

  const handleLeft=()=>{   
    monthData.map((item,index)=>{ 
    
      if(item.month === current)  
      {
        let prevIndex= index-1
        if(prevIndex < 0)
        {
          prevIndex = monthData.length-1
        }
        const myPrev = monthData[prevIndex].month
        setCurrent(myPrev)
        dataReceiver(myPrev)              
      }
   })

   //
   myData.map((item,index)=>{
    if(item.month ===  current)
    {
      var firstOne= myData.findIndex((item)=>item.month === current)
      var previousIndex = firstOne-1
      if(previousIndex < 0)
      {
        previousIndex = myData.lenght-1
        
      }

      var value = myData[previousIndex].month.toString()
      console.log("avalue",value);
      var previous = myData.filter(item => item.month === value)
      if(previous < 0 )
      {
        var data =myData.length-1
         previous = data.filter(item => item.month === value)
      }
      console.log("calnedarspreviousIndex",previous)
      setPast(previous)

    }

   })


  //  for(let i=0;i<myData.length;i++)
  //  {
  //    if(myData[i].month === current)
  //    {
  //      var firstOne= myData.findIndex((item)=>item.month === current)
  //      console.log("firstONe",firstOne);
  //      var prev=firstOne-1
  //     if(prev < 0)
  //     {
  //       prev =myData.length-1
  //     }
 
  
  //      var value = myData[prev].month.toString()
  //      var previous = myData.filter(item => item.month === value)
  //      setPast(previous)
  //    }
  //  }     

   //For Past Celebration
  //  myData.map((item,index,array)=>{
  //   if(myData[index].month === current){
  //     var firstOne = myData.findIndex((item)=>item.month === current)
  //     var prev=firstOne-1
  //    if(firstOne < 0)
  //    {
  //     prev =myData.length-1
  //   }
  //   var value = myData[prev].month.toString()
  //   var previous = myData.filter(item => item.month === value)
  //   setPast(previous)
  //   }
  //  })
    
  }         
  const handleRight=()=>{       
    
    monthData.map((item,index)=>{ 
    
      if(item.month === current)  
      {
        let nextIndex= index+1
        if(nextIndex >= 12)
        {
          nextIndex = 0
        }
        const myNext = monthData[nextIndex].month
        setCurrent(myNext)     
        dataReceiver(myNext)   
      }

   })

   //for past
   for(let i=0;i<myData.length;i++)
   {
     if(myData[i].month === current)
     {
       var firstOne= myData.findIndex((item)=>item.month === current)
       var prev=firstOne-1
      if(firstOne < 0)
      {
        prev =myData.length-1
      }
     //  else if(firstOne >= mydata.length)
     //  {
     //   prev =0
     //  }       
       var value = myData[prev].month.toString()
       var previous = myData.filter(item => item.month === value)
       setPast(previous)
     }
   }     

  }

  

  return (
    
    <>
    {console.log("days",days )}

<div className="myCalCont">
<div  className="table"> 

    <div className='monthdisplay'>                 
    <h4 className="calHead">{current}  2023</h4>
      <span>
      <i className="bi bi-chevron-left left" onClick ={handleLeft}></i>
      <i className="bi bi-chevron-right right"  onClick={handleRight}></i>        
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
          <div
            key={index} className={`calendar-day ${day === '' ? 'empty-day' : ''} ${monthDays.includes(days) ? 'highlight' : ''}`}

          >
            {day}
          </div>
        ))}
      </div>

  </div>
  <PastCeleb myPast={past}/>
  </div> 

   

    </>
  );
}
export default Calendar











