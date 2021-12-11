<template>
  <q-card class="my-card">

    <q-img
      height="250px"
      :src="product.img.url"
      @click="goToProductPage()"
    />

    <q-card-section>
      <a
        class="text-h5 q-mt-sm q-mb-xs cursor-pointer q-pr-lg q-py-md"
        @click="goToProductPage()"
      >
        {{ product.name }}
      </a>
      <div class="text-caption text-grey">
        {{ product.description }}
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat color="primary" label="Card" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@shared/api';
import { useRouter } from 'vue-router';

export const ProductCard = defineComponent({
  props: {
    product: Object as PropType<Product>
  },

  setup(props) {
    const router = useRouter()

    const goToProductPage = () => {
      return router.push({
        name: 'ProductPage',
        params: { id: props.product?.id }
      })
    }

    return {
      goToProductPage
    }
  }
})

export default ProductCard
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

  .q-img
    transition: all .5s ease-out
    cursor: pointer

  &:hover
    .q-img
      transform: scale(1.1)

a
  transition: all .3s ease-out
  &:hover
    color: $primary
</style>
