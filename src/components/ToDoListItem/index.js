// import styles from 'ToDoListItem.module.css'
import styles from '../ToDoList/ToDoList.module.css'
import Button from "../Button"
import React from 'react'

const ToDoListItem = ({elem, onDelete, onSave}) => {

    const [isEditing, setIsEditing] = React.useState()
    const [text, setText] = React.useState(elem.value)

    const handleEditClick = () => {
        setIsEditing(true)
    }
    const handleOnChangeValue = (event) => {
        setText(event.target.value)
    }

    const handleCancelClick = () => {
        setIsEditing(false)
        setText(elem.value)
    }
    console.log(text, elem)
    const handleSaveClick = () => {
        onSave(text)
        setIsEditing(false)
        // handleCancelClick()
    }

    return (
    <li className={styles.toDoListItem}>
        {
            isEditing ?
                <>
                    id: {elem.id} <input value={text} onChange={handleOnChangeValue}/>
                    <Button text="cancel" isImportant={true} handleOnClick={handleCancelClick}/>
                    <Button text="save" handleOnClick={handleSaveClick}/>
                </>:
             <>
                 <span className={styles.toDoListText}> id: {elem.id}: {elem.value}</span>
                <Button text="Delete" isImportant={true} handleOnClick={onDelete}/>
                <Button text="Edit" handleOnClick={handleEditClick}/>
             </>
        }
            </li>
    )
}

export default ToDoListItem