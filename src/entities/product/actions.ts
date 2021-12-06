import * as productModel from './model';
import { bakeryApi } from '@shared/api';

export const mountProducts = async () => {
  const productsStore = productModel.store()
  const { products } = await bakeryApi.products.all()
  productsStore.setProducts(products)
}
