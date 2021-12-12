<template>
  <q-page :style-fn="tweek">
    <h5 class="q-my-sm">
      Корзина
    </h5>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { tweek } from '@pages/Order';

export const Cart = defineComponent({
  setup () {
    return {
      tweek
    }
  }
});

export default Cart
</script>
