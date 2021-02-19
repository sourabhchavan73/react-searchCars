import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

function ImageList(props) {

    const idHandler = (id) => {
        props.onchanging(id)
    }

    const Images = props.images.map(image => {
        return (
            <ImageCard 
                key={image.id} 
                image={image}
                onClick={()=> idHandler(image.id)}
            />
        )
    })

    return (
        <div className="image-list">
            {Images}
        </div>
    )
}

export default ImageList
