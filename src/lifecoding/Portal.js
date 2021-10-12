import React from 'react'
import ReactDOM from 'react-dom'
const SomeBlock = ({color}) => {
    return (
        <div style={{width: '200px', height: '200px', backgroundColor: color}}>
            It is some block
        </div>
    )
}

const Main =() => {
    const[color, setColor] = React.useState('red')
    const handleButtonBlock = () =>
        setColor(color => color === 'red' ? 'blue' : 'red')

    const portalElem = React.useMemo(() => {
        const bodyElem = document.querySelector('body')
        return ReactDOM.createPortal(<SomeBlock color={color}/>, bodyElem)
    }, [color])
    return (
        <div id="main" onClick={handleButtonBlock}>

            <div>
                {/*<SomeBlock color={color}/>*/}
                {portalElem}
            </div>
              <button>Click me</button>
        </div>
    )
}
export default Main