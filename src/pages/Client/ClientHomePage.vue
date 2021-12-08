<template>
  <q-page
    class="full-height column"
    padding
  >
    <suspense>
      <template #default>
        <products-list />
      </template>
      <template #fallback>
        ...Loading
      </template>
    </suspense>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ProductsList } from '@entities/product'

export const ClientHomePage = defineComponent({
  name: 'Home',
  components: {
    ProductsList
  },
})

export default ClientHomePage
</script>
