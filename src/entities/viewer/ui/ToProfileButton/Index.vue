<template>
  <q-btn
    push
    color="white"
    text-color="primary"
    round
    icon="las la-user-circle"
    :to="{ name: 'Profile' }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export const ToProfileButton = defineComponent({})
export default ToProfileButton
</script>
