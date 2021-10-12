import React from 'react';
import styles from './HandleForm.module.css'
import _ from 'lodash'
import { Button, InputLabel, Input, FormHelperText } from '@material-ui/core'
import {useDispatch} from "react-redux";
import {addElem, fill} from "../../slices/ToDoSlice";
import {BASE_URL} from "../../utils/consts";

const HandleForm = () => {

    const[toDo, setToDo] = React.useState('')
    const dispatch = useDispatch()

    const addElemToList = async (elem) => {
        const elemFromServer =  await addElemToBackend(elem)
        dispatch(addElem(elemFromServer))
    }

    const addElemToBackend = async(elemStr) => {
        const response = await fetch(`${BASE_URL}/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value: elemStr })
        })
        if(response.ok) {
            return await response.json()
        }
    }
    const debounceOnChange = _.debounce(()=>{
        addElemToList(toDo)
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
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <InputLabel htmlFor="my-input">To Do Elem</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={toDo} onChange={handleInputChange}/>
            <FormHelperText id="my-helper-text">This elem will ne added to list</FormHelperText>
            <Button variant="contained" color="primary" onClick={debounceOnChange}>Add Elem</Button>
        </form>
        </>
    )
}

export default HandleForm;