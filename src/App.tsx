import { useEffect, useState } from 'react'
import './App.css'
import { useImages } from './wikipedia'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Artist, artists } from './artists'

const getArtistLabel = ({ name, birth, death }: Artist) =>
  `${name} ${birth} - ${death}`

const incrementRange = (value: number, max: number) =>
  value < 0 ? max : value > max ? 0 : value

function App() {
  const artistsByCentury = artists.reduce<Record<string, Artist[]>>(
    (acc, artist) => {
      const artistCentury = Math.floor(artist.birth / 100) * 100
      if (!acc[artistCentury]) {
        acc[artistCentury] = []
      }
      acc[artistCentury].push(artist)
      return acc
    },
    {}
  )
  const orderedArtists = Object.values(artistsByCentury).flat()
  const [activeArtist, setActiveArtist] = useState<Artist>(orderedArtists[0])
  const [activeImage, setActiveImage] = useState<number>()
  const [showFullImage, setShowFullImage] = useState(false)
  const { isPending, error, images } = useImages(activeArtist.id)

  useEffect(() => {
    const resetActiveImage = () =>
      setActiveImage((i) => (i !== undefined ? 0 : i))

    const incrementArtist = (increment: number) => {
      setActiveArtist((artist) => {
        const index = orderedArtists.findIndex((a) => a.id === artist.id)
        const nextIndex = incrementRange(
          index + increment,
          orderedArtists.length - 1
        )
        return orderedArtists[nextIndex]
      })
    }

    const incrementImage = (increment: number) =>
      setActiveImage((i) => {
        if (i == undefined) return i
        return incrementRange(i + increment, images.length - 1)
      })

    const onKeypress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        incrementArtist(-1)
        resetActiveImage()
      } else if (e.key === 'ArrowDown') {
        incrementArtist(1)
        resetActiveImage()
      } else if (e.key === 'ArrowLeft') {
        incrementImage(-1)
      } else if (e.key === 'ArrowRight') {
        incrementImage(1)
      } else if (e.key === 'Escape') {
        setActiveImage(undefined)
      }
    }
    window.addEventListener('keyup', onKeypress)
    return () => {
      window.removeEventListener('keyup', onKeypress)
    }
  }, [orderedArtists, images?.length])

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {activeImage !== undefined && (
        <div
          className={'active-image-container' + (showFullImage ? ' full' : '')}
          onClick={() => {
            setActiveImage(undefined)
            setShowFullImage(false)
          }}
        >
          <img
            src={
              showFullImage
                ? images[activeImage].url
                : images[activeImage].largeUrl
            }
            className={'active-image' + (showFullImage ? ' full' : '')}
            onClick={(e) => {
              e.stopPropagation()
              setShowFullImage((b) => !b)
            }}
          />
        </div>
      )}

      {!showFullImage && (
        <>
          {Object.entries(artistsByCentury).map(([century, artists]) => (
            <div key={century} className="menu-row">
              <div className="century">{century}</div>
              <div>
                {artists.map((artist) => (
                  <button
                    key={artist.id}
                    onClick={() => setActiveArtist(artist)}
                    className={artist.id === activeArtist.id ? 'active' : ''}
                  >
                    {getArtistLabel(artist)}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <h1>{getArtistLabel(activeArtist)}</h1>

          <div className="gallery">
            {images.map((image, i) => (
              <LazyLoadImage
                key={image.thumbUrl}
                className="gallery-item"
                src={image.thumbUrl}
                onClick={() => setActiveImage(i)}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default App
