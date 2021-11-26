import { defineStore } from 'pinia';
import { jwt } from '@shared/api/bakery';

export interface AuthStore {
  token: string,
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: jwt.token()
  } as AuthStore),

  getters: {
    loggedIn: (state) => !!state.token
  },

  actions: {
    setToken(token:string) {
      this.$patch((state) => {
        state.token = token;
      });
    },
  }
})
