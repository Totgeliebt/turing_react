import React from 'react'


const TextAreaFirst = () => {

    const [textArea, setTextArea] = React.useState('')

    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value)
    }

    return (
        <>
            <textarea value={textArea} onChange={handleTextAreaChange}>Введите текст</textarea>
            <p>Здесь будет выводиться текст: {textArea}</p>
        </>
    )
}

export default TextAreaFirst









