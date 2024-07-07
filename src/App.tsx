import { useState } from 'react'
import './App.css'
import { useImages } from './wikipedia'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Artist, artists } from './artists'

function App() {
  const [activeArtist, setActiveArtist] = useState<Artist>(artists[0])
  const { isPending, error, thumbUrls } = useImages(activeArtist.id)

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const artistsByCentury = artists.reduce<Record<number, Artist[]>>(
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

  return (
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
              >{`${artist.name} ${artist.birth} - ${artist.death}`}</button>
            ))}
          </div>
        </div>
      ))}

      <h1>{activeArtist.name}</h1>
      <div className="gallery">
        {thumbUrls.map((thumbUrl) => (
          <LazyLoadImage
            key={thumbUrl}
            className="gallery-item"
            src={thumbUrl}
          />
        ))}
      </div>
    </>
  )
}

export default App
