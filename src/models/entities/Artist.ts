import { get } from 'lodash'

export interface IArtist {
  id?: number
  name: string
}

export class Artist implements IArtist {
  id?: number
  name: string

  constructor(obj: object) {
    this.id = get(obj, 'id')
    this.name = get(obj, 'name')
  }
}
