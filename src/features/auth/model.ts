import { User } from '@src/shared/api';
import { viewerModel } from '@src/entities/viewer';
import { authByJwt } from '@src/features/auth';

export const useAuth = () => {
  const setUser = (payload: User, remember: boolean) => {
    authByJwt.setToken(payload, remember)
    viewerModel.setUser(payload)
  }

  const logout = () => {
    authByJwt.removeToken()
    viewerModel.logout()
  }

  return {
    setUser,
    logout,
  }
}
