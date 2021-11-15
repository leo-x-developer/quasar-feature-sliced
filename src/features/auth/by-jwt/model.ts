import { User } from '@app/shared/api';
import { LocalStorage } from 'quasar';

const STORAGE_KEY = 'viewer'

export const setToken = (payload: User, remember: boolean) => {
  if (remember) {
    LocalStorage.set(STORAGE_KEY, JSON.stringify(payload));
  }
}

export const removeToken = () => {
  LocalStorage.remove(STORAGE_KEY);
}
