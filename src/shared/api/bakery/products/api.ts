import { useApi } from '@shared/api/bakery';
import { Product } from '@shared/api';
import { Id } from '@shared/types';
import { formatRawProduct } from './helpers';

enum BASE_URL {
  products = '/products'
}

export const all = async () => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(BASE_URL.products)

  await get()
  const products = data.value.map((product:Product) => formatRawProduct(product))

  return {
    products,
    loading,
    error,
  }
}

export const byId = async (id: Id) => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(`${BASE_URL.products}/${id}`)

  await get()
  const product = formatRawProduct(data.value)

  return {
    product,
    loading,
    error,
  }
}
