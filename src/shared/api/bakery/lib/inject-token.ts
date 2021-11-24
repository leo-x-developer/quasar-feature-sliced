import { AxiosRequestConfig } from 'axios';
import { authByJwt } from '@features/auth';
import { BASE_AUTH_URL } from '@shared/api';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const loginPath = config.url === BASE_AUTH_URL.login
  const registerPath = config.url === BASE_AUTH_URL.register

  const isNotAuthPath = !(loginPath && registerPath)

  if (isNotAuthPath) {
    config.headers = null
    return config
  }

  try {
    const token = authByJwt.getJwtToken()
    const tokenType = 'Bearer'

    if (token) {
      config.headers.Authorization = `${tokenType} ${token}`;
    }

    return config;

  } catch (error:Error | any) {
    throw new Error(error);
  }
};

export default injectToken
