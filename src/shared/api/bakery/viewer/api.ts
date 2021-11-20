import { useApi } from '@shared/api/bakery';
import { Token } from '@shared/types';

const BASE_URL = '/viewer'

export const viewer = async (token:Token) => {
  const {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    get
  } = useApi(BASE_URL)

  await get({token})

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
  }
}
