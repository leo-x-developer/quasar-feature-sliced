import { AxiosRequestConfig } from 'axios';
import { authByJwt } from '@features/auth';
import { bakeryApi } from '@shared/api';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const loginPath = config.url === bakeryApi.auth.BASE_URL.login
  const registerPath = config.url === bakeryApi.auth.BASE_URL.register

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
