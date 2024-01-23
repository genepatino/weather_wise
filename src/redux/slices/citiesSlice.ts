import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/* import type { PayloadAction } from '@reduxjs/toolkit' */

// Define a type for the slice state
interface ICity {
  id: number,
  name: string,
  sys: {
    country: string,
    sunrise: number,
    sunset: number
  },
  main: {
    temp: number,
    humidity: number,
    pressure: number,
  },
  weather: [{
    description: string
  }],
  wind: {
    speed: number
  }
}


// Define the initial state using that type
const initialState: ICity = {
  id: 0,
  name: "Bogota",
  sys: {
    country: "CO",
    sunrise: 0,
    sunset: 0
  },
  main: {
    temp: 290.88,
    humidity: 44,
    pressure: 1027,
  },
  weather: [
    {
      description: "Few clouds"
    }
  ],
  wind: {
    speed: 2.28
  }
}


export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {

    saveCity: (state, action: PayloadAction<ICity>) => {
      const { id, name, sys, main, weather, wind } = action.payload
      state.id = id,
        state.name = name,
        state.sys = sys,
        state.main = main,
        state.weather = weather,
        state.wind = wind

    },

    setTemperature: (state, action) => {
      state.main.temp = action.payload
    }

    // Use the PayloadAction type to declare the contents of `action.payload`

  },
})

export const { saveCity, setTemperature } = citySlice.actions
export default citySlice.reducer
