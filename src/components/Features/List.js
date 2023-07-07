import { createSlice } from "@reduxjs/toolkit";

export const ListingSlice = createSlice({
    name:"listing",
    initialState:{
        value:{
            id:'',
            title:'',
            img:'',
            description:'',
            day:'',
            month:'',
            isSaved:''
        }
    },
    reducers:{
        popUp:(state,action)=>{
            state.value= action.payload
        }
    }

})

export const {popUp} = ListingSlice.actions
export default ListingSlice.reducer