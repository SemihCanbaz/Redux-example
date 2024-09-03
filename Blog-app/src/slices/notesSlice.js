import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",
    initialState: { items: [], filter: "all" },
    reducers: {
        addNote: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleNote: (state, action) => {
            const note = state.items.find((note) => note.id === action.payload);
            if (note) note.completed = !note.completed;
        },
        removeNote: (state, action) => {
            state.items = state.items.filter(
                (note) => note.id !== action.payload
            );
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { actions, reducer } = notesSlice;
export default reducer;
