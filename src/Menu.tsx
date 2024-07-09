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
  ))
}
