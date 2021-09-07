import React from "react";

const TwoInputsThird = () => {

    const [num1, setNum1] = React.useState('')
    const [num2, setNum2] = React.useState('')

    const handleSum = () => {
        alert(+num1 + +num2)
    }

    const handleChangeInput1 = (event) => {
        event.preventDefault()
        setNum1(event.target.value)
    }
    const handleChangeInput2 = (event) => {
        event.preventDefault()
        setNum2(event.target.value)
    }
    return (
        <>
            <input onChange={handleChangeInput1} value={num1} type="number"/><br/>
            <input onChange={handleChangeInput2} value={num2} type="number"/><br/>
            <button onClick={handleSum}>Calc sum</button>
        </>
    )
}

export default TwoInputsThird