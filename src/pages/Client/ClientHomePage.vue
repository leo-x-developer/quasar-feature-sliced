<template>
  <q-page
    class="full-height column"
    padding
  >
    <products-list />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ProductsList } from '@widgets/product/ProductsList'

export const ClientHomePage = defineComponent({
  components: {
    ProductsList
  },
})

export default ClientHomePage
</script>
