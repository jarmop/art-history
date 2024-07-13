import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useImages } from './images'

interface GalleryProps {
  setActiveImage: React.Dispatch<React.SetStateAction<number | undefined>>
}

export function Gallery({ setActiveImage }: GalleryProps) {
  const { isPending, error, images } = useImages()

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="grid grid-cols-gallery gap-[1px] justify-items-center">
      {images.map((image, i) => (
        <LazyLoadImage
          key={image.thumbUrl}
          className="w-thumb h-thumb bg-gray-200 object-contain cursor-pointer"
          src={image.thumbUrl}
          onClick={() => setActiveImage(i)}
        />
      ))}
    </div>
  )
}
