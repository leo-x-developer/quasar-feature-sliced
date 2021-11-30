import { AxiosRequestConfig } from 'axios';
import { authModel } from '@features/auth';

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = authModel.store().token  // to refactor layers !
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
