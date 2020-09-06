import axios from '@/axios'
import { AxiosInstance } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Resource = Record<string, any>
export abstract class HttpService<T extends Resource, F extends Resource> {
  protected http: AxiosInstance = axios
  abstract getAll(params?: F): Promise<T[]>
  abstract get(id: string | number): Promise<T>
  abstract endpoint: string
}
