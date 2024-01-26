import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFahrenheitTrue: true
}

export const temperatureUnitsSlice = createSlice({
  name: 'temperatureUnits',
  initialState,
  reducers: {
    modifyMetricUnitChange: (state) => {
      state.isFahrenheitTrue = !state.isFahrenheitTrue
    }
  },
})

export const { modifyMetricUnitChange } = temperatureUnitsSlice.actions
export default temperatureUnitsSlice.reducer