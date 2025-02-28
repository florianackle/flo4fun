<script setup lang="ts">
import { onMounted } from 'vue'
import CustomCard from '@/components/CustomCard.vue'
import { usePokemonQuiz } from '@/composables/usePokemonQuiz'

// Get quiz logic from composable
const { revealed, pokemonImage, options, loadNewPokemon, checkAnswer } = usePokemonQuiz()

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
