import React from 'react'
const CounterForm = () => {
    const [value, setValue] = React.useState('')
    const [counter, setCounter] = React.useState(1)

    const handleSubmit = (event) => {
        event.preventDefault()
        setValue(event.target.someInput.value)
    }

    const symbolCount = React.useMemo( () => {
        console.log('use memo is called')
        return value.length}, [counter])

    console.log('render counterform')


    const handleCounterClick = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>{symbolCount}</div>
                <div>
                    <input name="someInput"/>
                </div>
                <button>Submit</button>
            </form>
                <button onClick={handleCounterClick}>Counter: {counter}</button>
        </>
    )
}

export default CounterForm