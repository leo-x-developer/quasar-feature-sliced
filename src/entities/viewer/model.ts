import { User } from '@src/shared/api';
import { viewerStore } from '@src/entities/viewer';

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
