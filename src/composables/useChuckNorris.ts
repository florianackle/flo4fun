import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { getRandomChuckJoke, type ChuckJokeData } from '@/services/chuckService'

export function useChuckNorris() {
  // State variables
  const joke = ref('')
  const loading = ref(false)

  // Load a new joke
  async function loadJoke() {
    loading.value = true
    try {
      const data: ChuckJokeData = await getRandomChuckJoke()
      joke.value = data.value
    } catch (error) {
      toast('Error loading joke 😢 ' + error, { type: 'error' })
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    joke,
    loading,
    loadJoke,
  }
}
