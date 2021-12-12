<template>
  <q-page :style-fn="tweek">
    <h5 class="q-my-sm">
      Оформление
    </h5>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { tweek } from '@pages/Order';

export const Checkout = defineComponent({
  setup () {
    return {
      tweek
    }
  }
});

export default Checkout
</script>
