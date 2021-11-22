import { createSlice } from '@reduxjs/toolkit';

export const connectSlice = createSlice({
    name: 'connect',
    initialState: {
        connectionState: false,
        signerAddress: "",
        signerBalance: ""
    },
    reducers: {
        SET_CONNECT: (state, payload) => {
            state.connectionState = payload.payload
        },
        SET_ADDRESS: (state, payload) => {
            state.signerAddress = payload.payload
        },
        SET_BALANCE: (state, payload) => {
            state.signerBalance = payload.payload
        },
    }
})

export const { SET_CONNECT, SET_ADDRESS, SET_BALANCE } = connectSlice.actions

export default connectSlice.reducer