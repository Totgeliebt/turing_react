import styles from './ToDoList.module.css'
import {useSelector, useDispatch} from "react-redux";
import {Grid,Typography,List} from '@material-ui/core'
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
            <Typography variant="h6">
                TO DO LIST
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <div>
                    <List dense>
                        {list.map(elem =>(
                            <ToDoListItem key={elem.id}
                                          elem={elem}
                                          onDelete={deleteElemToDoList(elem.id)}
                                          onSave={saveElemToDoList(elem.id)}/>
                        ))}
                    </List>
                </div>
            </Grid>
            </Grid>
        </>
    )
}

export default ToDoList;