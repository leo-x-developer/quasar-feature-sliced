import { Viewer } from '@shared/api';
import { authModel } from '@features/auth';
import { viewerModel } from '@entities/viewer';

export const setViewer = (payload:Viewer) => {
  viewerModel.setViewer(payload)
  authModel.state.error = null
}

export const logout = () => {
  viewerModel.logout()
}

export const setAuthenticating = (value:boolean) => {
  authModel.state.authenticating = value
}
