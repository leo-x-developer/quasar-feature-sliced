<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-h3 text-red text-weight-medium text-right">
          {{ product.price }} {{ rubleSign }}
        </div>
        <div class="q-mt-lg text-h6">
          {{ product.description }}
        </div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders"
          :src="product.img.url"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat color="primary">
        Reserve
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '@shared/api';
import { productModel } from '@entities/product';


export const ProductPageCard = defineComponent({
  props: {
    product: Object as PropType<Product>
  },
  setup() {
    const { rubleSign } = productModel
    return {
      rubleSign
    }
  }
})

export default ProductPageCard
</script>
