import {Email, Id, Image} from '@shared/types';

export enum BASE_AUTH_URL {
  login = 'auth/local',
  register = 'auth/local/register',
}

export type Token = {
  jwt: string,
  user: IUser
}

export interface IUser {
  id: Id,
  name: string | null,
  email: Email | null,
  role: Role
  orders:IOrder[]
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
  id?: Id,
  name: string,
  description: string,
  price: number,
  img: Image
}

export interface IOrder {
  id?: Id,
  users: Pick<IUser, 'id'>[]
  products: Pick<IProduct, 'id'>[],
  complete: boolean,
  totalSum: number
}

export type Role = {
  id: Id,
  name: 'client' | 'cook',
  description: string,
  type: string
}

export type Viewer = IUser | null
export type Order = IOrder | null
