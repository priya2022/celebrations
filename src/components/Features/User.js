import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{

        value:{
            firstName:'',
            lastName:'',
            // confirmPassword:'',
            email:'',
            password:'',
            
        }
       
    },
    reducers:{
        signUp:(state,action)=>{
            state.value= action.payload
        },
        login:(state,action)=>{
            state.value= action.payload
        },
        logout:(state,action)=>{
            state.value ={name:'',age:0,email:'',password:'',confirmPassword:''}
        }
    }
})

export const {signUp,login,logout}= userSlice.actions
export default userSlice.reducer