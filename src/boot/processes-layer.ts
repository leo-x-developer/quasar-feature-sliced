import { boot } from 'quasar/wrappers';
import { checkAuthBeforeGoingToThePage } from '@processes/auth';

export default boot(({  router}) => {
  console.log('processes -------->', router)

  checkAuthBeforeGoingToThePage(router)
})
