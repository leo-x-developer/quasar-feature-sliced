<template>
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
        disable
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
</template>

<script lang="ts">
import * as yup from 'yup';
import { defineComponent } from 'vue';
import { Field, Form } from 'vee-validate';
import { viewerModel } from '@entities/viewer';
import { Viewer } from '@shared/api';
import { appNotify } from '@shared/lib/notifications';

export default defineComponent({
  components: {
    Field,
    Form
  },

  setup() {
    const viewer = viewerModel.store().viewer
    const schema = yup.object({
      username: yup.string().min(1),
    });

    const submit = async (dto:Partial<Viewer>) => {
      await viewerModel.store().updateProfile(dto)
      appNotify.success('Profile has been updated')
    };

    return {
      viewer,
      schema,
      submit,
    };
  }
});
</script>
