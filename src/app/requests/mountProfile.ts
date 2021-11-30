import { bakeryApi } from '@shared/api'
import { viewerModel } from '@entities/viewer';

export const mountProfile = async () => {
  const viewerStore = viewerModel.store()
  const { viewer } = await bakeryApi.users.profile()
  // @ts-ignore
  viewerStore.setViewer(viewer)
}
