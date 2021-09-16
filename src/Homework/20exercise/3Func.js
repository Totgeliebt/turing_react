import React, { useRef } from 'react'

const Third = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const height = [100, 200, 300]
    return (
        <>
            {height.map((size, index) => (
                <Content
                    key={index}
                    size={size}
                    text={text}
                />
            ))}
        </>
    )
}

const Content = ({size, text}) => {
    const heightRef = useRef()
    const [fontSize, setFontSize] = React.useState('')

    React.useEffect(() => {
         if(heightRef.current.clientHeight === 100) {
             setFontSize(15)
         } else if(heightRef.current.clientHeight === 200) {
             setFontSize(20)
         } else {
             setFontSize(30)
         }
    }, [])

    return (
        <>
        <div ref={heightRef} style={{height: `${size}px`, fontSize: `${fontSize}px`, backgroundColor: 'green'}}>
            {text}
        </div>
            <br/>
            <br/>
        </>
    )
}

export default Third