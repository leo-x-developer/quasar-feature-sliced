import {viewerStore} from '@entities/viewer';
import {Router} from 'vue-router';


export const checkAuthBeforeGoingToThePage = (router:Router) => {

  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !viewerStore.user) {
      next({ name: 'Login' })
    }

    else if ((to.name == 'Login' || to.name == 'Registration') && viewerStore.user) {
      next({ name: 'ViewerHome' })
    }

    else next()
  })
}

