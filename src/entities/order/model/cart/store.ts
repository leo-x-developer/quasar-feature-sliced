import { defineStore } from 'pinia';
import { Cart } from '@shared/api';

export const useCart = defineStore('cart', {
  state: () => ({
    cart: []
  } as {
    cart: Cart
  }),
})
