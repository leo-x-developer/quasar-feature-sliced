<template>
  <div>
    <h3>Product List</h3>
    {{ allProducts }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { productsModel } from '@entities/products';

export default defineComponent({
  components: {},

  async setup() {
    const productStore = productsModel.store()
    await productsModel.actions.mountProducts()
    const allProducts = productStore.products

    return {
      allProducts
    }
  }
})
</script>
