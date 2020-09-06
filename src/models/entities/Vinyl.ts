import { Album } from './Album'
import { get } from 'lodash'

export interface IVinyl {
  id?: number
  album: Album
  price: number
  shop: string
  link: string
  imageSrc: string | undefined
}

export class Vinyl implements IVinyl {
  id?: number
  album: Album
  price: number
  shop: string
  link: string
  imageSrc: string | undefined

  constructor(obj: object) {
    this.id = get(obj, 'id')
    this.album = get(obj, 'album')
    this.price = get(obj, 'price')
    this.shop = get(obj, 'shop')
    this.link = get(obj, 'link')
    this.imageSrc = get(obj, 'imageSrc')
  }
}
