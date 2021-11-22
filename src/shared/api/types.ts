import { Email } from '@shared/types';

export interface User {
  id: number | null,
  name: string | null,
  email: Email | null,
}

export interface UserDtoLogin {
  identifier: string,
  password: string,
  confirmPassword?: string,
}

export interface UserDtoRegistration {
  username: string,
  email: Email,
  password: string
}

export type Viewer = User | null


