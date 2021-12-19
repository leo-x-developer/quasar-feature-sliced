<template>
  <div class="cart-product-list">
    <q-list
      bordered
      separator
    >
      <product-row-cart
        v-for="(product, idx) in groupCartProducts"
        :product="product"
        :key="`${idx}--${product.name}`"
      />
    </q-list>
    <q-separator
      class="q-my-md"
      color="red"
      inset
    />
    <div class="text-right text-h5 text-pink text-weight-bold">
     К оплате: {{totalSum}} {{ rubleSign }}
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue'
import { ProductRowCart } from './ProductRowCart.vue';
import { orderModel } from '@entities/order';
import { productModel } from '@entities/product';

export const CartProductsList = defineComponent({
  components: {
    ProductRowCart
  },

  setup() {
    const cart = orderModel.cart.store()
    const { groupCartProducts, totalSum } = storeToRefs(cart)
    const { rubleSign } = productModel

    return {
      groupCartProducts,
      totalSum,
      rubleSign
    }
  }
})

export default CartProductsList
</script>

<style lang="sass">
.cart-product-list
  max-width: 900px
</style>
