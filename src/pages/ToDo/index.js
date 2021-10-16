import React from 'react';
import styles from './ToDo.module.css'
import ToDoList from '../../components/ToDoList'
import {useDispatch} from "react-redux";
import HandleForm from "../../components/HandleForm";
import {addElem} from '../../slices/ToDoSlice'
import {BASE_URL} from "../../utils/consts";

const ToDo = () => {

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

    return (
            <div className={styles.container}>
                <HandleForm ocClick={addElemToList}/>
                <ToDoList />

            </div>
    )
}

export default ToDo;