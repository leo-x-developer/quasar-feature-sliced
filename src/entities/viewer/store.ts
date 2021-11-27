import { defineStore } from 'pinia';
import { Roles, Viewer}  from '@shared/api';
import { jwt } from '@shared/api/bakery'

export const useViewerStore = defineStore('viewer', {
  state: () => ({
    viewer: jwt.viewer()
  } as {
    viewer: Viewer
  }),

  getters: {
    homePage: (state) => state.viewer?.role.name === Roles.client
      ? 'ClientHome'
      : 'CookHome'
  },

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
