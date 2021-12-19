import { groupBy } from 'lodash';
import { CartProducts, ICartProduct } from '@shared/api';

export const toGroup = (cartProducts: CartProducts) => Object.values(
  groupBy(cartProducts, 'id')
).map((array) => {

  const [ product ] = new Set(array)

  const processedProduct:ICartProduct = {
    ...(product as ICartProduct),
    count: array.length,
    totalSum: array.length * (product.price as number)
  }

  return processedProduct
})
