import { HttpService } from './HttpService'
import { Vinyl } from '@/models'

export class VinylService extends HttpService<Vinyl, Vinyl> {
  endpoint = 'api/vinyl'
  async getAll(params?: Vinyl | undefined): Promise<Vinyl[]> {
    return (await this.http.get(this.endpoint, { params })).data
  }
  async get(id: string | number): Promise<Vinyl> {
    return (await this.http.get(this.endpoint + '/' + id)).data
  }
}
