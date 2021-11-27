import { Router } from 'vue-router';
import { authModel } from '@features/auth';

export const showSuccessMessageIfCompleteAuth = (router:Router) => {
  router.afterEach((to, from) => {
    if (to.path === '/' && from.name == 'Login'){
      authModel.notify.success('Nice to see you agan')
    } else if (to.path === '/' && from.name == 'Registration') {
      authModel.notify.success('Registration completed successfully')
    }
  })
}
