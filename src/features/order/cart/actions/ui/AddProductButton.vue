<template>
  <q-btn
    icon="las la-shopping-cart"
    color="primary"
    label="В корзину"
    @click="addProduct()"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@shared/api';
import { cart } from '@features/order';

export const AddProductButton = defineComponent({
  props: {
    product: Object as PropType<Product>
  },

  setup(props) {
    return {
      addProduct: () => cart.actions.addProduct(props.product!)
    };
  },
});

export default AddProductButton
</script>
