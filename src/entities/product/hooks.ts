import { useRouter } from 'vue-router';
import { productModel } from '@entities/product';
import { Product } from '@shared/api';
import { rubleSign } from '@shared/lib'

export const useProduct = (product: Product) => {
  const router = useRouter()
  const { multiplicationSign, equalSign } = productModel

  const goToProductPage = () => {
    return router.push({
      name: 'ProductPage',
      params: { id: product?.id }
    })
  }

  return {
    goToProductPage,
    rubleSign,
    multiplicationSign,
    equalSign
  }
}
