import { configureStore } from '@reduxjs/toolkit'
import { citySlice } from './slices/citiesSlice'
import { temperatureUnitsSlice } from './slices/temperatureUnitsSlice'

export const store = configureStore({
  reducer: {
    city: citySlice.reducer,
    temperatureUnits: temperatureUnitsSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch