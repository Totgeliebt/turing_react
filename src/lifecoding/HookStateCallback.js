import React from 'react'

const Counter = () => {

    const [value, setValue] = React.useState(0)
    const handleButtonClick = () => {
       for(let i=0; i < 10; i++) {
           console.log(i)
           setValue(val => val + 1)
       }
        // console.log(value)

    }
    return (
        <button onClick={handleButtonClick}>value: {value}</button>
    )

}
export default Counter