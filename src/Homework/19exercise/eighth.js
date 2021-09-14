import React from "react";

const SelectEighth = () => {
    const options = [8, 16, 24, 36]

    const [selectSize, setSelectSize] = React.useState(8)
    const handleTextSize = (event) => {
        setSelectSize(event.target.value)

    }
    return(
        <>
            <p style={{fontSize: `${selectSize}px`}}>Lorem ipsum</p>
            <select onChange={handleTextSize} value={selectSize}>
                {options.map((size, index) => (<option value={size}>Шрифт {size} px</option>))}
            </select>
        </>
    )
}

export default SelectEighth