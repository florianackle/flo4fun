import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import {
  getRandomPokemonId,
  getPokemonById,
  getPokemonSpeciesById,
  type PokemonName,
  type PokemonSpeciesData,
} from '@/services/pokemonService'

export function usePokemonQuiz() {
  // State variables
  const revealed = ref(false)
  const pokemonImage = ref('')
  const pokemonNameDe = ref('') // Stores the German name
  const options = ref<string[]>([]) // Stores answer options

  // Load a new Pokémon
  async function loadNewPokemon() {
    revealed.value = false
    try {
      // 1) Get a random Pokémon ID
      const randomId = getRandomPokemonId()

      // 2) Fetch Pokémon data (for artwork)
      const pokemonData = await getPokemonById(randomId)
      pokemonImage.value = pokemonData.sprites.other['official-artwork'].front_default

      // 3) Fetch species data (for German name)
      const speciesData: PokemonSpeciesData = await getPokemonSpeciesById(randomId)
      const germanNameObj = speciesData.names.find((n: PokemonName) => n.language.name === 'de')
      pokemonNameDe.value = germanNameObj ? germanNameObj.name : pokemonData.name

      // 4) Generate answer options
      await generateOptions(pokemonNameDe.value)
    } catch (error) {
      toast('Fehler beim laden des Pokémon 😢 ' + error, { type: 'error' })
      console.error(error)
    }
  }

  // Generate four options (including the correct name)
  async function generateOptions(correctName: string) {
    const tempOptions = new Set<string>()
    tempOptions.add(correctName)

    while (tempOptions.size < 4) {
      const randomId = getRandomPokemonId()
      try {
        const randomPokemonData = await getPokemonById(randomId)
        const randomSpeciesData: PokemonSpeciesData = await getPokemonSpeciesById(randomId)
        const germanNameObj = randomSpeciesData.names.find(
          (n: PokemonName) => n.language.name === 'de'
        )
        const randomName = germanNameObj ? germanNameObj.name : randomPokemonData.name
        tempOptions.add(randomName)
      } catch (error) {
        // If an error occurs, simply continue
        console.error('Error generating a false option:', error)
      }
    }

    // Create an array and shuffle the options randomly
    options.value = Array.from(tempOptions).sort(() => Math.random() - 0.5)
  }

  // Check if the answer is correct
  function checkAnswer(answer: string) {
    if (answer === pokemonNameDe.value) {
      toast(`Richtig! Es ist ${answer} 🎉`, { type: 'success' })
      revealed.value = true
    } else {
      toast('Leider falsch 😢 Versuche es erneut!', { type: 'error' })
    }
  }

  return {
    revealed,
    pokemonImage,
    options,
    loadNewPokemon,
    checkAnswer,
  }
}
