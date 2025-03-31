<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import CustomCard from '@/components/CustomCard.vue'
import { usePokemonQuiz } from '@/composables/usePokemonQuiz'
import { VueSpinnerPuff } from 'vue3-spinners'

// Extract quiz logic from the composable
const {
  revealed,
  pokemonImage,
  options,
  loading,
  loadNewPokemon,
  checkAnswer: check,
} = usePokemonQuiz()

// Answer score
const score = ref(0)
const totalQuestions = ref(0)

const scorePercent = computed(() => {
  if (totalQuestions.value === 0) return '0%'
  return ((score.value / totalQuestions.value) * 100).toFixed(0) + '%'
})

function checkAnswer(option: string) {
  totalQuestions.value++
  if (check(option)) {
    score.value++
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

      <p class="mb-2 text-sm">
        Punktzahl: {{ score }} von {{ totalQuestions }} ({{ scorePercent }})
      </p>

      <!-- Pokémon image: show spinner if loading - else show image -->
      <div class="w-64 h-64 flex items-center justify-center mb-4">
        <template v-if="loading">
          <VueSpinnerPuff color="#000" size="150px" />
        </template>
        <template v-else>
          <img
            :src="pokemonImage"
            :class="{ 'brightness-0 contrast-0': !revealed }"
            alt="Pokémon"
            class="transition-all duration-500"
          />
        </template>
      </div>

      <!-- Answer options: show spinner if loading - else show options -->
      <div class="flex flex-wrap gap-4 justify-center mb-4">
        <template v-if="loading">
          <VueSpinnerPuff color="#000" size="25px" />
        </template>
        <template v-else>
          <button
            v-for="option in options"
            :key="option"
            class="px-4 py-2 rounded bg-primary text-primary hover:bg-third hover:text-primary"
            @click="checkAnswer(option)"
          >
            {{ option }}
          </button>
        </template>
      </div>

      <!-- Button to load a new Pokémon -->
      <button
        class="px-4 py-2 bg-primary text-theme rounded hover:bg-third transition-colors"
        @click="loadNewPokemon"
      >
        🔄 Neues Pokémon laden
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
