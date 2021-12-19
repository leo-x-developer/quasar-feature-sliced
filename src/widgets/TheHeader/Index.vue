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
        <to-product-list-button v-if="$route.path !== '/'"/>
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
import { ToCartButton } from '@features/order';
import { ToProfileButton } from '@entities/viewer';
import { ToProductListButton } from '@entities/product';
import { BakeryLogo } from '@shared/ui';

export const TheHeader = defineComponent({
  components: {
    BakeryLogo,
    LogoutButton,
    ToProfileButton,
    ToCartButton,
    ToProductListButton
  },
});

export default TheHeader
</script>

