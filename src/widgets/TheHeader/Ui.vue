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
        @click="$emit('toggleLeftDrawer')"
      />
      <q-toolbar-title>
        <bakery-logo
          class="cursor-pointer"
          @click="$router.push({ path: '/' })"
        />
      </q-toolbar-title>

      <q-space/>
      <to-profile-button/>
      <logout-button />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LogoutButton } from '@features/auth';
import { ToProfileButton } from '@entities/viewer';
import { BakeryLogo } from '@shared/ui';

export const TheHeader = defineComponent({
  components: {
    BakeryLogo,
    LogoutButton,
    ToProfileButton
  },
});

export default TheHeader
</script>

