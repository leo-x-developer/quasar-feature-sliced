import { IUserDtoLogin, IUserDtoRegistration } from '@shared/api';
import { viewerModel } from '@entities/viewer';
import { useRouter } from 'vue-router';
import { authModel } from '@features/auth';
import { jwt } from '@shared/api/bakery';

export const useAuth = () => {
  const router = useRouter();
  const viewerStore = viewerModel.store()

  const register = async (dto:IUserDtoRegistration, remember:boolean) => {
    authModel.preloader.show()
    try {
      const { data } = await authModel.api.register(dto)
      jwt.setToken(data.value, remember)
      viewerStore.setViewer(data.value)
      router.go(0)
    } catch (e) {
      authModel.notify.error()
    }
    finally {
      authModel.preloader.hide()
    }
  }

  const login = async (dto:IUserDtoLogin, remember:boolean) => {
    authModel.preloader.show()
    try {
      const { data } = await authModel.api.login(dto)
      jwt.setToken(data.value, remember)
      viewerStore.setViewer(data.value)
      router.go(0)
    } catch (e) {
      authModel.notify.error()
    }
    finally {
      authModel.preloader.hide()
    }
  }

  const logout = () => {
    viewerStore.logout()
    jwt.removeToken()
  }

  return {
    register,
    login,
    logout,
  }
}


