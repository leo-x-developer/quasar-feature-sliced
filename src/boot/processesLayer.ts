import { boot } from 'quasar/wrappers';
import {
  checkAuthBeforeGoingToThePage,
  showSuccessMessageIfCompleteAuth
} from '@processes/auth';

export default boot(({  router}) => {
  checkAuthBeforeGoingToThePage(router)
  showSuccessMessageIfCompleteAuth(router)
})
