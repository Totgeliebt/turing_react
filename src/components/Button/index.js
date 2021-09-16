import styles from './Button.module.css'

const Button = ({text, isImportant = false, handleOnClick}) => {

    return (
        <button onClick={handleOnClick} className={`${styles.button} ${isImportant && styles.buttonImportant}`}>{text}</button>
    )
}

export default Button