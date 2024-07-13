import { Artist } from './artists'
import { getArtistLabel } from './util'

interface MenuProps {
  artistsByCentury: Record<string, Artist[]>
  setActiveArtist: React.Dispatch<React.SetStateAction<Artist>>
  activeArtist: Artist
}

export function Menu({
  artistsByCentury,
  setActiveArtist,
  activeArtist,
}: MenuProps) {
  return Object.entries(artistsByCentury).map(([century, artists]) => (
    <div key={century} className="flex">
      <div className="m-1">{century}</div>
      <div>
        {artists.map((artist) => (
          <button
            key={artist.id}
            onClick={() => setActiveArtist(artist)}
            className={
              'm-1' + (artist.id === activeArtist.id ? ' bg-gray-500' : '')
            }
          >
            {getArtistLabel(artist)}
          </button>
        ))}
      </div>
    </div>
  ))
}
