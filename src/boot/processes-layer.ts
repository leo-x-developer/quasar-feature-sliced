import { boot } from 'quasar/wrappers';
import { checkAuthBeforeGoingToThePage } from '@src/processes';

export default boot(({  router}) => {
  console.log('processes -------->', router)

  checkAuthBeforeGoingToThePage(router)
})
