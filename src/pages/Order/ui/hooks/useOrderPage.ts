import { useRoute, useRouter } from 'vue-router';
import { computed, ComputedRef, ref } from 'vue';

export const useOrderPage = () => {
  const route = useRoute()
  const router = useRouter()

  enum Steps {
    'Cart' = 1,
    'Checkout' = 2,
    'Result' = 3
  }

  type Step = {
    name: number,
    prefix?: string,
    title: string,
    icon: string,
    done?: boolean,
  }

  const step:ComputedRef<number> = computed(
    () => Steps[route.name as keyof typeof Steps]
  )

  const steps = ref<Step[]>([
    {
      name: 1,
      prefix: 'shopping_bag',
      title: 'Корзина',
      icon: 'shopping_cart',
    },
    {
      name: 2,
      title: 'Оформление',
      icon: 'paid',
    },{
      name: 3,
      title: 'Получение заказа',
      icon: 'add_comment',
    },
  ])


  const nextStep = () => {
    if(step.value < Object.keys(Steps).length) {
      const next = step.value + 1
      return router.push({ name: Steps[next] })
    }
  }

  const prevStep = () => {
    if(step.value >= 1) {
      const prev = step.value - 1
      return router.push({ name: Steps[prev] })
    }
  }

  return {
    step,
    steps,
    nextStep,
    prevStep,
  }
}
