import { defineStore } from 'pinia';
import { CartProducts, Product } from '@shared/api';
import { orderModel } from '@entities/order';

export const useCart = defineStore('cart', {
  state: () => ({
    cartProducts: []
  } as {
    cartProducts: CartProducts
  }),

  getters: {
    cartCounter: (state) => state.cartProducts.length,
    groupCartProducts: (state) => orderModel.cart.toGroup(state.cartProducts),
    totalSum: (state) => {
      // @ts-ignore
      return (state.cartProducts as CartProducts)
        // @ts-ignore
        .reduce((acc:CartProducts, current:Product) =>  current.price + acc, 0)
    }
  }
})
