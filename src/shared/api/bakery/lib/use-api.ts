import { ref, computed } from 'vue'
import { http } from '@shared/api/bakery';

export const useApi = (endpoint: string) => {
  const loading = ref(true)
  const data = ref()
  const error = ref()

  const errorMessage = computed(() => {
    if (error.value) {
      return error.value.message
    }
  })
  const errorDetails = computed(() => {
    if ( error.value && error.value.response ) {
      return error.value.response.data.message
    }
  })

  const errorFields = computed(() => {
    if (error.value && Array.isArray(error.value.response.data.message)) {

      return (error.value.response.data.message as string[]).reduce((acc: Record<string, any>, msg: string) => {
        const [ field ] = msg.split(' ')

        if (!acc[field]) {
          acc[field] = []
        }

        acc[field].push(msg)

        return acc
      }, {}) // eg. { email: [ 'email is required' ] }
    }
  })

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

  return {
    data,
    loading,
    error,
    errorMessage,
    errorDetails,
    errorFields,
    get,
    post
  }
}

