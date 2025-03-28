import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'tareas',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        }
    }
});


export const { addTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
