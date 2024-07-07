import { useQuery } from '@tanstack/react-query'

const apiRoot = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&'

// type UrlParam = 'action' | 'prop'
// const createQueryString = (props: Record<UrlParam, string>) =>
//   apiRoot + Object.entries(props)

// const pageUrlPrefix = `${apiRoot}action=parse&page=Pieter_Bruegel_the_Elder`
const imageUrlPrefix = `${apiRoot}action=query&prop=imageinfo&formatversion=2&iiprop=url&iilimit=1&iiurlwidth=400`

type useImagesReturnType = {
  isPending: boolean
  error: Error | null
  thumbUrls: string[]
}

export type ArtistId = 'Pieter_Bruegel_the_Elder' | 'Caravaggio'

export const useImages = (artistId: ArtistId): useImagesReturnType => {
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
          const titlesString = '&titles=' + encodeURIComponent(titles.join('|'))
          const imageUrl = imageUrlPrefix + titlesString

          return fetch(imageUrl)
            .then((res) => res.json())
            .then((data) => {
              const thumbUrls = data.query.pages.map(
                (page) => page.imageinfo[0]?.thumburl
              )
              console.log(thumbUrls)

              return new Promise((resolve) => resolve([...new Set(thumbUrls)]))
            })
        }),
    staleTime: Infinity,
    retry: false,
  })

  return { isPending, error, thumbUrls: data as string[] }
}
