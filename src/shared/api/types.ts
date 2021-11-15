import { Email } from '@app/shared/types';

export interface User {
  id: number
  name: string,
  email: Email,
}

export interface UserDto {
  email: Email,
  password: string,
  confirmPassword: string,
}

export interface ViewerState {
  authenticating: boolean;
  user?: User | null;
  error?: Error | null;
}

