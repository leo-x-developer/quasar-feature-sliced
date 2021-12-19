<template>
  <q-img src="order/empty-cart.png" no-native-menu>
    <div class="absolute-top-right transparent">
      <slot/>
    </div>
  </q-img>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export const EmptyCartImage = defineComponent({})
export default EmptyCartImage
</script>

<style lang="sass" scoped>
.q-img
  max-width: 550px
</style>
