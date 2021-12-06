import { defineStore } from 'pinia';
import { Product, Products } from '@shared/api';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: null
  } as {
    products: Products
  }),

  actions: {
    setProducts(payload: Product[]) {
      this.$patch((state) => {
        state.products = payload;
      });
    },
    clear() {
      this.clear()
    }
  }
})
