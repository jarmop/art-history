import { useEffect } from 'react'
import { Artist } from './artists'
import { ImageData } from './images'

const incrementRange = (value: number, max: number) =>
  value < 0 ? max : value > max ? 0 : value

export function useKeyboard(
  orderedArtists: Artist[],
  images: ImageData[],
  setActiveImage: React.Dispatch<React.SetStateAction<number | undefined>>,
  setActiveArtist: (getNewArtist: (artist: Artist) => Artist) => void 
) {
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
  }, [orderedArtists, images?.length, setActiveImage, setActiveArtist])
}
