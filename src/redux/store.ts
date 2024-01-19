import { configureStore } from '@reduxjs/toolkit'
import { citySlice } from './slices/citiesSlice'
//import citiesReducer from './slices/citiesSlice'

export const store = configureStore({
  reducer: {
    city: citySlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch