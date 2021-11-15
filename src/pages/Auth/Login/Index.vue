<template>
  <q-page class="full-height relative-position" padding>
    <div class="absolute-center" style="width: 300px">
      <h3 class="text-center">Login</h3>
      <Form
        :validation-schema="schema"
        @submit="submit"
      >

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
  </q-page>
</template>

<script lang="ts">
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
import { defineComponent } from 'vue';
import { UserDto } from '@app/shared/api';
// import { bakeryApi } from '@app/shared/api' wtf

export default defineComponent({
  components: {
    Field,
    Form,
  },

  setup() {

    const schema = yup.object({
      email: yup.string().required().email().label('Email address'),
      password: yup.string().required().min(6).label('Password'),
    });

    const submit = async (payload: UserDto, actions: { resetForm: () => void; }) => {
      const {
        data,
        loading,
        error,
        errorMessage,
        errorDetails,
        errorFields,
      } = await bakeryApi.auth.login(payload)

      console.log(data,
        loading,
        error,
        errorMessage,
        errorDetails,
        errorFields,)


      actions.resetForm();
    };

    return {
      submit,
      schema,
    };
  },

});
</script>
