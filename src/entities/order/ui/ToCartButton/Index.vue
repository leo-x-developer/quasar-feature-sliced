<template>
  <q-btn
    push
    color="white"
    text-color="primary"
    round
    icon="las la-shopping-cart"
    :to="{ name: 'Cart' }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export const ToCartButton = defineComponent({})
export default ToCartButton
</script>
