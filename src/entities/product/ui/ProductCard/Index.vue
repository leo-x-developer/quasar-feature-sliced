<template>
  <q-card
    class="my-card"
    flat
    bordered
  >
    <q-img height="250px" :src="product.img.url"/>

    <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ product.name }}
      </div>
      <div class="text-caption text-grey">
        {{ product.description }}
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat color="dark" label="Share" />

      <q-space />

      <q-btn flat color="primary" label="Book" />

    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@shared/api';

export default defineComponent({
  props: {
    product: Object as PropType<Product>
  },
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  display: flex
  flex-direction: column
  justify-content: space-between
  border: none
  overflow: hidden
  border-bottom: 1px dashed rgba($dark, .2)

  .q-img
    transition: all .5s ease-out
    cursor: pointer

  &:hover
    border-bottom: 1px solid rgba($dark, .4)
    .q-img
      transform: scale(1.1)

</style>
