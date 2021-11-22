import { Viewer } from '@shared/api';
import { authByJwt } from '@features/auth';
import { viewerModel } from '@entities/viewer'

export const useAuth = () => {
  const viewerStore = viewerModel.store()

  const setViewer = (payload: Viewer, remember: boolean) => {
    if (payload) {
      authByJwt.setToken(payload, remember)
      viewerStore.setViewer(payload)
    }
  }

  const logout = () => {
    viewerStore.logout()
    authByJwt.removeToken()
  }

  return {
    setViewer,
    logout,
  }
}
