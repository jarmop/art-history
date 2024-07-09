import { Artist } from './artists'

export function getArtistLabel({ name, birth, death }: Artist) {
  return `${name} ${birth} - ${death}`
}
