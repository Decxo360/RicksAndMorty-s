import { configureStore } from '@reduxjs/toolkit'
import { CounterSlice } from './slices/counter/CounterSlice'
import {ricksAndMortysApi} from './api/RicksAndMortys'

export const store = configureStore({
reducer:{
    counter: CounterSlice.reducer,
    [ricksAndMortysApi.reducerPath]: ricksAndMortysApi.reducer,
},
middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(ricksAndMortysApi.middleware)
})
