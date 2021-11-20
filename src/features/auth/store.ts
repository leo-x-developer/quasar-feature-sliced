import { reactive } from 'vue';
import { AuthState } from '@features/auth';
import { viewerModel } from '@entities/viewer';

export const authState = reactive<AuthState>({
  viewer: viewerModel.state.value,
  authenticating: false,
  error: null,
})


