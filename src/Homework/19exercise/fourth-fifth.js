import React from "react";

let count = 3
console.log(Date())
const OrderedListFourth = () => {
    const [valueText, setValueText] = React.useState('')
    const [id, setId] = React.useState('')
    const [item, setItem] = React.useState([
        {id: 1, name: 'First item'},
        {id: 2, name: 'Second item'},
        {id: 3, name: 'Third item'}
    ])

    const handleInputChange = (event) => {
        setValueText(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setItem([...item, {id: count+=1, name: valueText}])
        setValueText('')
    }

    const handleDeleteElem = (event) => {
        setId(Number(event.target.value))
    }

    const handleFormSubmitDelete = (event) =>  {
        event.preventDefault()
        setItem(item.filter(elem => {
            if(elem.id !== id) {
                return elem
            } else {
                return null
            }
        }))
        setId('')
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleInputChange} value={valueText} /><br/>
                <button>Add elem</button>
                <ol>
                    {item.map(elem => <li key={elem.id}>{elem.name}</li>)}
                </ol>
            </form>
            <form onSubmit={handleFormSubmitDelete}>
                <input type="number" onChange={handleDeleteElem} value={id} /><br/>
                <button>Delete elem</button>
            </form>
        </>
    )
}

export default OrderedListFourth