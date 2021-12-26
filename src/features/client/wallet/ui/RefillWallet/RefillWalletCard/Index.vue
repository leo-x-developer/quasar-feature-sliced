<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <h5 class="q-my-xs">{{ title }}</h5>
      <Form
        :validation-schema="schema"
        @submit="submit"
      >
        <Field
          name="wallet"
          v-slot="{ errorMessage, value, field }"
        >
          <q-input
            dense
            :model-value="value"
            v-bind="field"
            outlined
            :hint="minPaymentMessage"
            :error-message="errorMessage"
            :error="!!errorMessage"
          >
            <template #append>
              {{ rubleSign }}
            </template>
          </q-input>
        </Field>

        <q-btn
          class="q-mt-md"
          color="primary"
          type="submit"
          label="Пополнить"
        />
      </Form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Field, Form } from 'vee-validate';
import { useRefillWalletCard } from './hooks';

export const RefillWalletCard = defineComponent({
  components: {
    Field,
    Form,
  },

  setup() {
    return {
      ...useRefillWalletCard()
    }
  }
})
export default RefillWalletCard
</script>
