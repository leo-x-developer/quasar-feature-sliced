import { defineStore } from 'pinia';
import { Order } from '@shared/api';

export const useOrderStore = defineStore('order', {
  state: () => ({
    order: null
  } as {
    order: Order
  }),

  actions: {
    setOrder(payload: Order) {
      this.$patch((state) => {
        state.order = payload;
      });
    },
    clear() {
      this.clear()
    }
  }
})
