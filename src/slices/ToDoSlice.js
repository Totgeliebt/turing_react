import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        list: [{id: 0, value: 'First initial record STORE'}],
        newId: 1
    },
    reducers: {
        deleteElem: (state, action) => {
            state.list = state.list.filter(value => value.id !== action.payload)
        },
        addElem: (state, action) => {
            state.list = [...state.list, {id: state.newId++, value: action.payload}]
        },
        updateElem: (state, action) => {
            state.list = state.list.map(elem => elem.id === action.payload.id ? {...elem, value: action.payload.value} : elem)
        }
    },
})


const array = [3,5,2,6,8]

const result = array.map(elem => elem * elem)
console.log({result})

const resultLodash = _.map(array, elem => elem * elem)
console.log({result, resultLodash})



export const  { deleteElem, addElem, updateElem } = toDoSlice.actions
export default toDoSlice.reducer