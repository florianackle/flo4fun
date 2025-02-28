<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import {
  getRandomPokemonId,
  getPokemonById,
  getPokemonSpeciesById,
  type PokemonName,
  type PokemonSpeciesData,
} from '@/services/pokemonService'
import CustomCard from '@/components/CustomCard.vue'

// State variables
const revealed = ref(false)
const pokemonImage = ref('')
const pokemonNameDe = ref('') // stores the German name
const options = ref<string[]>([]) // stores answer options

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
    toast('Fehler beim laden des Pokémon 😢', { type: 'error' })
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
        (germanName: PokemonName) => germanName.language.name === 'de'
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

// Load a Pokémon when the component is mounted
onMounted(() => {
  loadNewPokemon()
})
</script>

<template>
  <CustomCard>
    <div class="flex flex-col items-center justify-center text-center">
      <h2 class="text-3xl font-bold mb-4">Who is that Pokémon?</h2>

      <!-- Pokémon image (hidden until "revealed" is true) -->
      <div class="w-64 h-64 flex items-center justify-center mb-4">
        <img
          :src="pokemonImage"
          :class="{ 'brightness-0 contrast-0': !revealed }"
          alt="Pokémon"
          class="transition-all duration-500"
        />
      </div>

      <!-- Answer options -->
      <div class="flex flex-wrap gap-4 justify-center mb-4">
        <button
          v-for="option in options"
          :key="option"
          class="px-4 py-2 rounded bg-secondary text-primary hover:bg-third hover:text-primary"
          @click="checkAnswer(option)"
        >
          {{ option }}
        </button>
      </div>

      <!-- Button to load a new Pokémon -->
      <button
        class="px-4 py-2 bg-primary text-theme rounded hover:bg-third transition-colors"
        @click="loadNewPokemon"
      >
        Neues Pokémon laden
      </button>
    </div>
  </CustomCard>
</template>

<style scoped>
.brightness-0 {
  filter: brightness(0);
}
.contrast-0 {
  filter: contrast(0);
}
</style>
