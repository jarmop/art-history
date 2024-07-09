const apiRoot = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&'
const imagesUrlPrefix = `${apiRoot}action=query&prop=imageinfo&formatversion=2&iiprop=url&iilimit=1`
const titlesLimit = 50

type ImageResponseData = {
  query: { pages: [{ imageinfo: [{ thumburl: string; url: string }] }] }
}

export const fetchImageTitles = (artistId: string) => {
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

export const fetchImages = (titles: string[], width: number) => {
  const titlesString = encodeURIComponent(titles.slice(0, titlesLimit).join('|'))
  const imagesUrl = `${imagesUrlPrefix}&titles=${titlesString}&iiurlwidth=${width}`

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
