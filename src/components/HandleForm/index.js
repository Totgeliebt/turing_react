import React, {useEffect} from 'react';
import styles from './HandleForm.module.css'
import ButtonOur from '../Button'
import _ from 'lodash'
import { Button } from '@material-ui/core'

const HandleForm = ({onClick}) => {

    const[toDo, setToDo] = React.useState('')

    const debounceOnChange = _.debounce(()=>{
        console.log('handleFormSubmit')
        onClick(toDo)
        setToDo('')
    }, 500)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('12345667')
        debounceOnChange()
    }

    // React.useEffect(()=> {
    //     const foo = (value) => {
    //         console.log(value)
    //     }
    //
    //     const debounceFoo = _.debounce(foo,1500)
    //     debounceFoo(1)
    //     debounceFoo(2)
    //     setTimeout(()=> {
    //         debounceFoo(3);
    //     }, 1000)
    //
    // }, [])


    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }
    return (
        <form className={styles.handleForm} onSubmit={handleFormSubmit}>
            <input className={styles.enterInput} name="todo" value={toDo} onChange={handleInputChange}/>
            <ButtonOur text="Add elem"/>
            <Button variant="contained" color="primary" onClick={debounceOnChange}>Add Elem</Button>
        </form>
    )
}

export default HandleForm;