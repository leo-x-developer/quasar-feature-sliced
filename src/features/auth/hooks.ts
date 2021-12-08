import { IUserDtoLogin, IUserDtoRegistration } from '@shared/api';
import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';
import { jwt } from '@shared/api/bakery';
import { useRouter } from 'vue-router';

export const useAuth = () => {
  const router = useRouter()
  const viewerStore = viewerModel.store()

  const register = async (dto:IUserDtoRegistration, remember:boolean) => {
    authModel.preloader.show()
    try {
      const { data } = await authModel.api.register(dto)
      authModel.actions.setAuthData(data, remember)
    } catch (e) {
      authModel.notify.error('Registration error!')
    }
    finally {
      authModel.preloader.hide()
    }
  }

  const login = async (dto:IUserDtoLogin, remember:boolean) => {
    authModel.preloader.show()
    try {
      const { data } = await authModel.api.login(dto)
      authModel.actions.setAuthData(data, remember)
    } catch (e) {
      authModel.notify.error('LoginPage error!')
    }
    finally {
      authModel.preloader.hide()
    }
  }

  const logout = () => {
    viewerStore.logout()
    jwt.removeToken()
    router.go(0)
  }

  return {
    register,
    login,
    logout,
  }
}


