import { createSlice } from "@reduxjs/toolkit";



const initialState = false ;

export const loading = createSlice({
    name:'loading',
    initialState: initialState,
    reducers:{
         updateLoading : (state,action ) => {

             return !state ;

         },
    }

})

export const { updateLoading } = loading.actions ; 

export default loading.reducer
