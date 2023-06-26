// import {createSlice} from '@reduxjs/toolkit'

// export const saveSlice = createSlice({
//     name:"save",
//     initialState:{
//         value:{
//             title:'',
//             img:"",
//             description:''
//         }
//     },

//     reducers:{
//         saveProject:(state,action)=>{
//             state.value = action.payload
//         }
//     }

// }) 

// export const {saveProject}= saveSlice.actions
// export default saveSlice.reducer

import {createSlice} from '@reduxjs/toolkit'

export const saveSlice= createSlice({
    name:"save",
    initialState:{
        projects:[],
    },
    reducers:{
        saveProject:(state,action)=>{
        state.projects.push(action.payload)          
        },
        removeProject:(state,action)=>{
            const projectId = action.payload;
            state.projects = state.projects.filter((project)=> project.id !== projectId )
        }
    }
})

export const {saveProject,removeProject} = saveSlice.actions
export default saveSlice.reducer