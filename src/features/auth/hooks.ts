import { UserDtoLogin, UserDtoRegistration } from '@shared/api';
import { authByJwt, authModel } from '@features/auth';
import { viewerModel } from '@entities/viewer'

export const useAuth = () => {
  const viewerStore = viewerModel.store()

  const register = async (dto:UserDtoRegistration, remember:boolean) => {
    const { data } = await authModel.api.register(dto)
    if (data) {
      authByJwt.setToken(data.value, remember)
      viewerStore.setViewer(data.value)
    }
  }

  const login = async (dto:UserDtoLogin, remember:boolean) => {
    const { data } = await authModel.api.login(dto)
    if(data) {
      authByJwt.setToken(data.value, remember)
      viewerStore.setViewer(data.value)
    }
  }

  const logout = () => {
    viewerStore.logout()
    authByJwt.removeToken()
  }

  return {
    register,
    login,
    logout,
  }
}
