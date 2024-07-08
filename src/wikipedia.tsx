import { useQuery } from '@tanstack/react-query'
import { Artist } from './artists'

const apiRoot = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&'
const imageUrlPrefix = `${apiRoot}action=query&prop=imageinfo&formatversion=2&iiprop=url&iilimit=1&iiurlwidth=200`
const titlesLimit = 50

type ImageResponseData = {
  query: { pages: [{ imageinfo: [{ thumburl: string }] }] }
}

export const useImages = (artistId: Artist['id']) => {
  const pageUrl = `${apiRoot}action=parse&page=${artistId}`

  const { isPending, error, data } = useQuery({
    queryKey: ['images', artistId],
    queryFn: () =>
      fetch(pageUrl)
        .then((res) => res.json())
        .then((data) => {
          const titles = [...new Set<string>(data.parse.images)]
            .filter((image: string) => {
              const imageExtension = image.split('.').pop()
              return imageExtension === 'jpg' || imageExtension === 'jpeg'
            })
            .map((image) => 'File:' + image)
            .slice(0, titlesLimit)
          const titlesString = '&titles=' + encodeURIComponent(titles.join('|'))
          const imageUrl = imageUrlPrefix + titlesString

          return fetch(imageUrl)
            .then((res) => res.json())
            .then((data: ImageResponseData) => {
              const thumbUrls = data.query.pages.map(
                (page) => page.imageinfo[0]?.thumburl
              )

              return new Promise((resolve) => resolve([...new Set(thumbUrls)]))
            })
        }),
    staleTime: Infinity,
    retry: false,
  })

  return { isPending, error, thumbUrls: data as string[] }
}
