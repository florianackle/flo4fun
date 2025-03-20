<script setup lang="ts">
import { onMounted } from 'vue'
import CustomCard from '@/components/CustomCard.vue'
import { VueSpinnerPuff } from 'vue3-spinners'
import { useChuckNorris } from '@/composables/useChuckNorris'

// Extract the joke logic from the composable
const { joke, loading, loadJoke } = useChuckNorris()

// Load a joke when the component is mounted
onMounted(() => {
  loadJoke()
})
</script>

<template>
  <CustomCard>
    <div class="flex flex-col items-center justify-center text-center">
      <h2 class="text-3xl font-bold mb-4">Chuck Norris Joke</h2>

      <div class="w-full flex items-center justify-center mb-4">
        <template v-if="loading">
          <VueSpinnerPuff color="#000" size="150px" />
        </template>
        <template v-else>
          <p class="text-lg">{{ joke }}</p>
        </template>
      </div>

      <button
        class="px-4 py-2 bg-primary text-theme rounded hover:bg-third transition-colors"
        @click="loadJoke"
      >
        🔄 Load New Joke
      </button>
    </div>
  </CustomCard>
</template>

<style scoped></style>
