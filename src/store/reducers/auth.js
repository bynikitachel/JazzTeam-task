import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorised: false,
        user: null,
        password: null,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isAuthorised = action.payload
        },
    },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
