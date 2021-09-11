import React from "react";

const CheckboxSeventh = () => {
    const[display, setDisplay] = React.useState(false)

    const handleSquareDisappear = () => setDisplay(!display)

    return (
        <>
            <input type="checkbox" onChange={handleSquareDisappear} />
            {display && (
                <div style={{width: '100px', height: '100px', backgroundColor: 'red'}} />
            )}
        </>
    )
}

export default CheckboxSeventh
