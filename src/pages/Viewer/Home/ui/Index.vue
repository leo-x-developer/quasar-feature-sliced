<template>
  <q-page class="full-height column flex-center" padding>
    <h3>Viewer Home Page</h3>
    <q-btn
      @click="signOut"
    >
      Logout
    </q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { authModel } from '@features/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const { logout } = authModel.useAuth()

    const signOut = () => {
      logout()
      router.go(0)
    }

    return {
      signOut
    }
  }
});
</script>
