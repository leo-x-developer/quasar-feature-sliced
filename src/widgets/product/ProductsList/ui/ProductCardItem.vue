<template>
  <q-card class="product-card-item">
    <product-card-info :product="product" />
    <q-card-actions>
      <add-product-button :product="product"/>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@shared/api';
import { ProductCardInfo } from '@entities/product';
import { AddProductButton } from '@features/order';

export const ProductCardItem = defineComponent({
  components: {
    ProductCardInfo,
    AddProductButton
  },
  props: {
    product: Object as PropType<Product>
  },
})

export default ProductCardItem
</script>

<style lang="sass" scoped>
.product-card-item
  width: 100%
  max-width: 350px
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
