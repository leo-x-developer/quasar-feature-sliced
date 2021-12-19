<template>
  <q-btn
    icon="las la-trash-alt"
    color="red"
    @click="removeProduct()"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@shared/api';
import { cart } from '@features/order';

export const DecrementProductButton = defineComponent({
  props: {
    product: Object as PropType<Product>
  },

  setup(props) {
    const removeProduct = () => {
      if (props.product) cart.actions.removeProduct(props.product)
    }
    return {
      removeProduct
    };
  },
});

export default DecrementProductButton
</script>
