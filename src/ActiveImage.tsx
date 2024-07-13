import { useImages } from './images'

interface ActiveImageProps {
  showFullImage: boolean
  setActiveImage: React.Dispatch<React.SetStateAction<number | undefined>>
  setShowFullImage: React.Dispatch<React.SetStateAction<boolean>>
  activeImage: number
}

export function ActiveImage({
  showFullImage,
  setActiveImage,
  setShowFullImage,
  activeImage,
}: ActiveImageProps) {
  const { images } = useImages()

  return (
    <div
      className={
        showFullImage
          ? 'absolute min-w-full min-h-full'
          : 'fixed flex w-full h-full bg-black/90 justify-center'
      }
      onClick={() => {
        setActiveImage(undefined)
        setShowFullImage(false)
      }}
    >
      <img
        src={
          showFullImage ? images[activeImage].url : images[activeImage].largeUrl
        }
        className={
          'self-center max-w-none ' +
          (showFullImage
            ? 'min-w-full min-h-full cursor-zoom-out'
            : 'max-w-full max-h-full cursor-zoom-in')
        }
        onClick={(e) => {
          e.stopPropagation()
          setShowFullImage((b) => !b)
        }}
      />
    </div>
  )
}
