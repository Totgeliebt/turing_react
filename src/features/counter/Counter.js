import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
// import styles from './Counter.module.css'

const Counter = () => {
    const [inputValue, setInputValue] = React.useState('')

    const dispatch = useDispatch()

    // localStorage.setItem('newTest')
    // localStorage.getItem('newTest')



    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <input value={inputValue}
                       onChange={(event)=> setInputValue(event.target.value)}/>
                <button onClick={() => dispatch(incrementByAmount(parseInt(inputValue)))}>Add value</button>
            </div>
        </div>
    )
}
export default Counter