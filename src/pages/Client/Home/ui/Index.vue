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
import { ProductsList } from '@entities/product/ui/ProductsList'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    ProductsList
  },
})
</script>
