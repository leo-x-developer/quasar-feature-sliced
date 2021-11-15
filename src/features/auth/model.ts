import { User } from '@app/shared/api';
import { viewerModel } from '@app/entities/viewer';
import { authByJwt } from '@app/features/auth';

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
