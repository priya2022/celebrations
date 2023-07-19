import { createSlice } from "@reduxjs/toolkit";



export const featureslice  = createSlice({
    name:"feature",
    initialState:{
        features:[],
    },
    reducers:{
        FeaturedProject:(state,action)=>{
          state.features.push(action.payload)
        }
    }
})

export const {FeaturedProject} = featureslice.actions
export default featureslice.reducer