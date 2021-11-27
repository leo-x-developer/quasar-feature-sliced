import { Cookies } from 'quasar';
import { AUTH_KEY } from '@shared/api/bakery';
import { JwtToken } from '@shared/api';

const jwtToken:JwtToken = Cookies.get(AUTH_KEY)

export const token = () => {
  if(jwtToken) {
    return jwtToken.jwt
  } else {
    return null
  }
}

export const viewer = () => {
  if(jwtToken) {
    return jwtToken.user
  } else {
    return null
  }
}

export const setToken = (payload: JwtToken, remember: boolean) => {
  if (payload && remember) {
    Cookies.set(AUTH_KEY, JSON.stringify(payload), {expires: '2h'});
  }
}

export const removeToken = () => {
  Cookies.remove(AUTH_KEY);
}
