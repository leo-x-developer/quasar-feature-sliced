import { defineStore } from 'pinia';
import { Token } from '@shared/types';
import { authByJwt } from '@features/auth';

export interface AuthStore {
  token: Token,
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: authByJwt.getJwtToken()
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
