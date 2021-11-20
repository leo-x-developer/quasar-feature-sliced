import { boot } from 'quasar/wrappers';
import {withAuth} from '@app/auth';

export default boot(async ({ app }) => {
  console.log('app -------->', app)

  await withAuth()
})
