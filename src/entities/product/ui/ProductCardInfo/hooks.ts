import { useRouter } from 'vue-router';
import { productModel } from '@entities/product';
import { Product } from '@shared/api';

export const useProductCardInfo = (product: Product) => {
  const router = useRouter()
  const { rubleSign } = productModel

  const goToProductPage = () => {
    return router.push({
      name: 'ProductPage',
      params: { id: product?.id }
    })
  }

  return {
    goToProductPage,
    rubleSign
  }
}
