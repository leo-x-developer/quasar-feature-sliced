import { useApi } from '@shared/api/bakery';
import { Viewer } from '@shared/api';
import { Id } from '@shared/types';

enum BASE_URL {
  products = '/products'
}

type GetProductByIdParams = {
  productId: Id;
};

type UpdateProductByIdParams = {
  productId: Id;
  params: Partial<Viewer>
};

export const all = async () => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(BASE_URL.products)

  await get()

  return {
    data,
    loading,
    error,
  }
}
export const findById = async ({ productId, ...params }: GetProductByIdParams) => {
  const {
    data,
    loading,
    error,
    get
  } = useApi(`${BASE_URL.products}/${productId}`)

  await get(params)

  return {
    data,
    loading,
    error,
  }
}
export const updateById = async ({ productId, params }: UpdateProductByIdParams) => {
  const {
    data,
    loading,
    error,
    put
  } = useApi(`${BASE_URL.products}/${productId}`)

  await put({...params})

  return {
    data,
    loading,
    error,
  }
}
