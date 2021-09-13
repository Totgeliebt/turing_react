import styles from './ToDoList.module.css'
import {useSelector, useDispatch} from "react-redux";
// import Button from '../Button'
import React from 'react';
import ToDoListItem from '../ToDoListItem'
import {deleteElem, updateElem} from "../../slices/ToDoSlice";

const ToDoList = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) =>state.toDo.list)

    const deleteElemToDoList = (id) => () => {
        dispatch(deleteElem(id))
    }
    const saveElemToDoList = (id) => (text) => {
        dispatch(updateElem({id: id, value: text}))
    }
    return (
        <>
            <h4>TO DO list</h4>
            <ul className={styles.toDoList}>
                {list.map(elem =>
                        <ToDoListItem key={elem.id}
                                      elem={elem}
                                      onDelete={deleteElemToDoList(elem.id)}
                                      onSave={saveElemToDoList(elem.id)}/>
                    )
                }
            </ul>
        </>
    )
}

export default ToDoList;