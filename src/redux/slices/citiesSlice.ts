import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ICity {
  id: number | null,
  name: string,
  sys: {
    country: string,
    sunrise: number | null,
    sunset: number | null
  },
  main: {
    temp: number,
    humidity: number | null,
    pressure: number | null,
  },
  weather: [{
    description: string
  }],
  wind: {
    speed: number | null
  }
}


// Define the initial state using that type
const initialState: ICity = {
  id: null,
  name: "",
  sys: {
    country: "",
    sunrise: null,
    sunset: null
  },
  main: {
    temp: 0,
    humidity: null,
    pressure: null,
  },
  weather: [
    {
      description: ""
    }
  ],
  wind: {
    speed: null
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

    setTemperatureCelsius: (state, action) => {
      state.main.temp = action.payload
    },

    setTemperatureFahrenheit: (state, action) => {
      state.main.temp = action.payload
    }
  },
})

export const { saveCity, setTemperatureCelsius, setTemperatureFahrenheit } = citySlice.actions
export default citySlice.reducer
