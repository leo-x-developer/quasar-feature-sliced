import { Router } from 'vue-router';
import { authModel } from '@features/auth';
import { viewerModel } from '@entities/viewer';

export const checkAuthBeforeGoingToThePage = (router:Router) => {
  const authStore = authModel.store()
  const viewerStore = viewerModel.store()

  router.beforeEach((to, from, next) => {
    const role:any = viewerModel.store().viewer?.role.name
    const authorize = to.meta.authorize

    if (to.meta.requiresAuth && !authStore.loggedIn) {
      next({ name: 'Login' })
    }

    else if (
      (to.name == 'Login' || to.name == 'Registration')
      && authStore.loggedIn
    ) {
      next({ name: viewerStore.homePage, replace: true })
    }

    else if(
      to.meta.requiresAuth
      && authStore.loggedIn
      && !(authorize as [string])?.includes(role)
    ) {
      next({ name: viewerStore.homePage, replace: true })
    }

    else next()
  })
}
