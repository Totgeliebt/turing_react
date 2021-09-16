import React, {useRef, useState} from "react";

const FirstFocus = () => {
    const [text, setText] = useState('')
    const input = useRef('')
    const handleBlur = (e) => {
        if (e.target.value === 'Hello World!') {
            input.current.blur();
        }
        setText(e.target.value)
    }

    return (
        <div>
            <input onChange={handleBlur} ref={input} type="text" value={text}/>
            <button onClick={() => {input.current.focus()}}>FOCUS INPUT</button>
        </div>
    )
}
export default FirstFocus