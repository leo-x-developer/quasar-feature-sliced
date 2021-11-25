import { defineStore } from 'pinia';
import { Viewer } from '@shared/api';
import { jwt } from '@shared/api/bakery'

export const useViewerStore = defineStore('viewer', {
  state: () => ({
    viewer: jwt.viewer()
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
