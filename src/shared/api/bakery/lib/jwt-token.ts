import { Cookies } from 'quasar';
import { bakeryAuthKey } from '@shared/api/bakery';
import { JwtToken } from '@shared/api';
import { transformRawDataToViewerData } from '@shared/api/bakery';

const jwtToken:JwtToken = Cookies.get(bakeryAuthKey)

export const token = () => {
  if(jwtToken) {
    return jwtToken.jwt
  } else {
    return null
  }
}

export const viewer = () => {
  if(jwtToken) {
    return transformRawDataToViewerData(jwtToken.user)
  } else {
    return null
  }
}

export const setToken = (payload: JwtToken, remember: boolean) => {
  if (payload && remember) {
    Cookies.set(bakeryAuthKey, JSON.stringify(payload), {expires: '2h'});
  }
}

export const removeToken = () => {
  Cookies.remove(bakeryAuthKey);
}
