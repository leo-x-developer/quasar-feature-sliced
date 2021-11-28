import { defineStore } from 'pinia';
import { Roles, Viewer}  from '@shared/api';
import { bakeryApi } from '@shared/api'

export const useViewerStore = defineStore('viewer', {
  state: () => ({
    viewer: null
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
    },
    async updateProfile(payload:Partial<Viewer>) {
      const { viewer } = await bakeryApi.users.updateById({
        userId: this.viewer?.id!,
        params:payload
      })
      // @ts-ignore
      this.setViewer(viewer)
    }
  }
})
