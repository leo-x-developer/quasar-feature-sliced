<template>
  <q-page :style-fn="tweek">
    <h5 class="q-my-sm">Корзина</h5>

    <div class="column">
      <h6 class="q-my-md">Содержимое заказа</h6>

      <cart-products-list
        v-if="cartCounter"
        class="self-center"
      />

      <empty-cart-image
        v-else
        class="self-center"
      >
        <to-product-list-button
          class="q-mx-auto"
        >
          <span class="q-mx-sm">Вся выпечка</span>
        </to-product-list-button>
      </empty-cart-image>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CartProductsList } from '@widgets/product';
import { cartPageModel } from '@pages/Order'
import { EmptyCartImage } from '@entities/order';
import { ToProductListButton } from '@entities/product';

export const Cart = defineComponent({
  components: {
    CartProductsList,
    EmptyCartImage,
    ToProductListButton
  },

  setup () {
    const { cartCounter, tweek } = cartPageModel.hooks.useCartPage()

    return {
      cartCounter,
      tweek
    }
  }
});

export default Cart
</script>
