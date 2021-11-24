import { BASE_AUTH_URL, UserDtoLogin, UserDtoRegistration} from '@shared/api';
import { useApi } from '@shared/api/bakery';

export const login = async (dto:UserDtoLogin) => {
  const { post, ...rest } = useApi(BASE_AUTH_URL.login)
  await post(dto)
  return { ...rest }
}

export const register = async (dto:UserDtoRegistration) => {
  const { post, ...rest } = useApi(BASE_AUTH_URL.register)
  await post(dto)
  return { ...rest }
}
