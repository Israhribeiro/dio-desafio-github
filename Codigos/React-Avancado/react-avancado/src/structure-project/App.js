import React from "react"
import { Button, PhotosGallery } from './components'
import { sanitizeString } from './commons/utils/string'

function App() {
    
    const photos = [
        'http://placeimg.com/140/60/people',
        'http://placeimg.com/140/60/animals',
        'http://placeimg.com/140/60/tech',
        'http://placeimg.com/140/60/any',
        'http://placeimg.com/140/60/nature',
    ]

    return(
        <>
            <h1>Galeria de Fotos</h1>
            <PhotosGallery
            photos={photos}/>
        </>
    )

}

export default App