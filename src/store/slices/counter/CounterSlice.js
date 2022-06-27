import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    page : 1
}


export const CounterSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        increment: (state) =>{
            state.page += 1
        },
        decrement: (state)=>{
            state.page -= 1
        },
        reset: (state,action)=>{
            state.page = initialState.page
        }

    }
});


// Action creators are generated for each case reducer function
export const {increment,decrement,reset} = CounterSlice.actions;