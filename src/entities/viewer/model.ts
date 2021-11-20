import { User } from '@shared/api';
import { viewerStore } from '@entities/viewer';

export const setUser = (payload:User) => {
  viewerStore.user = payload
  viewerStore.error = undefined
}

export const logout = () => {
  viewerStore.user = undefined
}

export const setAuthenticating = (value:boolean) => {
  viewerStore.authenticating = value
}
