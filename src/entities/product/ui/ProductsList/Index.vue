<template>
  <div>
    <h3 class="q-my-md">Product List</h3>
    <div class="q-pa-md row q-gutter-md">
      <ProductCard
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

export default defineComponent({
  components: {
    ProductCard
  },

  async setup() {
    const productStore = productModel.store()
    await productModel.actions.mountProducts()
    const allProducts = productStore.products

    return {
      allProducts
    }
  }
})
</script>
