import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
export default userSlice.reducer