import { AxiosRequestConfig } from 'axios';
import { LocalStorage } from 'quasar';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = LocalStorage.getItem('token')
    const tokenType = LocalStorage.getItem('tokenType')

    if (token && tokenType) {
      config.headers.Authorization = `${tokenType} ${token}`;
    }

    return config;

  } catch (error:Error | any) {
    throw new Error(error);
  }
};

export default injectToken
