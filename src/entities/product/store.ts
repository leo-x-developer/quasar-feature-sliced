import { defineStore } from 'pinia';
import { bakeryApi, Products } from '@shared/api';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: null,
  } as {
    products: Products,
  }),

  actions: {
    async mountProducts() {
      const { products } = await bakeryApi.products.all()
      this.$patch((state) => {
        state.products = products;
      });
    },
    clear() {
      this.clear()
    }
  }
})
