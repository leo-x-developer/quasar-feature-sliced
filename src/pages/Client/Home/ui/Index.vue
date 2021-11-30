<template>
  <q-page
    class="full-height column flex-center"
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
import { ProductsList } from '@entities/products'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ProductsList
  },
})
</script>
