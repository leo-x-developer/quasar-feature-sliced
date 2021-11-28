import { AxiosRequestConfig } from 'axios';
import { jwt } from '@shared/api/bakery';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = jwt.token()
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
