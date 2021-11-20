import { UserDto } from '@shared/api';
import { useApi } from '@shared/api/bakery';

export enum BASE_URL {
  login = 'login',
  register = 'register',
}

export const login = async (dto:UserDto) => {
  const {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    post
  } = useApi(BASE_URL.login)

  await post(dto)

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
  }
}

export const register = async (dto:UserDto) => {
  const {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    post
  } = useApi(BASE_URL.register)

  await post(dto)

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
  }
}
