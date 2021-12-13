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
    <div class="row q-pa-md">
      <div class="col-9">
        <router-view />
      </div>
      <div class="col">
        <q-btn
          @click="nextStep()"
          color="primary"
          :label="step === 3 ? 'Finish' : 'Continue'"
        />
        <q-btn
          v-if="step > 1"
          flat
          color="primary"
          @click="prevStep()"
          label="Back"
          class="q-ml-sm"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useOrderPage } from '@pages/Order';

export const Order = defineComponent({
  setup () {
    const { step, steps, prevStep, nextStep } = useOrderPage()

    return {
      steps,
      step,
      nextStep,
      prevStep,
    }
  }
});

export default Order
</script>

<style lang="sass" scoped>
::v-deep(.q-stepper__step-inner)
  display: none
</style>
