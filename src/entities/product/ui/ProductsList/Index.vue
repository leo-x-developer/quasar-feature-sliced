<template>
  <div>
    <h3 class="q-my-md">Product List</h3>
    <div class="q-pa-md row q-gutter-md">
      <product-card
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { productModel } from '@entities/product';
import { ProductCard } from '@entities/product/ui/ProductCard';

export const ProductsList = defineComponent({
  components: {
    ProductCard
  },

  async setup() {
    const productStore = productModel.store()
    await productStore.mountProducts()
    const allProducts = productStore.products

    return {
      allProducts
    }
  }
})

export default ProductsList
</script>
