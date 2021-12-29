<template>
  <q-card class="cart-info">
    <q-card-section class="text-center">
      <div class="text-h6">Итого: {{ cartCounter }} шт.</div>
      <div class="text-body1"> на сумму: {{ totalSum }} {{ rubleSign }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { orderModel } from '@entities/order';
import { rubleSign } from '@shared/lib';

export const CartInfo = defineComponent({
  setup() {
    const cartStore = orderModel.cart.store()
    const { cartCounter, totalSum } = storeToRefs(cartStore)

    return {
      cartCounter,
      totalSum,
      rubleSign
    }
  }
})
export default CartInfo
</script>

<style lang="sass" scoped>
.cart-info
  width: 250px
</style>

