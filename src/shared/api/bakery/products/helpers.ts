import { Product } from '@shared/api';
import appImageHref from '@shared/lib/helpers/appImageHref';

export const formatRawProduct = (product: Product) => {
  if(!product) return null

  return {
    ...product,
    img: Object.keys(product.img).reduce((acc) => {
      return {
        ...acc,
        url: appImageHref(product.img.url)
      }
    }, {})
  }
}
