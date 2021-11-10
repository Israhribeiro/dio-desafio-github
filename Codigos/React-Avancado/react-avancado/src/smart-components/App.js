import React from "react"
import PhotosGallery from './components/Gallery'

function App(){

    const photos = [
        'http://placeimg.com/140/30/any',
        'http://placeimg.com/140/40/any',
        'http://placeimg.com/140/35/any',
        'http://placeimg.com/130/30/any',
        'http://placeimg.com/340/30/any',
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