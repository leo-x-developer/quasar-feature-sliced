import { defineStore } from 'pinia';
import { Viewer } from '@shared/api';

export const useViewerStore = defineStore('viewer', {
  state: () => ({
    viewer: null
  } as {
    viewer: Viewer
  }),

  actions: {
    setViewer(payload: Viewer) {
      this.$patch((state) => {
        state.viewer = payload;
      });
    },
    logout() {
      this.$patch((state) => {
        state.viewer = null;
      });
    }
  }
})
