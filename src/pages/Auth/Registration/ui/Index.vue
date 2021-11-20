<template>
  <q-page class="full-height column flex-center" padding>
    <h3>Registration</h3>
    <registration-form/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RegistrationForm } from '@features/auth';

export default defineComponent({
  components: {
    RegistrationForm
  },
});
</script>
