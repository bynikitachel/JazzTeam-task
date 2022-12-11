import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    notes:[]
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNote: (state, action) => {
            console.log('state', state)
            const {date, text } = action.payload
            state.notes = [...state.notes, {date, text }]
        }
    },
});

export const {setNote} = notesSlice.actions;

export default notesSlice.reducer;