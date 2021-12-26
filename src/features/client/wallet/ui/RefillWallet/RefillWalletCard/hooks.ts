import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import * as yup from 'yup';
import { viewerModel } from '@entities/viewer';
import { minPayment, minPaymentMessage, requiredMessage } from './constants';
import { rubleSign } from '@shared/lib';
import { wallet } from '@features/client';

export const useRefillWalletCard = () => {
  const viewerStore = viewerModel.store()
  const { viewer } = storeToRefs(viewerStore)
  const viewerWallet = viewer?.value?.wallet

  const schema = yup.object({
    wallet: yup
      .number()
      .required(requiredMessage)
      .min(minPayment, minPaymentMessage)
      .label('Платёж'),
  });

  const submit = async (value:{ wallet:string }) => {
    if(value && viewerWallet) {
      const payload = { wallet: viewerWallet + Number(value.wallet) }
      await wallet.actions.refillWallet(payload)
    }
  };

  const title = ref('Пополнение средств')
  const label = computed(() => `${viewerWallet} ${rubleSign}`)

  return {
    title,
    schema,
    rubleSign,
    minPaymentMessage,
    label,
    submit
  }
}
