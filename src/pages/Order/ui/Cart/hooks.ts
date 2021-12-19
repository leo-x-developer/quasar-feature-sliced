import { storeToRefs } from 'pinia'
import { orderModel } from '@entities/order';
import { tweek } from '@pages/Order';

export const useCartPage = () => {
  const cart = orderModel.cart.store()
  const { cartCounter } = storeToRefs(cart)

  return {
    tweek,
    cartCounter
  }
}
