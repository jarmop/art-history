import { useState } from 'react'
import {
  artistsByCentury,
  getArtistCentury,
  getArtistLabel,
  useActiveArtist,
} from './useArtists'
import { Link } from 'react-router-dom'

export function Menu() {
  const { activeArtist } = useActiveArtist()

  const [selectedCentury, setSelectedCentury] = useState(() =>
    getArtistCentury(activeArtist)
  )

  const artists = artistsByCentury[selectedCentury]

  return (
    <div>
      {Object.keys(artistsByCentury).map((century) => (
        <button
          key={century}
          className={
            'm-1' + (Number(century) === selectedCentury ? ' bg-gray-200' : '')
          }
          onClick={() => setSelectedCentury(Number(century))}
        >
          {century}
        </button>
      ))}
      <div>
        {artists.map((artist) => (
          <Link
            key={artist.id}
            to={`../${artist.id}`}
            className={
              'm-1 px-2 bg-gray-200 inline-block rounded-xl' +
              (artist.id === activeArtist.id ? ' bg-gray-400' : '')
            }
          >
            {getArtistLabel(artist)}
          </Link>
        ))}
      </div>
    </div>
  )
}
