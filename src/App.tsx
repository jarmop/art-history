import { useState } from 'react'
import './App.css'
import { useImages } from './images'
import { Artist, artistsByCentury, orderedArtists } from './artists'
import { useKeyboard } from './useKeyboard'
import { ActiveImage } from './ActiveImage'
import { getArtistLabel } from './util'
import { Menu } from './Menu'
import { Gallery } from './Gallery'

function App() {
  const [activeArtist, setActiveArtist] = useState<Artist>(orderedArtists[0])
  const [activeImage, setActiveImage] = useState<number>()
  const [showFullImage, setShowFullImage] = useState(false)
  const { isPending, error, images } = useImages(activeArtist.id)

  useKeyboard(orderedArtists, images, setActiveImage, setActiveArtist)

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {activeImage !== undefined && (
        <ActiveImage
          showFullImage={showFullImage}
          setActiveImage={setActiveImage}
          setShowFullImage={setShowFullImage}
          images={images}
          activeImage={activeImage}
        />
      )}

      {!showFullImage && (
        <>
          <Menu
            artistsByCentury={artistsByCentury}
            setActiveArtist={setActiveArtist}
            activeArtist={activeArtist}
          />

          <h1>{getArtistLabel(activeArtist)}</h1>

          <Gallery images={images} setActiveImage={setActiveImage} />
        </>
      )}
    </>
  )
}

export default App
