import styles from './style.module.css'
import './style.css'

const CustomButton = () => {
    console.log({styles})
    return (
        <>
            <button className={styles['custom-button']}>Click me 1</button>
        <button className="custom-button">Click me</button>
        </>
    )
}

export default CustomButton

