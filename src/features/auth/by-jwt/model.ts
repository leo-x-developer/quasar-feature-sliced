import { User } from '@src/shared/api';
import { LocalStorage } from 'quasar';
import { AUTH_KEY } from '@src/shared/api/bakery';
import { Token } from '@src/shared/types';

export const token:Token = LocalStorage.getItem(AUTH_KEY)

export const setToken = (payload: User, remember: boolean) => {
  if (remember) {
    LocalStorage.set(AUTH_KEY, JSON.stringify(payload));
  }
}

export const removeToken = () => {
  LocalStorage.remove(AUTH_KEY);
}
