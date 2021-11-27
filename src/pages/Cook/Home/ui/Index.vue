<template>
  <q-page class="full-height column flex-center" padding>
    <h3>Cook Home Page</h3>
    <q-btn @click="logout">
      Logout
    </q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authModel } from '@features/auth';

export default defineComponent({
  setup() {
    const { logout } = authModel.useAuth()

    return {
      logout
    }
  }
});
</script>
