import { storeToRefs } from 'pinia'
import { orderModel } from '@entities/order';
import { tweek } from '@pages/Order';

export const useCartPage = () => {
  const cart = orderModel.cart.store()
  const { cartCounter, totalSum } = storeToRefs(cart)

  return {
    tweek,
    cartCounter,
    totalSum
  }
}
