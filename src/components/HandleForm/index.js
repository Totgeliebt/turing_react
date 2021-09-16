import React, {useEffect} from 'react';
import styles from './HandleForm.module.css'
import _ from 'lodash'
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'

const HandleForm = ({onClick}) => {

    const[toDo, setToDo] = React.useState('')

    const debounceOnChange = _.debounce(()=>{
        console.log('handleFormSubmit')
        onClick(toDo)
        setToDo('')
    }, 500)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        debounceOnChange()
    }


    const handleInputChange = (event) => {
        setToDo(event.target.value)
    }
    return (<>
        <form onSubmit={handleFormSubmit}>
            <InputLabel htmlFor="my-input">To Do Elem</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={toDo} onChange={handleInputChange}/>
            <FormHelperText id="my-helper-text">This elem will ne added to list</FormHelperText>
            <Button variant="contained" color="primary" onClick={debounceOnChange}>Add Elem</Button>
        </form>
        {/*<form className={styles.handleForm} onSubmit={handleFormSubmit}>*/}
        {/*    <input className={styles.enterInput} name="todo" value={toDo} onChange={handleInputChange}/>*/}
        {/*    <Button variant="contained" color="primary" onClick={debounceOnChange}>Add Elem</Button>*/}
        {/*</form>*/}
        </>
    )
}

export default HandleForm;