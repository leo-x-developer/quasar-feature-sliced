<template>
  <q-layout view="hHh lpR fFf">

    <the-header @toggleLeftDrawer="toggleLeftDrawer" />

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <Suspense>
        <template #fallback>
          Loading...
        </template>
        <template #default>
          <router-view />
        </template>
      </Suspense>
    </q-page-container>

  </q-layout>
</template>


<script lang="ts">
import { ref, defineComponent } from 'vue'
import { TheHeader } from '@widgets/TheHeader';

export const ViewerLayout = defineComponent({
  components: {
    TheHeader
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});

export default ViewerLayout
</script>
