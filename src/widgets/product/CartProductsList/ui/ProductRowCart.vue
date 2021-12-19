<template>
  <q-item
    class="justify-between text-body1"
    style="width: 600px"
  >
    <q-item-section class="col-grow">
      {{ product.name }}
    </q-item-section>

    <q-item-section
      top
      thumbnail
      class="q-mx-lg"
    >
      <img :src="product.img.url">
    </q-item-section>

    <q-item-section class="col-grow">
      <div class="row justify-between">
        <div class="col-grow text-red-5">
          {{ product.price }} {{ rubleSign }}
        </div>
        <div class="col-grow text-center">
          {{ multiplicationSign }}
        </div>
        <div class="col-grow text-center">
          {{ product.count }}
        </div>
        <div class="col-grow text-center">
          {{ equalSign }}
        </div>
        <div class="col-grow text-right text-red text-weight-bold">
          {{ product.totalSum }} {{ rubleSign }}
        </div>
      </div>
    </q-item-section>

    <q-item-section avatar>
      <div class="row q-gutter-x-sm">
        <increment-product-button
          class="col"
          :product="product"
        />
        <decrement-product-button
          class="col"
          :product="product"
        />
      </div>
    </q-item-section>

  </q-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IncrementProductButton, DecrementProductButton } from '@features/order';
import { productModel } from '@entities/product';
import { ICartProduct } from '@shared/api';

export const ProductRowCart = defineComponent({
  components: {
    IncrementProductButton,
    DecrementProductButton
  },
  props: {
    product: Object as PropType<ICartProduct>
  },

  setup(props) {
    const { rubleSign, multiplicationSign, equalSign } = productModel.useProduct(props.product!)

    return {
      rubleSign,
      multiplicationSign,
      equalSign
    }
  }
})

export default ProductRowCart
</script>
