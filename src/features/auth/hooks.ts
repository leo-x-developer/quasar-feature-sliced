import { Viewer } from '@shared/api';
import { authByJwt, authModel } from '@features/auth';

export const useAuth = () => {
  const setViewer = (payload: Viewer, remember: boolean) => {
    if (payload) {
      authByJwt.setToken(payload, remember)
      authModel.setViewer(payload)
    }
  }

  const logout = () => {
    authByJwt.removeToken()
    authModel.logout()
  }

  return {
    setViewer,
    logout,
  }
}
