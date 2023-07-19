import { createSlice } from "@reduxjs/toolkit";


const itemData = [
    {
      id:"1",
      img: 'https://i.ibb.co/3T9Jgym/3.jpg',
      title: 'Environment Day',
      isSubmitted:false,
      
    },
    {
      id:"2",
      img: 'https://i.ibb.co/LYfXK0M/4.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"3",
      img: 'https://i.ibb.co/XzThnDQ/5.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"4",
      img: 'https://i.ibb.co/8Y6fRkz/7.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"5",
      img: 'https://i.ibb.co/8M3n4Ff/8.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"6",
      img: 'https://i.ibb.co/mRp0kJL/9.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"7",
      img: 'https://i.ibb.co/NL4wr2G/10.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"8",
      img: 'https://i.ibb.co/YfTVTH5/11.jpg',
      title: 'Fathers Day',
      isSubmitted:false
    },
    {
      id:"9",
      img: 'https://i.ibb.co/kcrqtcQ/13.jpg',
      title: 'Yoga Day',
      isSubmitted:false
    },
    {
      id:"10",
      img: 'https://i.ibb.co/5FxJ6kY/14.jpg',
      title: 'Yoga Day',
      isSubmitted:false
    },
    {
      id:"11",
      img: 'https://i.ibb.co/JKw1zQP/15.jpg',
      title: 'Yoga Day',
      isSubmitted:false
    },
    {
      id:"12",
      img: 'https://i.ibb.co/9ZQdVdv/17.jpg',
      title: 'Bakrid Day',
      isSubmitted:false
    },
    {
      id:"13",
      img: 'https://i.ibb.co/jH47C88/18.jpg',
      title: 'Bakrid Day',
      isSubmitted:false
    },
    {
      id:"14",
      img: 'https://i.ibb.co/pbGpdpL/19.jpg',
      title: 'Bakrid Day',
      isSubmitted:false
    },
    {
      id:"15",
      img: 'https://i.ibb.co/SXS6TZR/20.jpg',
      title: 'Bakrid Day',
      isSubmitted:false
    },
    {
      id:"16",
      img: 'https://i.ibb.co/kgzcKfN/22.jpg',
      title: 'Chocolate Day',
      isSubmitted:false
    },
    {
      id:"17",
      img: 'https://i.ibb.co/0Zp8v8W/23.jpg',
      title: 'Chocolate Day',
      isSubmitted:false
    },
    {
      id:"18",
      img: 'https://i.ibb.co/qRBgGQ7/24.jpg',
      title: 'Chocolate Day',
      isSubmitted:false
    },
    {
      id:"19",
      img: 'https://i.ibb.co/tc26Vp2/25.jpg',
      title: 'Chocolate Day',
      isSubmitted:false
    }
  ];
  let imageId=19

export const challengeSlice  = createSlice({
    name:"challenge",
    initialState:{
        challenges:itemData.map((item)=>({
          ...item,
          userId:1
        })),
    },
    reducers:{
        saveChallenges:(state,action)=>{
          const challenges = action.payload.map((challenge)=>{
            if(typeof challenge.img === "object"){
              return{
                id:imageId++,
                img:URL.createObjectURL(challenge.img),
                title:challenge.title,
                userId:1,
                isSaved:false
              }
            }
            return challenge
          });
          state.challenges.push(...challenges)
        }
    }
})

export const {saveChallenges} = challengeSlice.actions
export default challengeSlice.reducer