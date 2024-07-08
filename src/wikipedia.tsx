import { useQuery } from '@tanstack/react-query'
import { Artist } from './artists'

const apiRoot = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&'
const imagesUrlPrefix = `${apiRoot}action=query&prop=imageinfo&formatversion=2&iiprop=url&iilimit=1`
const titlesLimit = 50

type ImageResponseData = {
  query: { pages: [{ imageinfo: [{ thumburl: string; url: string }] }] }
}

type ImageData = {
  url: string
  thumbUrl: string
  largeUrl: string
}

const fetchImagesUrl = (pageUrl: string) =>
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
      const imagesUrl = imagesUrlPrefix + titlesString

      return imagesUrl
    })

const fetchImages = (imagesUrl: string, width: number) => {
  return fetch(`${imagesUrl}&iiurlwidth=${width}`)
    .then((res) => res.json())
    .then((data: ImageResponseData) => {
      const imageDataMap: Record<string, string> = {}
      data.query.pages.forEach((page) => {
        const imageData = page.imageinfo[0]
        if (imageData && !imageDataMap[imageData.url]) {
          imageDataMap[imageData.url] = imageData.thumburl
        }
      })

      return imageDataMap
    })
}

export const useImages = (artistId: Artist['id']) => {
  const pageUrl = `${apiRoot}action=parse&page=${artistId}`

  const { isPending, error, data } = useQuery({
    queryKey: ['images', artistId],
    queryFn: () =>
      fetchImagesUrl(pageUrl).then((imagesUrl) =>
        Promise.all([
          fetchImages(imagesUrl, 200),
          fetchImages(imagesUrl, 800),
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
