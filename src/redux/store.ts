import { configureStore } from '@reduxjs/toolkit'
import { WeatherDataSlice } from './slices/weatherDataSlice'

export const store = configureStore({
  reducer: {
    weatherData: WeatherDataSlice.reducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch