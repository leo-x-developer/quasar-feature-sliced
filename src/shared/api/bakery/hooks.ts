import { ref } from 'vue'
import { http } from 'src/boot/axios';

export const useApi = (endpoint: string) => {
  const loading = ref(true)
  const data = ref()
  const error = ref()

  const get = (query?: Record<string, any>) => {
    loading.value = true
    error.value = undefined

    return http.get(endpoint, query)
      .then(res => data.value = res.data)
      .catch(e => {
        error.value = e
        throw e
      })
      .finally(() => loading.value = false)
  }
  const post = (payload?: Record<string, any>) => {
    loading.value = true
    error.value = undefined

    return http.post(endpoint, payload)
      .then(res => data.value = res.data)
      .catch(e => {
        error.value = e
        throw e
      })
      .finally(() => loading.value = false)
  }
  const put = (payload?: Record<string, any>) => {
    loading.value = true
    error.value = undefined

    return http.put(endpoint, payload)
      .then(res => data.value = res.data)
      .catch(e => {
        error.value = e
        throw e
      })
      .finally(() => loading.value = false)
  }

  return {
    data,
    loading,
    error,
    get,
    post,
    put
  }
}

