import { UserDtoLogin, UserDtoRegistration } from '@shared/api';
import { useApi } from '@shared/api/bakery';

export enum BASE_URL {
  login = 'auth/local',
  register = 'auth/local/register',
}

export const login = async (dto:UserDtoLogin) => {
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

export const register = async (dto:UserDtoRegistration) => {
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
