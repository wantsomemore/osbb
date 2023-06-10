import { combineReducers, configureStore, createListenerMiddleware } from '@reduxjs/toolkit'

// import reducers
import authReducer from './reducers/AuthSlice'
const rootReducer = combineReducers({
  authReducer,
})

const listenerMiddleware = createListenerMiddleware()

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  })

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
