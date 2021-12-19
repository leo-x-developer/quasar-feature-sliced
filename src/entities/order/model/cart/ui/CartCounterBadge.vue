<template>
  <q-badge
    v-if="cartCounter"
    color="black"
    rounded
    floating
  >
    {{ cartCounter }}
  </q-badge>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent } from 'vue';
import { orderModel } from '@entities/order';

export const CartCounterBadge = defineComponent({
  setup() {
    const cartStore = orderModel.cart.store()
    const { cartCounter } = storeToRefs(cartStore)

    return {
      cartCounter
    }
  }
})
export default CartCounterBadge
</script>
