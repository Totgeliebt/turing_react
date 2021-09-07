import React from "react";

const InputSecond = () => {
    const [text, setText] = React.useState('')
    const handleChangeInput = (event) => {
        event.preventDefault()
        setText(event.target.value)

    }


    const handleShowAlert =() => {
        alert(text.length)
    }
    return (
        <>
            <input onChange={handleChangeInput} value={text}/>
            <button onClick={handleShowAlert}>Click me</button>
        </>
    )
}

export default InputSecond