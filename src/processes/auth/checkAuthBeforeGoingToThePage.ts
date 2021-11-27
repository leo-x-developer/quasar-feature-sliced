import { Router } from 'vue-router';
import { authModel } from '@features/auth';
import { viewerModel } from '@entities/viewer';

export const checkAuthBeforeGoingToThePage = (router:Router) => {
  const authStore = authModel.store()
  const viewerStore = viewerModel.store()

  router.beforeEach((to, from, next) => {

    if (to.meta.requiresAuth && !authStore.loggedIn) {
      next({name: 'Login'})
    }

    else if ((to.name == 'Login' || to.name == 'Registration') && authStore.loggedIn) {
      next({ name: viewerStore.homePage })
    }

    else next()
  })
}
