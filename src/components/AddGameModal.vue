<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  defaultName?: string
  defaultPlatform?: string
}>()

const emit = defineEmits<{
  (e: 'save', game: { name: string; platform: string }): void
  (e: 'close'): void
}>()

const gameName = ref(props.defaultName || '')
const platform = ref(props.defaultPlatform || '')
const error = ref('')

// Reset values if props change
watch(
  () => props.defaultName,
  (newVal) => {
    gameName.value = newVal || ''
  }
)
watch(
  () => props.defaultPlatform,
  (newVal) => {
    platform.value = newVal || ''
  }
)

function saveGame() {
  if (!gameName.value.trim() || !platform.value.trim()) {
    error.value = 'Bitte fülle alle Felder aus.'
    return
  }

  emit('save', {
    name: gameName.value.trim(),
    platform: platform.value.trim(),
  })

  gameName.value = ''
  platform.value = ''
  error.value = ''
}
</script>

<template>
  <div class="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
    <div
      class="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white p-6 rounded-2xl w-[90%] max-w-md shadow-lg"
    >
      <h3 class="text-xl font-semibold mb-4">🎮 Neues Spiel hinzufügen</h3>

      <div class="mb-4">
        <label for="gameName" class="block text-sm font-medium mb-1"> Spielname: </label>
        <input
          id="gameName"
          v-model="gameName"
          type="text"
          class="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div class="mb-4">
        <label for="platform" class="block text-sm font-medium mb-1"> Plattform: </label>
        <input
          id="platform"
          v-model="platform"
          type="text"
          class="w-full px-3 py-2 border rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <p v-if="error" class="text-red-600 text-sm mb-2">{{ error }}</p>

      <div class="flex justify-end gap-2 mt-4">
        <button
          @click="saveGame"
          class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          💾 Speichern
        </button>
        <button
          @click="$emit('close')"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          ❌ Abbrechen
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
