import { Email } from '@shared/types';

export interface User {
  id: number | null,
  name: string | null,
  email: Email | null,
}

export interface UserDto {
  email: Email,
  password: string,
  confirmPassword?: string,
}

export type Viewer = User | null


