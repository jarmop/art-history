import { ImageData } from './types'

const apiRoot = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&'

type ImageResponseData = {
  query: { pages: [{ imageinfo: [{ thumburl: string; url: string }] }] }
}

function getUriList(args: string[]) {
  return encodeURIComponent(args.join('|'))
}

function fetchImageTitles(artistId: string) {
  const pageUrl = `${apiRoot}action=parse&page=${artistId}`

  return fetch(pageUrl)
    .then((res) => res.json())
    .then((data) => {
      const titles = [...new Set<string>(data.parse.images)]
        .filter((image: string) => {
          const imageExtension = image.split('.').pop()
          return imageExtension === 'jpg' || imageExtension === 'jpeg'
        })
        .map((image) => 'File:' + image)

      return titles
    })
}

function fetchImageUrls(titles: string[], width: number, height: number) {
  const imagesUrlPrefix = `${apiRoot}action=query&prop=imageinfo&formatversion=2&iiprop=url&iilimit=1`
  const titlesLimit = 50
  const titlesString = getUriList(titles.slice(0, titlesLimit))
  const imagesUrl = `${imagesUrlPrefix}&titles=${titlesString}&iiurlwidth=${width}&iiurlheight=${height}`

  return fetch(imagesUrl)
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

export function fetchArtistImages(artistId: string) {
  return fetchImageTitles(artistId).then((titles) =>
    Promise.all([
      fetchImageUrls(titles, 200, 200),
      fetchImageUrls(titles, 1200, 1920),
    ]).then(([thumbImages, largeImages]) => {
      return Object.keys(thumbImages).map(
        (url) =>
          ({
            url: url,
            thumbUrl: thumbImages[url],
            largeUrl: largeImages[url],
          } as ImageData)
      )
    })
  )
}
