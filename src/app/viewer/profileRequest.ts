import { bakeryApi } from '@shared/api'
import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';

export const profileRequest = async () => {
  const viewerStore = viewerModel.store()
  const authStore = authModel.store()

  if (authStore.loggedIn) {
    const { viewer } = await bakeryApi.users.profile()
    // @ts-ignore
    viewerStore.setViewer(viewer)
  }
}
