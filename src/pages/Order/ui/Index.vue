<template>
  <q-page
    class="full-height"
    padding
  >
    <q-stepper
      v-model="step"
      alternative-labels
      color="primary"
      active-color="secondary"
      :active-icon="step === 1 ? 'shopping_cart' : 'create'"
      :done="step"
    >
      <q-step
        v-for="st in steps"
        :key="`${st.name}-st-key`"
        :name="st.name"
        :prefix="st.prefix"
        :title="st.title"
        :icon="st.icon"
        :done="step > st.name"
      />
    </q-stepper>

    <router-view />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <cart-info
        v-if="cartCounter"
        class="q-mb-md"
      />
      <q-btn
        rounded
        size="lg"
        :disable="!cartCounter"
        @click="nextStep()"
        color="accent"
        :label="step === 3 ? 'Finish' : 'Продолжить'"
      />
      <q-btn
        v-if="step > 1"
        flat
        rounded
        size="lg"
        color="primary"
        @click="prevStep()"
        label="Back"
        class="q-ml-sm"
      />
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { orderPageModel, cartPageModel } from '@pages/Order';
import { CartInfo } from '@entities/order';

export const Order = defineComponent({
  components: {
    CartInfo
  },
  setup () {
    const { step, steps, prevStep, nextStep } = orderPageModel.hooks.useOrderPage()
    const { cartCounter, totalSum } = cartPageModel.hooks.useCartPage()

    return {
      steps,
      step,
      nextStep,
      prevStep,
      cartCounter,
      totalSum
    }
  }
});

export default Order
</script>

<style lang="sass" scoped>
::v-deep(.q-stepper__step-inner)
  display: none
</style>
