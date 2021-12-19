<template>
  <q-btn
    push
    color="indigo"
    text-color="secondadry"
    class="q-pa-sm"
    icon="las la-bread-slice"
    :to="{ path: '/' }"
  >
    <slot />
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export const ToProductListButton = defineComponent({})
export default ToProductListButton
</script>
