<template>
  <div style="width: 300px">
    <Form
      :validation-schema="schema"
      @submit="submit"
    >

      <Field name="identifier" v-slot="{ errorMessage, value, field }">
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
          placeholder="p@$$vv0Rd"
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
import { useLoginForm } from '@features/auth';

export const LoginForm = defineComponent({
  components: {
    Field,
    Form,
  },

  setup(_, { emit }) {
  const { submit, schema } = useLoginForm(emit)

    return {
      submit,
      schema
    };
  },
});

export default LoginForm
</script>
