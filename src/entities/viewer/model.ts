import { User } from '@app/shared/api';
import { viewerStore } from '@app/entities/viewer';

export const setUser = (payload:User) => {
  viewerStore.user = payload
  viewerStore.error = undefined
}

export const logout = () => {
  viewerStore.user = undefined
}
