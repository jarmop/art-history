import { useQuery } from '@tanstack/react-query'
import { fetchImages, fetchImageTitles } from './wikipedia-api'
import { useActiveArtistId } from './useArtists'

export type ImageData = {
  url: string
  thumbUrl: string
  largeUrl: string
}

export const useImages = () => {
  const activeArtistId = useActiveArtistId()

  const { isPending, error, data } = useQuery({
    queryKey: ['images', activeArtistId],
    queryFn: () =>
      fetchImageTitles(activeArtistId).then((titles) =>
        Promise.all([
          fetchImages(titles, 200, 200),
          fetchImages(titles, 1200, 1920),
        ]).then(([thumbImages, largeImages]) => {
          return Object.keys(thumbImages).map((url) => ({
            url: url,
            thumbUrl: thumbImages[url],
            largeUrl: largeImages[url],
          }))
        })
      ),
    staleTime: Infinity,
    retry: false,
  })

  return { isPending, error, images: data as ImageData[] }
}
