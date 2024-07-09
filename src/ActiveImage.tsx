import { ImageData } from "./images"

interface ActiveImageProps {
  showFullImage: boolean
  setActiveImage: React.Dispatch<React.SetStateAction<number | undefined>>
  setShowFullImage: React.Dispatch<React.SetStateAction<boolean>>
  images: ImageData[]
  activeImage: number
}

export function ActiveImage({
  showFullImage,
  setActiveImage,
  setShowFullImage,
  images,
  activeImage,
}: ActiveImageProps) {
  return (
    <div
      className={'active-image-container' + (showFullImage ? ' full' : '')}
      onClick={() => {
        setActiveImage(undefined)
        setShowFullImage(false)
      }}
    >
      <img
        src={
          showFullImage ? images[activeImage].url : images[activeImage].largeUrl
        }
        className={'active-image' + (showFullImage ? ' full' : '')}
        onClick={(e) => {
          e.stopPropagation()
          setShowFullImage((b) => !b)
        }}
      />
    </div>
  )
}
