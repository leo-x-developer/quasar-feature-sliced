import { boot } from 'quasar/wrappers'
import { mountProfile } from '@app/requests';
import { authModel } from '@features/auth';

export default boot(async () => {
  const authStore = authModel.store()

  if(authStore.loggedIn) {
    await mountProfile()
  }
})
