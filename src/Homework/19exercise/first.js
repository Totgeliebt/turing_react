import React from 'react'
import {findByDisplayValue} from "@testing-library/react";

const TextAreaFirst = () => {

    const [textArea, setTextArea] = React.useState('')

    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value)
    }

    return (
        <>
        <textarea value={textArea} onChange={handleTextAreaChange}>Введите текст</textarea>
        <p>Здесь будет выводиться текст: {textArea}</p>
        </>
    )
}

const InputSecond = () => {
const [text, setText] = React.useState('')
const handleChangeInput = (event) => {
    event.preventDefault()
    setText(event.target.value)

}


const handleShowAlert =() => {
    alert(text.length)
}
    return (
        <>
        <input onChange={handleChangeInput} value={text}/>
        <button onClick={handleShowAlert}>Click me</button>
        </>
    )
}

const TwoInputsThird = () => {

const [num1, setNum1] = React.useState('')
const [num2, setNum2] = React.useState('')

 const handleSum = () => {
      alert(+num1 + +num2)
 }

    const handleChangeInput1 = (event) => {
        event.preventDefault()
        setNum1(event.target.value)
}
    const handleChangeInput2 = (event) => {
        event.preventDefault()
        setNum2(event.target.value)
    }
    return (
        <>
            <input onChange={handleChangeInput1} value={num1} type="number"/><br/>
            <input onChange={handleChangeInput2} value={num2} type="number"/><br/>
            <button onClick={handleSum}>Calc sum</button>
        </>
    )
}


let count = 3
console.log(Date())
const OrderedListFourth = () => {
    const [valueText, setValueText] = React.useState('')
    const handleInputChange = (event) => {
        setValueText(event.target.value)
    }

    const [item, setItem] = React.useState([
        {id: 1, name: 'First item'},
        {id: 2, name: 'Second item'},
        {id: 3, name: 'Third item'}
    ])

    console.log(item)
    const handleFormSubmit = (event) => {
        event.preventDefault()
        setItem([...item, {id: count+=1, name: valueText}])
        setValueText('')
        console.log('count from function:', count)
    }
    console.log('count from component:', count)
    const [id, setId] = React.useState('')
    console.log('useState')
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

const FormSixth = () => {
    const login = 'qwerty'
    const password = '1234'

    const [loginValue, setLoginValue] = React.useState('')
    const handleInputChangeLogin = (event) => {
       setLoginValue(event.target.value)
    }
    const [passwordValue, setPasswordValue] =  React.useState('')
    const handleInputChangePassword = (event) => {
        setPasswordValue(event.target.value)
    }

    const [error, setError] = React.useState('')

    const handleFormSubmit = (event) => {
        console.log('handleFormSubmit')
        event.preventDefault()

        if(loginValue===login && passwordValue===password) {
            setError('')
           return alert('Вы успешно авторизировались')
        } else {
            setError('Ошибка')
        }

    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Введите Логин" onChange={handleInputChangeLogin} value={loginValue}/>
            <input type="password" placeholder="Введите Пароль" onChange={handleInputChangePassword} value={passwordValue}/>
           <p>{error}</p>
            <button>Войти</button>
        </form>
    ) 
}

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

const FormNinth = () => {
    const [value, setValue] = React.useState('')
    const handleInputChange = (event) => {
        setValue(event.target.value)
    }
    const [option, setOption] = React.useState([])
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

