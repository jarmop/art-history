import { useState } from 'react'
import './App.css'
import { ArtistId, useImages } from './wikipedia'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type Artist = {
  id: ArtistId,
  name: string,
  birth: number,
  death: number,
}

const artists: Artist[] = [
  {
    id: 'Pieter_Bruegel_the_Elder',
    name: 'Pieter Bruegel',
    birth: 1525,
    death: 1569,
  },
  {
    id: 'Caravaggio',
    name: 'Caravaggio',
    birth: 1571,
    death: 1610,
  },
]

function App() {
  const [artist, setArtist] = useState<ArtistId>('Pieter_Bruegel_the_Elder')
  const { isPending, error, thumbUrls } = useImages(artist)

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {artists.map(({ id, name, birth, death }) => (
        <button
          onClick={() => setArtist(id)}
        >{`${name} ${birth} - ${death}`}</button>
      ))}
      <div className="gallery">
        {thumbUrls.map((thumbUrl) => (
            <LazyLoadImage
              key={thumbUrl}
              className="gallery-item"
              src={thumbUrl}
            />
        ))}
      </div>
    </div>
  )
}

export default App
