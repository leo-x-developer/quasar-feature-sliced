import { User } from '@src/shared/api';
import { viewerModel } from '@src/entities/viewer';
import { authByJwt } from '@src/features/auth';
import { watch } from 'vue';
import { bakeryApi } from '@src/shared/api';

export const useAuth = () => {
  const setUser = (payload: User, remember: boolean) => {
    authByJwt.setToken(payload, remember)
    viewerModel.setUser(payload)
  }

  const logout = () => {
    authByJwt.removeToken()
    viewerModel.logout()
  }

  const checkAuth = async () => {
    if (authByJwt.token) {
      viewerModel.setAuthenticating(true)

      const {loading, error, data} = await bakeryApi.users.user(authByJwt.token)

      watch([loading], () => {
        if (error.value) {
          authByJwt.removeToken()
        } else if (data.value) {
          viewerModel.setUser(data.value)
        } else {
          viewerModel.setAuthenticating(false)
        }
      })
    }
  }

  return {
    setUser,
    logout,
    checkAuth
  }
}
