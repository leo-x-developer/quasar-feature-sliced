<template>
  <wallet-button>
    <q-menu
      transition-show="flip-right"
      transition-hide="flip-left"
      :offset="[25, 15]"
    >
      <refill-wallet-card/>
    </q-menu>
  </wallet-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { WalletButton } from '@entities/viewer';
import { RefillWalletCard } from './RefillWalletCard'

export const RefillWallet= defineComponent({
  components: {
    WalletButton,
    RefillWalletCard
  },
});

export default RefillWallet
</script>
