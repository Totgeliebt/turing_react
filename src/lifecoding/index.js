import React from 'react'

const ListItem = ({text, index}) => {
    return (
        // <li>{text} : {index}</li>
        <>
            <br/>
        <input name={text} />
        </>
    )
}

class List extends React.Component {

    state = {
        inputs: [
            {id: 1, value: 'First input'},
            {id: 2, value: 'Second input'},
            {id: 3, value: 'Third input'}
        ]
    }

    // handleAddInput =() => {
    //     console.log('12134')
    //     this.setState({inputs:
    //             [{id: this.state.inputs.length + 1, value: 'new element'},
    //             ...this.state.inputs
    //         ]
    //     })
    // }
    render() {
        return (
            <>
                <button onClick={this.handleAddInput}>Add new input at first place</button>
                {this.state.inputs.map((elem, index) => {
                    return <ListItem key={elem.id} text={elem.value} />
                })}
            </>
        )
    }
}

const ListFunctional = () => {

   const [inputs, setInputs] = React.useState([
       {id: 1, value: 'First input'},
       {id: 2, value: 'Second input'},
       {id: 3, value: 'Third input'}
   ])



    const handleAddInput = () => {
        setInputs( [
            {id: inputs.length + 1, value: 'new element'},
                    ...inputs
                ])
    }
    return (
        <>
            <button onClick={handleAddInput}>Add new input at first place</button>
            {inputs.map((elem, index) => {
                return <ListItem key={elem.id} text={elem.value} />
            })}
        </>
    )
}

const LoginForm = () => {

    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const[language, setLanguage] = React.useState('0')

    const handleOnSubmit =(event) =>{
        event.preventDefault()
        console.log({
            login: event.target.login.value,
            password: event.target.password.value,
            language: event.target.language.value
        })
        setLogin('')
        setPassword('')
        setLanguage('0')
    }
const handleOnClick = (event) =>{
    setLogin('')
}

const handleOnChangeLogin = (event) => {
    setLogin(event.target.value)
}
    const handleOnChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleOnChangeLanguage = (event) => {
        setLanguage(event.target.value)
    }
    return (
        <>
        <form onSubmit={handleOnSubmit}>
            <div>
                <input onChange={handleOnChangeLogin} value={login} name="login" type="text"/>
            </div>
            <div>
                <input onChange={handleOnChangePassword} value={password}  name="password" type="password"/>
            </div>
            <div>
                <select onChange={handleOnChangeLanguage} value={language} name={language}>
                    <option value="0"/>
                    <option value="1">Java Script</option>
                    <option value="2">Java</option>
                    <option value="3">C++</option>
                    <option value="4">C#</option>
                </select>
            </div>
            <div>
                <button>Submit</button>
            </div>
            </form>
            <button onClick={handleOnClick}>Out of the form</button>
        </>
            )
            }

 class Lifecycle extends React.Component {


    constructor() {
        super();
        this.state = {
            value: 'Initial value'
        }
        console.log('Initialisation')
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return {}
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.setState({})
    }

     componentDidUpdate() {
         console.log('componentDidUpdate')
     }

     componentWillUnmount() {
         console.log('componentWillUnmount')
     }

     handleChangeClick = () => {
        this.setState({value: 'Button was clicked'})
    }
    render () {
        console.log('Render')
        return (
            <>
                <button onClick={this.handleChangeClick}>Click on me</button>
                <div>{this.state.value}</div>
            </>
        )
    }
}

class LifecycleShort extends React.Component {

    state = {
        value: 'test data'
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    handleChangeValue = () => {
        this.setState({value: 'new data'})
    }

    render() {
        return (
            <>
                <button onClick={this.handleChangeValue}>Change value</button>
        <div>{this.state.value}</div>
            </>
        )
    }
}

const LifecycleFunctional  = () => {

    const[secondValue, setSecondValue] = React.useState(0)

    // React.useEffect(() => {
    //     console.log('componentDidMount func')
    // }, [])
    //
    // React.useEffect(() =>{
    //     console.log('componentDidUpdate func')
    // })
    //
    // React.useEffect(() =>{
    //     console.log('First value changed')
    // }, [value, secondValue])


    const handleChangeSecondValue = () => {
        setSecondValue(secondValue + 1)
    }
    return (
        <>
            {/*<button onClick={handleChangeValue}>Change first value</button>*/}
            {/*<div>First value{value}</div>*/}
            {/*<button onClick={handleChangeSecondValue}>Change second value</button>*/}
            {/*<div>Second value:{secondValue}</div>*/}
            <Counter name='First'/>
            <Counter name='Second'/>
            <Counter name='Third'/>
            <Counter name='Fourth'/>
            <Counter name='Fifth'/>
        </>
    )
}

const Counter = ({name}) => {
    const[value, setValue] = React.useState(0)
    React.useEffect(() => {
        console.log('componentDidMount func')
    }, [])

    React.useEffect(() =>{
        console.log('componentDidUpdate func')
    })

    const handleChangeValue = () => {
        setValue(value + 1)
    }
    return (
        <>
            <h2>{name}</h2>
            <button onClick={handleChangeValue}>Change first value</button>
            <div>First value: {value}</div>
        </>
    )
}

const Counter2 = () => {
    React.useEffect(() => {
        console.log('componentDidMount func counter2')
    }, [])

    React.useEffect(() =>{
        console.log('componentDidUpdate func counter2')
    })
    return (
        <>
            <button>Change first value</button>
            <div>First value: 100</div>
        </>
    )
}
const Both = () => {
    return (
    <>
        <h2>Class component</h2>
        <LifecycleShort/>
        <br/>
        <h2>Functional component</h2>
        <LifecycleFunctional/>

    </>
    )
}

// export default Both;

// 1.Инициализация
// 2. Монтаж /mounting
// 3. Обновление/ updating - может повторяться
// 4. Зазмонтирование /unmounting
