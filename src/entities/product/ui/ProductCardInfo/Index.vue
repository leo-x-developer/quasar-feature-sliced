<template>
  <q-card class="my-card">
    <q-img
      height="250px"
      :src="product.img.url"
      @click="goToProductPage()"
    />
    <q-card-section>
      <div class="row items-center justify-between">
        <a
          class="col-shrink text-h5 q-mt-sm q-mb-xs cursor-pointer q-pr-lg q-py-md"
          @click="goToProductPage()"
        >
          {{ product.name }}
        </a>
        <span class="col-auto text-red text-weight-bold">
          {{ product.price }} {{ rubleSign }}
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@shared/api';
import { productModel } from '@entities/product';
import { rubleSign } from '@shared/lib'

export const ProductCardInfo = defineComponent({
  props: {
    product: Object as PropType<Product>
  },

  setup(props) {
    const { goToProductPage } = productModel.useProduct(props.product!)

    return {
      goToProductPage,
      rubleSign
    }
  }
})

export default ProductCardInfo
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  display: flex
  flex-direction: column
  justify-content: space-between
  border: none
  overflow: hidden

  .q-img
    transition: all .5s ease-out
    cursor: pointer

  &:hover
    .q-img
      transform: scale(1.1)

a
  transition: all .3s ease-out
  &:hover
    color: $primary
</style>
