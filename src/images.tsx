import { useQuery } from '@tanstack/react-query'
import { Artist } from './artists'
import { fetchImages, fetchImageTitles } from './wikipedia-api'

export type ImageData = {
  url: string
  thumbUrl: string
  largeUrl: string
}

export const useImages = (artistId: Artist['id']) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['images', artistId],
    queryFn: () =>
      fetchImageTitles(artistId).then((titles) =>
        Promise.all([fetchImages(titles, 200, 200), fetchImages(titles, 1200, 1920)]).then(
          ([thumbImages, largeImages]) => {
            return Object.keys(thumbImages).map((url) => ({
              url: url,
              thumbUrl: thumbImages[url],
              largeUrl: largeImages[url],
            }))
          }
        )
      ),
    staleTime: Infinity,
    retry: false,
  })

  return { isPending, error, images: data as ImageData[] }
}
