import { Product } from '@shared/api';
import { orderModel } from '@entities/order';

export const addProduct = (product:Product) => {
  const cart = orderModel.cart.store()
  cart.$patch((state) => state.cart = [ ...state.cart, product ]);
}
