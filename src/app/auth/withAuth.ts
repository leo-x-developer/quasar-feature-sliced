import { authByJwt, authModel } from '@features/auth';
import { bakeryApi } from '@shared/api';
import { watch } from 'vue';

export const withAuth = async () => {
  if (authByJwt.token) {
    authModel.setAuthenticating(true)

    const { loading, error, data } = await bakeryApi.viewer.viewer(authByJwt.token)

    watch([loading], () => {
      if (error.value) {
        authByJwt.removeToken()
      } else if (data.value) {
        authModel.setViewer(data.value)
      } else {
        authModel.setAuthenticating(false)
      }
    })
  }
}
