import { Router } from 'vue-router';
import { authModel, authSuccessNotification } from '@features/auth';

export const checkAuthBeforeGoingToThePage = (router:Router) => {
  const authStore = authModel.store()

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !authStore.loggedIn) {
      next({ name: 'Login' })
    }

    else if ((to.name == 'Login' || to.name == 'Registration') && authStore.loggedIn) {
      next({ name: 'ViewerHome' })
      authSuccessNotification()
    }

    else next()
  })
}

