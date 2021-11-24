import { UserDtoLogin, UserDtoRegistration } from '@shared/api';
import { viewerModel } from '@entities/viewer';
import { useRouter } from 'vue-router';
import {
  authByJwt,
  authModel,
  showSpinerOverlay,
  hideSpinerOverlay,
  authErrorNotification
} from '@features/auth';


export const useAuth = () => {
  const router = useRouter();
  const viewerStore = viewerModel.store()

  const register = async (dto:UserDtoRegistration, remember:boolean) => {
    try {
      showSpinerOverlay(true)
      const { data } = await authModel.api.register(dto)
      authByJwt.setToken(data.value, remember)
      viewerStore.setViewer(data.value)
      await router.push({name: 'ViewerHome'})
    } catch (e) {
      hideSpinerOverlay()
      authErrorNotification()
    }
  }

  const login = async (dto:UserDtoLogin, remember:boolean) => {
    try {
      showSpinerOverlay(true)
      const { data } = await authModel.api.login(dto)
      authByJwt.setToken(data.value, remember)
      viewerStore.setViewer(data.value)
      router.go(0)
    } catch (e) {
      hideSpinerOverlay()
      authErrorNotification()
    }
  }

  const logout = () => {
    viewerStore.logout()
    authByJwt.removeToken()
  }

  return {
    register,
    login,
    logout,
  }
}


