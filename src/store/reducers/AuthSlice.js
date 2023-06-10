import { createSlice } from '@reduxjs/toolkit'
import { login, logout, register } from '../../api/authThunks'
export const initialState = {
  user: localStorage.getItem('user'),
  loading: false,
  isAuthenticated: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuth: (state, { payload }) => {
      state.user = payload.user
      state.isAuthenticated = payload.isAuthenticated
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending.type, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled.type, (state, { payload }) => {
      state.loading = false
      state.user = payload
      state.isAuthenticated = true
    })
    builder.addCase(login.rejected.type, (state) => {
      state.loading = false
      state.isAuthenticated = false
    })
    builder.addCase(logout.fulfilled.type, (state) => {
      state.isAuthenticated = false
      state.user = null
    })
    builder.addCase(logout.rejected.type, (state) => {
      state.isAuthenticated = false
      state.user = null
    })
    builder.addCase(register.pending.type, (state) => {
      state.loading = true
    })
    builder.addCase(register.fulfilled.type, (state, { payload }) => {
      state.loading = false
      state.user = payload
      state.isAuthenticated = true
    })
    builder.addCase(register.rejected.type, (state) => {
      state.loading = false
      state.isAuthenticated = false
    })
  }
})
export const authActions = authSlice.actions

export default authSlice.reducer
