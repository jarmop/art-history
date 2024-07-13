import { useParams } from 'react-router-dom'
import { artists } from './artists'

export type Artist = (typeof artists)[number]

export function getArtistCentury(artist: Artist) {
  return Math.floor(artist.birth / 100) * 100
}

export const artistsByCentury = artists.reduce<Record<string, Artist[]>>(
  (acc, artist) => {
    const artistCentury = getArtistCentury(artist)
    if (!acc[artistCentury]) {
      acc[artistCentury] = []
    }
    acc[artistCentury].push(artist)
    return acc
  },
  {}
)

export const orderedArtists = Object.values(artistsByCentury).flat()

export function getArtistLabel({ name, birth, death }: Artist) {
  return `${name} ${birth}-${death}`
}

function setActiveArtist(artist: Artist) {
  window.location.href = `../art-history/${artist.id}`
}

export function useActiveArtistId() {
  const { artistId } = useParams()

  return artistId || artists[0].id
}

export function useActiveArtist() {
  const artistId = useActiveArtistId()
  const activeArtist =
    artistId && artists.find((artist) => artist.id === artistId)

  return { activeArtist: activeArtist || artists[0], setActiveArtist }
}
