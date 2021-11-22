import { configureStore } from '@reduxjs/toolkit'
import conncetReducer from '../action/reducer/connectReducer'

export default configureStore({
    reducer: {
        connected: conncetReducer,
    },
})