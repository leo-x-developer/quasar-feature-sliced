<template>
  <q-page class="full-height" padding>
    <h4 class="q-my-md">
      {{ product.name }}
    </h4>
    <product-page-card :product="product">
      <add-product-button :product="product"/>
    </product-page-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { bakeryApi } from '@shared/api';
import { ProductPageCard } from '@entities/product';
import { AddProductButton } from '@features/order';

export const ProductPage = defineComponent({
  components: {
    ProductPageCard,
    AddProductButton
  },
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
