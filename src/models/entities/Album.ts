import { get } from 'lodash'
import { Artist } from './Artist'

export interface IAlbum {
  id?: number
  title: string
  artist: Artist
}

export class Album {
  id?: number
  title: string
  artist: Artist
  constructor(obj: object) {
    this.id = get(obj, 'id')
    this.title = get(obj, 'title')
    this.artist = get(obj, 'artist')
  }
}
