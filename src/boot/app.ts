import { boot } from 'quasar/wrappers'
import { profileRequest } from '@app/viewer';

export default boot(async () => {
  await profileRequest()
})
