import { createSlice } from "@reduxjs/toolkit"

const categories = [{id:1, name:'All'},
                    {id:1, name:'Php'},
                    {id:1, name:'Js'},
                    {id:1, name:'Dot.net'},]

export const category = createSlice({
    name: "category", 
    initialState: categories, 
    reducers: {

    }
})

export default category.reducer