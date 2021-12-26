<template>
  <q-btn
    push
    color="white"
    text-color="primary"
    :label="label"
  >
    <slot/>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { storeToRefs } from 'pinia'
import { viewerModel } from '@entities/viewer'
import { rubleSign } from '@shared/lib'

export const WalletButton = defineComponent({
  setup() {
    const viewerStore = viewerModel.store()
    const { viewer } = storeToRefs(viewerStore)

    const label = computed(() => `${viewer.value?.wallet} ${rubleSign}`)

    return {
      rubleSign,
      label
    }
  }
})
export default WalletButton
</script>
