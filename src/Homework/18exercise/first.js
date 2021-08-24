import React from 'react'

const ListItem = ({text}) => {

    const showAlert = (text) => {
        console.log()
        alert(text)
    }
    const [item, setItem] = React.useState([
        {id: 1, value: 'First item'},
        {id: 2, value: 'Second item'},
        {id: 3, value: 'Third item'}
    ])
    return (
        <>
            <ul>
                {item.map((elem, index) => {
                    return (
                        <>
                            <li key={elem.id}>{elem.value}
                                <button onClick={() => showAlert(elem.value)}>Show alert</button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default ListItem;