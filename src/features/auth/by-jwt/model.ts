import { LocalStorage } from 'quasar';
import { AUTH_KEY } from '@shared/api/bakery';
import { Token } from '@shared/types';
import { Viewer } from '@shared/api';

const jwtToken:Token = LocalStorage.getItem(AUTH_KEY)

export const getJwtToken = () => {
  if(jwtToken) {
    return JSON.parse(jwtToken).jwt
  } else {
    return null
  }
}

export const getViewer = () => {
  if(jwtToken) {
    return JSON.parse(jwtToken).user
  } else {
    return null
  }
}

export const setToken = (payload: Viewer, remember: boolean) => {
  if (payload && remember) {
    LocalStorage.set(AUTH_KEY, JSON.stringify(payload));
  }
}

export const removeToken = () => {
  LocalStorage.remove(AUTH_KEY);
}
