<template>
  <q-page class="full-height column flex-center" padding>
    <h3>Login</h3>
    <login-form/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginForm } from '@features/auth';

export default defineComponent({
  components: {
    LoginForm
  },
});
</script>
