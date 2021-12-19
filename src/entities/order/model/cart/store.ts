import { defineStore } from 'pinia';
import { CartProducts, IProduct } from '@shared/api';
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
      return (state.cartProducts as [])
        .reduce((acc:number, current:IProduct) =>  current.price + acc, 0)
    }
  }
})
