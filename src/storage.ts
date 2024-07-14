import { ImageData } from './types'
import { Artist } from './useArtists'

type ArtistStorage = {
  images: ImageData[]
}

type Storage = Record<Artist['id'], ArtistStorage>

function getStorage() {
  const storageJson = localStorage.getItem('art-history')
  return storageJson ? (JSON.parse(storageJson) as Storage) : undefined
}

function setStorage(storage: Storage) {
  localStorage.setItem('art-history', JSON.stringify(storage))
}

function getArtist(artistId: Artist['id']) {
  const storage = getStorage()
  return storage && storage[artistId]
}

function setArtist(artistId: Artist['id'], artistStorage: ArtistStorage) {
  const storage = getStorage() || {}
  const newStorage = { ...storage, [artistId]: artistStorage }

  setStorage(newStorage)
}

export function getArtistImages(artistId: Artist['id']) {
  return getArtist(artistId)?.images
}

export function setArtistImages(artistId: Artist['id'], data: ImageData[]) {
  setArtist(artistId, { images: data })
}
