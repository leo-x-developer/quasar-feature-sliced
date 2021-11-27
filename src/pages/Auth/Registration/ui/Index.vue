<template>
  <q-page class="full-height column flex-center" padding>
    <h3>Registration</h3>
    <registration-form @registered="goToViewerHome"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RegistrationForm } from '@features/auth';
import { useAuthPages } from '@pages/Auth';

export default defineComponent({
  components: {
    RegistrationForm
  },

  setup() {
    const { goToViewerHome } = useAuthPages()

    return {
      goToViewerHome
    }
  }
});
</script>
