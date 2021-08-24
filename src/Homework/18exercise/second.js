import React from 'react'

const ListItemSec = () => {

    const [item, setItem] = React.useState([
        {id: 1, value: 'First item'},
        {id: 2, value: 'Second item'},
        {id: 3, value: 'Third item'}
    ])
    console.log(item)
    let itemLength = item.length
    const showPrompt = () => {
        setItem(
            [...item, {id: itemLength + 1, value: prompt('')}]
        )
    }
    const showPromptAbove = () => {
        setItem(
            [{id: itemLength + 1, value: prompt('')}, ...item]
        )
    }
    const showPromptMiddle = () => {
        const index = itemLength/2
        const subArray1 = item.slice(0, index)
        const subArray2 = item.slice(index)
        setItem(
            [...subArray1, {id: index, value: prompt('')},...subArray2]
        )
    }
        const handleRemoveFirstItem = () => {
            item.shift()
            setItem([...item])
    }
    const handleRemoveLastItem = () => {
        item.pop()
        setItem([...item])

    }

    const handleRemoveMiddleItem = () => {
        const index = itemLength/2
        const subArray1 = item.slice(0, index)
        const subArray2 = item.slice(index)
        subArray2.shift()
        setItem(
            [...subArray1,...subArray2]
        )

    }
    return (
        <>
            <button onClick={() => handleRemoveFirstItem()}>Remove first item </button>
            <button onClick={() => handleRemoveLastItem()}>Remove last item</button>
            <button onClick={() => handleRemoveMiddleItem()}>Remove middle item</button>
            <ul>
                {item.map((elem, index) => {
                    return (
                        <li>{elem.value}</li>)
                })}
            </ul>
            <button onClick={() => showPromptAbove()}>Add item above</button>
            <button onClick={() => showPrompt()}>Add item below</button>
            <button onClick={() => showPromptMiddle()}>Add item in the middle</button>


        </>
    )
}

export default ListItemSec;