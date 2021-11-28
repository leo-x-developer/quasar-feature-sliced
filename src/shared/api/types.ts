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
