import styles from './ToDoList.module.css'
import {useSelector, useDispatch} from "react-redux";
import {Grid,Typography,List} from '@material-ui/core'
import React from 'react';
import ToDoListItem from '../ToDoListItem'
import {deleteElem, updateElem, fill} from "../../slices/ToDoSlice";
import {BASE_URL} from "../../utils/consts";

const ToDoList = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) =>state.toDo.list)

    const deleteElemToDoList = (id) => async () => {
        const result = await deleteElemFromServer(id)
        if (result) {
            dispatch(deleteElem(id))
        }
    }

    const deleteElemFromServer = async (id) => {
        const response = await fetch(`${BASE_URL}/records/${id} `,{
            method: 'DELETE'
        })
        if(response.ok) {
            return true
        }
        return false
    }

    const saveElemToDoList = (id) => async (text) => {
        const result = await updateElemOnBackend({id: id, value: text})
        if (result) {
            dispatch(updateElem({id: id, value: text}))
        }
    }

    const updateElemOnBackend = async (elem) => {
        const response = await fetch(`${BASE_URL}/records`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elem)
        })
        if(response.ok) {
            return true
        }
        return false
    }

    const getRecords = async () => {
        const response = await fetch(`${BASE_URL}/records `)
        if(response.ok) {
            const result = await response.json()
            dispatch(fill(result))
        }
    }
    React.useEffect(() => {
        getRecords()
    }, [])

    return (
        <>
            <Typography variant="h6">
                TO DO LIST
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <div>
                    <List dense className={styles.listContainer}>
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