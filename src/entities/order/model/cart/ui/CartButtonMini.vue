<template>
  <q-btn
    push
    color="pink"
    text-color="white"
    round
    icon="las la-shopping-cart"
    :to="to"
  >
    <slot/>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { QBtn } from 'quasar'

export const CartButtonMini = defineComponent({
  props: {
    to: Object as PropType<Pick<QBtn, 'to'>>
  },
})
export default CartButtonMini
</script>
