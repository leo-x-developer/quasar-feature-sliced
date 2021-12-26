import { Date, Email, Id, Image } from '@shared/types';

export enum BASE_AUTH_URL {
  login = 'auth/local',
  register = 'auth/local/register',
}

export type JwtToken = {
  jwt: string,
  user: IUserRawData
}

export interface IUser {
  id: Id,
  name: string | null,
  email: Email | null,
  role: Role
  orders:IOrder[],
  confirmed: boolean,
  blocked: boolean,
  createdAt: Date,
  updatedAt: Date,
  wallet: number
}

export interface IUserRawData {
  id: Id,
  email: Email | null,
  role: Role
  orders:IOrder[],
  confirmed: boolean,
  blocked: boolean,
  createdAt: Date,
  updatedAt: Date,
  username: string
}

export interface IUserDtoLogin {
  identifier: string,
  password: string,
  confirmPassword?: string,
}

export interface IUserDtoRegistration {
  username: string,
  email: Email,
  password: string
}

export interface strapiImg {
  id: Id,
  name: string,
  alternativeText: string,
  caption: string,
  width: number,
  height: number,
  formats: {
    thumbnail: {
      name: string,
      hash: string,
      ext:  string,
      mime: string,
      width: number,
      height: number,
      size: number,
      path: string,
      url: string
    },
    mall: {
      name: string,
      hash: string,
      ext:  string,
      mime: string,
      width: number,
      height: number,
      size: number,
      path: string,
      url: string
    }
  },
  hash: string,
  ext:  string,
  mime: string,
  size: number,
  url: Image,
  previewUrl: string,
  provider: string,
  provider_metadata: string,
  created_at: Date,
  updated_at: Date
}

export interface IProduct {
  id?: Id,
  name: string,
  description: string,
  price: number,
  img: strapiImg
}

export interface ICartProduct extends IProduct {
  count: number,
  totalSum: number
}

export interface IOrder {
  id?: Id,
  users: Pick<IUser, 'id'>[]
  products: Pick<IProduct, 'id'>[],
  complete: boolean,
  totalSum: number
}

export enum Roles {
  client = 'client',
  cook = 'cook'
}

export type Role = {
  id: Id,
  name: Roles.cook | Roles.client,
  description: string,
  type: string
}

export type Viewer = IUser | null
export type Order = IOrder | null
export type Product = IProduct | null
export type Products = Product[] | null
export type CartProducts = Partial<ICartProduct>[] | []
