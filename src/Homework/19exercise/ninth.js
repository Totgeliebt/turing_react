import React from "react";

const FormNinth = () => {
    const [value, setValue] = React.useState('')
    const [option, setOption] = React.useState([])

    const handleInputChange = (event) => {
        setValue(event.target.value)
    }

    const handleAddOption = () => {
        setOption([...option, {name: value}])
        setValue('')
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleInputChange} type="text" value={value}/>
            <button type="button" onClick={handleAddOption}>Add new option</button>
            <select>
                {option.map(elem => <option>{elem.name}</option>)  }
            </select>
        </form>
    )
}
export default FormNinth