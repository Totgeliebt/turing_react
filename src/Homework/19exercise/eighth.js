import React from "react";

const SelectEighth = () => {
    const eight = 8
    const sixteen = 16
    const twentyFour = 24
    const thirtySix = 36

    const [selectSize, setSelectSize] = React.useState(eight)
    const handleTextSize = (event) => {
        setSelectSize(event.target.value)

    }
    return(
        <>
            <p style={{fontSize: `${selectSize}px`}}>Lorem ipsum</p>
            <select onChange={handleTextSize} value={selectSize}>
                <option value={eight}>Шрифт {eight} px</option>
                <option value={sixteen}>Шрифт {sixteen} px</option>
                <option value={twentyFour}>Шрифт {twentyFour} px</option>
                <option value={thirtySix}>Шрифт {thirtySix} px</option>
            </select>
        </>
    )
}

export default SelectEighth