/** @type {import('tailwindcss').Config} */

const galleryItemSize = '196px'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        gallery: `repeat(auto-fill,minmax(${galleryItemSize}, 1fr))`,
      },
      width: {
        thumb: galleryItemSize,
      },
      height: {
        thumb: galleryItemSize,
      },
    },
  },
  plugins: [],
}
