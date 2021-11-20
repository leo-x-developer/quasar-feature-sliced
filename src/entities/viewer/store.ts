import { reactive } from 'vue';
import { ViewerState } from '@shared/api';

export const viewerStore = reactive<ViewerState>({
  authenticating: false,
  user: undefined,
  error: undefined,
})


