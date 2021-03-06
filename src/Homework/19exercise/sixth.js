import React from "react";

const FormSixth = () => {
    const login = 'qwerty'
    const password = '1234'

    const [loginValue, setLoginValue] = React.useState('')
    const [passwordValue, setPasswordValue] =  React.useState('')
    const [error, setError] = React.useState('')

    const handleInputChangeLogin = (event) => {
        setLoginValue(event.target.value)
    }

    const handleInputChangePassword = (event) => {
        setPasswordValue(event.target.value)
    }

    const handleFormSubmit = (event) => {
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

export default FormSixth