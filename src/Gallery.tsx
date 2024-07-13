import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ImageData } from './images'

interface GalleryProps {
  images: ImageData[]
  setActiveImage: React.Dispatch<React.SetStateAction<number | undefined>>
}

export function Gallery({ images, setActiveImage }: GalleryProps) {
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
