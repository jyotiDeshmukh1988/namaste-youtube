import { createSlice } from "@reduxjs/toolkit";

const categoryFilterSlice = createSlice({
    name:'categoryvideos',
    initialState:{
        category:[]
    },
    reducers:{
        addVideos:(state,action)=>{
            state.category = action.payload;
        }
    }
})

export default categoryFilterSlice.reducer;
export const {addVideos} = categoryFilterSlice.actions;