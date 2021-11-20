import { Viewer } from '@shared/api';
import { viewerModel } from '@entities/viewer/index';

export const setViewer = (payload:Viewer) => {
  viewerModel.state.value = payload
}

export const logout = () => {
  viewerModel.state.value = null
}
