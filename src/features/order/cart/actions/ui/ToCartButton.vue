<template>
  <cart-button-mini :to="{ name: 'Cart'}">
    <cart-counter-badge/>
  </cart-button-mini>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CartButtonMini, CartCounterBadge } from '@entities/order'

export const ToCartButton = defineComponent({
  components: {
    CartButtonMini,
    CartCounterBadge
  },
});

export default ToCartButton
</script>
