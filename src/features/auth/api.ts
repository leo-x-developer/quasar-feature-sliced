import { BASE_AUTH_URL, IUserDtoLogin, IUserDtoRegistration} from '@shared/api';
import { bakeryApi } from '@shared/api';

export const login = async (dto:IUserDtoLogin) => {
  const { post, ...rest } = bakeryApi.useApi(BASE_AUTH_URL.login)
  await post(dto)
  return { ...rest }
}

export const register = async (dto:IUserDtoRegistration) => {
  const { post, ...rest } = bakeryApi.useApi(BASE_AUTH_URL.register)
  await post(dto)
  return { ...rest }
}
