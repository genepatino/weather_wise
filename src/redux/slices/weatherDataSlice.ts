import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface IWeatherApp {
  cityData: {
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
  },
  isFahrenheitTrue: boolean,
  isESTranslation: boolean,
  loading: boolean
}


// Define the initial state using that type
const initialState: IWeatherApp = {
  cityData: {
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
    },
  },
  isFahrenheitTrue: false,
  isESTranslation: true,
  loading: true
}


export const WeatherDataSlice = createSlice({
  name: 'WeatherData',
  initialState,
  reducers: {
    saveCity: (state, action) => {
      state.cityData = action.payload
    },

    setTemperatureCelsius: (state, action) => {
      state.cityData.main.temp = action.payload
    },

    setTemperatureFahrenheit: (state, action) => {
      state.cityData.main.temp = action.payload
    },

    modifyMetricUnitChange: (state) => {
      state.isFahrenheitTrue = !state.isFahrenheitTrue
    },

    modifyModeTranslation: (state) => {
      state.isESTranslation = !state.isESTranslation
    },
    setLoadingFalse: (state) => {
      state.loading = false
    }
  },
})



export const { saveCity, setTemperatureCelsius, setTemperatureFahrenheit, modifyMetricUnitChange, modifyModeTranslation, setLoadingFalse } = WeatherDataSlice.actions
export default WeatherDataSlice.reducer
