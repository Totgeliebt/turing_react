import React from 'react';
import styles from './ToDo.module.css'
import ToDoList from '../../components/ToDoList'
import {useDispatch} from "react-redux";
import HandleForm from "../../components/HandleForm";
import {addElem} from '../../slices/ToDoSlice'

const ToDo = () => {



    return (
            <div className={styles.container}>
                <HandleForm />
                <ToDoList />

            </div>
    )
}

export default ToDo;