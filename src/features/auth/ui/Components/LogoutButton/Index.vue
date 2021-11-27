<template>
  <q-btn flat @click="logoutConfirmation">
    Logout
  </q-btn>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue';
import { authModel } from '@features/auth';

export default defineComponent({
  setup() {
    const $q = useQuasar()
    const { logout } = authModel.useAuth()

    function logoutConfirmation() {
      $q.dialog({
        dark: true,
        title: 'Confirm',
        message: 'Are you sure you want to log out?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        logout()
      })
    }

    return {
      logoutConfirmation
    }
  }
});
</script>
