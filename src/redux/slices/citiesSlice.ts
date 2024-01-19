import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/* import type { PayloadAction } from '@reduxjs/toolkit' */

// Define a type for the slice state
interface ICities {
  id: number,
  name: string,
  sys: {
    country: string,
  },
  main: {
    temp: number
  },
  weather: [{
    description: string
  }]
}


// Define the initial state using that type
const initialState: ICities[] = []

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {

    saveCity: (state, action: PayloadAction<ICities>) => {
      state.push(action.payload)
      state.length > 1 ? state.shift() : null
    },

    convertTemperature: (state, action) => {

    }
    // Use the PayloadAction type to declare the contents of `action.payload`

  },
})

export const { saveCity, convertTemperature } = citySlice.actions
export default citySlice.reducer


/* const initialState = {
  name: "",
  username: "",
  email: ""
}

export const userSlice = createSlice({
  name: "user", //nombre de la porcion a la que queremos acceder desde los componentes para modificar su estado
  initialState,
  reducers: { //acciones que van a modificar el estado
    addUser: (state, action) => {
      const { name, username, email } = action.payload;//datos que nos llegan desde en payload de la accion que despachamos en un componente
      state.name = name
      state.username = username
      state.email = email
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    }
  }
})

export const { addUser, changeEmail } = userSlice.actions
export default userSlice.reducer */