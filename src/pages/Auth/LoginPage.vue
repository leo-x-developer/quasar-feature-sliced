<template>
  <q-page class="full-height column flex-center" padding>
    <h3>Login</h3>
    <login-form @login="goToViewerHome"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LoginForm } from '@features/auth';
import { useAuthPages } from '@pages/Auth/index';

export const LoginPage = defineComponent({
  components: {
    LoginForm
  },

  setup() {
    const { goToViewerHome } = useAuthPages()

    return {
      goToViewerHome
    }
  }
});

export default LoginPage
</script>
