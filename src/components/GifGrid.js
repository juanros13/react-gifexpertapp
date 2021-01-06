import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem  from './GifGridItem';

import PropTypes from 'prop-types';

export const GifGrid = ( { category } ) => {
    // const [counter, setCounter] = useState(0);
    const { data:images, loading } = useFetchGifs(category);

    // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGifs(category)
    //     .then(imgs => setImages(imgs));
    // },[category]);

    //getGifs();
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
        { loading && <p className='animate__animated animate__flash'>Loading</p>}

        <div className='card-gif'>
            {
                images.map((img) =>
                    // <li  key = { id }>{ title }</li>
                    <GifGridItem
                        key = { img.id }
                        { ...img }
                    />
                )
            }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}