<template>
  <q-page :style-fn="tweek">
    <h5 class="q-my-sm">
      Получение заказа
    </h5>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { tweek } from '@pages/Order';

export const Result = defineComponent({
  setup () {
    return {
      tweek
    }
  }
});

export default Result
</script>
