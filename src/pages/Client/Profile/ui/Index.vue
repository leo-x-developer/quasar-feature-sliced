<template>
  <q-page class="full-height column" padding>
    <h4 class="q-my-md">Client Profile Page</h4>
    <Form
      :validation-schema="schema"
      @submit="submit"
    >
      <Field
        v-model="viewer.name"
        name="name"
        v-slot="{ errorMessage, value, field }"
      >
        <q-input
          :model-value="value"
          v-bind="field"
          :error-message="errorMessage"
          :error="!!errorMessage"
        />
      </Field>

      <Field
        v-model="viewer.email"
        name="email"
        v-slot="{ errorMessage, value, field }"
      >
        <q-input
          disable
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

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { viewerModel } from '@entities/viewer';

export default defineComponent({
  components: {
    Field,
    Form
  },

  setup() {
    const viewer = viewerModel.store().viewer

    const schema = yup.object({
      name: yup.string().min(1),
      email:yup.string().min(1),
    });

    const submit = (dto:any) => {
      console.log(dto)
    };

    return {
      viewer,
      schema,
      submit,
    };
  }
});
</script>
