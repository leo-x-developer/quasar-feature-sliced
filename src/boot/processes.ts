import { boot } from 'quasar/wrappers';
import {
  checkAuthBeforeGoingToThePage,
  showSuccessMessag
} from '@processes/auth';

export default boot(({  router}) => {
  checkAuthBeforeGoingToThePage(router)
  showSuccessMessag(router)
})
