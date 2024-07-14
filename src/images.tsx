import { useActiveArtistId } from './useArtists'
import { useQuery } from '@tanstack/react-query'
import { ImageData } from './types'
import * as wikipedia from './wikipedia-api'
import * as storage from './storage'

export function useImages() {
  const activeArtistId = useActiveArtistId()

  const { isPending, error, data } = useQuery({
    queryKey: ['images', activeArtistId],
    queryFn: () =>
      storage.getArtistImages(activeArtistId) ||
      wikipedia.fetchArtistImages(activeArtistId).then((data) => {
        storage.setArtistImages(activeArtistId, data)
        return data
      }),
    staleTime: Infinity,
    retry: false,
  })

  return { isPending, error, images: data as ImageData[] }
}
