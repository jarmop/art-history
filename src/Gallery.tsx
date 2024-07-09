import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ImageData } from './images'

interface GalleryProps {
  images: ImageData[]
  setActiveImage: React.Dispatch<React.SetStateAction<number | undefined>>
}

export function Gallery({ images, setActiveImage }: GalleryProps) {
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <LazyLoadImage
          key={image.thumbUrl}
          className="gallery-item"
          src={image.thumbUrl}
          onClick={() => setActiveImage(i)}
        />
      ))}
    </div>
  )
}
