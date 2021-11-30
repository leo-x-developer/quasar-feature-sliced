import { productsModel } from '@entities/products';
import { bakeryApi } from '@shared/api';

export const mountProducts = async () => {
  const productsStore = productsModel.store()
  const { data } = await bakeryApi.products.all()
  productsStore.setProducts(data.value)
}
