<template>
  <q-page class="full-height" padding>
    <h4 class="q-my-md">
      {{ product.name }}
    </h4>
    <product-page-card :product="product" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { bakeryApi } from '@shared/api';
import { ProductPageCard } from '@entities/product';

export const ProductPage = defineComponent({
  components: { ProductPageCard },
  props: {
    id: [Number, String]
  },

  async setup(props) {
    const { product } = await bakeryApi.products.byId(Number(props.id))

    return {
      product
    }
  }
});

export default ProductPage
</script>
