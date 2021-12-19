import { IProduct } from '@shared/api';
import { orderModel } from '@entities/order';

export const addProduct = (product:IProduct) => {
  const cart = orderModel.cart.store()
  cart.$patch((state) => state.cartProducts = [ ...state.cartProducts, product ]);
}

export const removeProduct = (product:IProduct) => {
  const cart = orderModel.cart.store()
  cart.$patch((state) => {
    const productIdx = state.cartProducts.findIndex((el) => el.id === product.id)
    if(productIdx >= 0) {
      state.cartProducts.splice(productIdx, 1)
    }
  })
}
