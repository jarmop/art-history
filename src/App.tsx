import { useCallback, useState } from 'react'
import { useImages } from './images'
import {
  Artist,
  getArtistLabel,
  orderedArtists,
  useActiveArtist,
} from './artists'
import { useKeyboard } from './useKeyboard'
import { ActiveImage } from './ActiveImage'
import { Menu } from './Menu'
import { Gallery } from './Gallery'

function App() {
  const { activeArtist, setActiveArtist } = useActiveArtist()
  const [activeImage, setActiveImage] = useState<number>()
  const [showFullImage, setShowFullImage] = useState(false)
  const { isPending, error, images } = useImages(activeArtist.id)

  const setActiveArtistCb = useCallback(
    (getNewArtist: (artist: Artist) => Artist) => {
      setActiveArtist(getNewArtist(activeArtist))
    },
    [activeArtist, setActiveArtist]
  )

  useKeyboard(orderedArtists, images, setActiveImage, setActiveArtistCb)

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
          <Menu />

          <h1 className="m-4 text-4xl">{getArtistLabel(activeArtist)}</h1>

          <Gallery images={images} setActiveImage={setActiveImage} />
        </>
      )}
    </>
  )
}

export default App
