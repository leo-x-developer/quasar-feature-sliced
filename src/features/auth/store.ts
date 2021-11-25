import { defineStore } from 'pinia';
import { Token } from '@shared/types';
import { jwt } from '@shared/api/bakery';

export interface AuthStore {
  token: Token,
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: jwt.token()
  } as AuthStore),

  getters: {
    loggedIn: (state) => !!state.token
  },

  actions: {
    setToken(token:Token) {
      this.$patch((state) => {
        state.token = token;
      });
    },
  }
})
