<template>
  <q-btn
    icon="las la-cart-plus"
    color="primary"
    @click="addProduct()"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@shared/api';
import { cart } from '@features/order';

export const IncrementProductButton = defineComponent({
  props: {
    product: Object as PropType<Product>
  },

  setup(props) {
    const addProduct = () => {
      if (props.product) cart.actions.addProduct(props.product)
    }
    return {
      addProduct
    };
  },
});

export default IncrementProductButton
</script>
