import {Email, Image} from '@shared/types';

export enum BASE_AUTH_URL {
  login = 'auth/local',
  register = 'auth/local/register',
}

export interface IUser {
  id: number | null,
  name: string | null,
  email: Email | null,
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

export interface IProduct {
  id?: number,
  name: string,
  description: string,
  price: number,
  img: Image
}

export interface IOrder {
  users: Pick<IUser, 'id'>[]
  products: Pick<IProduct, 'id'>[],
  complete: boolean,
  totalSum: number
}

export type Viewer = IUser | null
export type Order = IOrder | null

