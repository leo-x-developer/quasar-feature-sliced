<template>
  <q-header
    elevated
    class="bg-primary text-white q-py-sm"
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
      <q-toolbar-title shrink>

        <bakery-logo
          class="cursor-pointer"
          @click="$router.push({ path: '/' })"
        />
      </q-toolbar-title>

      <q-space/>
      <div class="q-gutter-x-md">
        <to-cart-button />
        <to-profile-button/>
        <logout-button />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LogoutButton } from '@features/auth';
import { ToProfileButton } from '@entities/viewer';
import { ToCartButton } from '@features/order';
import { BakeryLogo } from '@shared/ui';

export const TheHeader = defineComponent({
  components: {
    BakeryLogo,
    LogoutButton,
    ToProfileButton,
    ToCartButton
  },
});

export default TheHeader
</script>

