import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        list: [],
    },
    reducers: {
        deleteElem: (state, action) => {
            state.list = state.list.filter(value => value.id !== action.payload)
        },
        addElem: (state, action) => {
            state.list = [...state.list, action.payload]
        },
        updateElem: (state, action) => {
            state.list = state.list.map(elem => elem.id === action.payload.id ? {...elem, value: action.payload.value} : elem)
        },
        fill: (state, action) => {
            state.list =  action.payload
        },
    },
})


export const  { deleteElem, addElem, updateElem, fill } = toDoSlice.actions
export default toDoSlice.reducer