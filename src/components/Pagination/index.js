import styles from './Pagination.module.css'
import React from 'react'

const createArray = (length) => {
    return Array.from({length: length}).map((value, index) => index + 1)
}
const Pagination = ({maxPage, changePage}) => {

    const [currentPage, setCurrentPage] = React.useState(1)
    const [pages, setPages] = React.useState([])
    const handlePageChange = (number) => () => {
        if (number < 1 || number > maxPage) return
        setCurrentPage(number)
        changePage(number)
    }
    React.useEffect(()  => {
        if (maxPage < 5) {
           setPages(createArray(maxPage))
        } else if (currentPage === 1) {
           setPages([1, 2, maxPage])
        } else if (currentPage === maxPage) {
            setPages([currentPage - 1, currentPage])
       } else if (currentPage > maxPage - 3) {
            setPages([currentPage - 1, currentPage, currentPage + 1])

        } else {
            setPages([currentPage - 1, currentPage, currentPage + 1, maxPage])
        }
    },[maxPage, currentPage])

    // const page = () => {
    //     if(maxPage < 5) {
    //         return createArray(maxPage)
    //     }
    //     return [1, 2, maxPage - 1, maxPage]
    // }
    return (
<div className={styles.container}>
    <div className={styles.item}  onClick={handlePageChange(currentPage - 1 )}>Prev</div>
    {pages.map(elem => (
        <div key={elem} className={currentPage === elem? styles.active : styles.item} onClick={handlePageChange(elem)}>{elem}</div>
    ))}
    <div className={styles.item} onClick={handlePageChange(currentPage + 1 )}>Next</div>
</div>
    )
}
export default Pagination
