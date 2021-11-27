import { Router } from 'vue-router';
import { authModel } from '@features/auth';
import { viewerModel } from '@entities/viewer';

export const showSuccessMessageIfCompleteAuth = (router:Router) => {
  const viewerStore = viewerModel.store()

  router.afterEach((to, from) => {
    if (to.name === viewerStore.homePage && from.name == 'Login'){
      authModel.notify.success('Nice to see you agan')
    } else if (to.name === viewerStore.homePage && from.name == 'Registration') {
      authModel.notify.success('Registration completed successfully')
    }
  })
}
