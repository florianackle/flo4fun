<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import { useThemeStore } from '@/store/theme'

const themeStore = useThemeStore()

onMounted(() => {
  // Initialize global theme on mount (reads from localStorage)
  themeStore.initializeTheme()
})
</script>

<template>
  <!-- Use global theme background and text colors -->
  <div class="bg-theme text-theme min-h-screen transition-colors">
    <header class="bg-secondary shadow-md">
      <NavBar />
    </header>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
