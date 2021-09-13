// import styles from './ImageGallery.module.css'
import React from 'react'
import HandleForm from "../../components/HandleForm";
import Pagination from '../../components/Pagination/index'

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21784981-d13d311b92e9193e9bcd05db0';
const PER_PAGE = 10

const ImagesGallery = () => {

    const [images, setImages] = React.useState([])
    const [pages, setPages] = React.useState(0)
    const [currentQuery, setCurrentQuery] = React.useState('')

    const getImages = async (query = 'cat', page= '1') => {
        setCurrentQuery(query)
        const url = `${BASE_URL}?key=${API_KEY}&q=${query}&per_page=${PER_PAGE}&page=${page}`
        console.log({url})
        const response = await fetch(url)
        console.log({response})
        if(response.ok) {
            const result = await response.json()
            console.log({result})
            setImages(result.hits)
            setPages(Math.ceil(result.totalHits/ PER_PAGE))
        }
    }
    React.useEffect(() => {
        getImages()
    }, [])

    const handleOnChangePage = (page) => {
        getImages(currentQuery, page)
    }
    return (
        <>
            <h1>Images Gallery</h1>
            <HandleForm onClick={getImages}/>
            {images.map((image, index) => <img key={index} alt="pic" src={image.previewURL}/>)}
            <Pagination maxPage={pages} changePage={handleOnChangePage}/>
        </>
            )
            }

export default ImagesGallery