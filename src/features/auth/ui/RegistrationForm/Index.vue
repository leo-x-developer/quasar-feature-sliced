<template>
  <div style="width: 300px">

    <Form
      :validation-schema="schema"
      @submit="submit"
    >

      <Field name="username" v-slot="{ errorMessage, value, field }">
        <q-input
          label="Username"
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
        />
      </Field>

      <Field name="email" v-slot="{ errorMessage, value, field }">
        <q-input
          label="Email"
          placeholder="user@example.com"
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
        />
      </Field>

      <Field name="password" v-slot="{ errorMessage, value, field }">
        <q-input
          label="Password"
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
        />
      </Field>

      <Field name="confirmPassword" v-slot="{ errorMessage, value, field }">
        <q-input
          label="Confirmation password"
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
        />
      </Field>

      <q-btn
        class="q-mt-md"
        color="primary"
        type="submit"
        label="Submit"
      />
    </Form>
  </div>
</template>

<script lang="ts">
import { Field, Form } from 'vee-validate';
import { defineComponent } from 'vue';
import { useRegistrationForm } from '@features/auth';

export const RegistrationForm = defineComponent({
  components: {
    Field,
    Form,
  },

  setup(_, { emit }) {
    const { submit, schema } = useRegistrationForm(emit)

    return {
      submit,
      schema,
    };
  },
});

export default RegistrationForm
</script>
