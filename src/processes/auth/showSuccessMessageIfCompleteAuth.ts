import { Router } from 'vue-router';
import { authModel } from '@features/auth';

export const showSuccessMessageIfCompleteAuth = (router:Router) => {
  router.afterEach((to, from) => {
    if (
      to.name === 'ViewerHome'
      && (
        from.path == '/'
        || from.name == 'Login'
        || from.name == 'Registration'
      ))
    {
      authModel.notify.success()
    }
  })
}
