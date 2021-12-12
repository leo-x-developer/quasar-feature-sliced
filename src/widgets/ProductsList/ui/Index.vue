<template>
  <div>
    <h3 class="q-my-md">Product List</h3>
    <div class="q-pa-md row q-gutter-md">
      <product-card-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { bakeryApi } from '@shared/api';
import { ProductCardItem } from './ProductCardItem.vue';

export const ProductsList = defineComponent({
  components: {
    ProductCardItem
  },

  async setup() {
    const { products, /* error, loading */ } = await bakeryApi.products.all()

    return {
      products
    }
  }
})

export default ProductsList
</script>
