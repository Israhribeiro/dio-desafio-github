import React, {memo, useState} from "react"
import Button from '../Button'

function PhotosGallery(props){

    const { photos } = props

    const [gallery, setGallery] = useState(photos)

    const renderPhotos = (element, key) => {
        return(
            <>
                <img src={element} style={{display: 'block'}}/>
                <Button onClick={() => handleRemove(key)}>
                    Remover 
                </Button>
            </>
        )
    }

    const handleRemove = (key) => {
        const newGallery = gallery.filter((img,index) => index !== key)
        setGallery(newGallery)
    }

    return(
        <div>
            {gallery.map(renderPhotos)}
        </div>
    )
}

export default memo(PhotosGallery)