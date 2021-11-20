import { authModel } from '@features/auth';
import { Router } from 'vue-router';

export const checkAuthBeforeGoingToThePage = (router:Router) => {

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !authModel.state.viewer) {
      next({ name: 'Login' })
    }

    else if ((to.name == 'Login' || to.name == 'Registration') && authModel.state.viewer) {
      next({ name: 'ViewerHome' })
    }

    else next()
  })
}

