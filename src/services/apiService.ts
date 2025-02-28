import axios from 'axios'
import { toast } from 'vue3-toastify'

/**
 * Central axios setup with:
 * - baseURL
 * - timeout
 * - request and response interceptors
 */
const apiClient = axios.create({
  baseURL: 'https://flo4fun.dev',
  timeout: 5000,
})

apiClient.interceptors.request.use(
  (config) => {
    // add auth-token to request if needed
    return config
  },
  (error) => {
    // show request error to user
    toast('Request Error', { type: 'error' })
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    // successful response
    return response
  },
  (error) => {
    // response error
    // react to HTTP codes
    const status = error.response?.status
    let message = 'Es ist ein Fehler aufgetreten.'

    if (status === 401) {
      message = 'Nicht autorisiert. Bitte neu einloggen.'
    } else if (status === 404) {
      message = 'Ressource nicht gefunden.'
    } else if (status === 500) {
      message = 'Serverfehler. Bitte später erneut versuchen.'
    }
    // show response error to user
    toast(message, { type: 'error' })
    return Promise.reject(error)
  }
)

export default apiClient
