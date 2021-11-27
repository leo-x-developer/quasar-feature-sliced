<template>
  <q-header
    elevated
    class="bg-primary text-white"
  >
    <q-toolbar>
      <q-btn
        flat
        dense
        flatc
        round
        icon="menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Quasar feature-sliced
      </q-toolbar-title>
      <q-space/>
      <logout-button />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LogoutButton } from '@features/auth';

export default defineComponent({
  components: { LogoutButton },

  setup (_, { emit }) {
    const toggleLeftDrawer = () => emit('toggleLeftDrawer')

    return {
      toggleLeftDrawer
    }
  }
});
</script>

