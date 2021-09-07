import React from "react";

const CheckboxSeventh = () => {
    const[display, setDisplay] = React.useState('flex')
    const handleSquareDisappear = () => {
        setDisplay(display => display === 'flex' ? 'none' : 'flex')
    }

    return (
        <>
            <input type="checkbox" onChange={handleSquareDisappear} />

            <div style={{width: '100px', height: '100px', backgroundColor: 'red', display: display}}>Red block</div>
        </>
    )
}

export default CheckboxSeventh