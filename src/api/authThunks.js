import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth/'

export const login = createAsyncThunk('auth/login', async (data) => {
  const response = await axios.post(`${API_URL}login`, data)
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  console.log(response, data)
  return response.data
})

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await axios.post(`${API_URL}logout`)
  if (!response.data.accessToken) {
    localStorage.removeItem('user')
  }
  console.log(response)
})

export const register = createAsyncThunk('auth/registerr', async (data) => {
  const response = await axios.post(`${API_URL}signup`, data)
  console.log(response, data)
  return response.data
})
