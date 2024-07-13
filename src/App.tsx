import { useCallback, useState } from 'react'
import {
  Artist,
  getArtistLabel,
  orderedArtists,
  useActiveArtist,
} from './useArtists'
import { useKeyboard } from './useKeyboard'
import { ActiveImage } from './ActiveImage'
import { Menu } from './Menu'
import { Gallery } from './Gallery'

function App() {
  const { activeArtist, setActiveArtist } = useActiveArtist()
  const [activeImage, setActiveImage] = useState<number>()
  const [showFullImage, setShowFullImage] = useState(false)

  const setActiveArtistCb = useCallback(
    (getNewArtist: (artist: Artist) => Artist) => {
      setActiveArtist(getNewArtist(activeArtist))
    },
    [activeArtist, setActiveArtist]
  )

  useKeyboard(orderedArtists, setActiveImage, setActiveArtistCb)

  return (
    <>
      {activeImage !== undefined && (
        <ActiveImage
          showFullImage={showFullImage}
          setActiveImage={setActiveImage}
          setShowFullImage={setShowFullImage}
          activeImage={activeImage}
        />
      )}

      {!showFullImage && (
        <>
          <Menu />

          <h1 className="m-4 text-4xl">{getArtistLabel(activeArtist)}</h1>

          <Gallery setActiveImage={setActiveImage} />
        </>
      )}
    </>
  )
}

export default App
