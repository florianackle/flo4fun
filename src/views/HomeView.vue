<script setup lang="ts">
import CustomCard from '@/components/CustomCard.vue'
</script>

<template>
  <!-- Global container using theme colors -->
  <div
    class="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-theme text-theme transition-colors space-y-6"
  >
    <!-- Wrap HomeView content inside the CustomCard -->
    <CustomCard>
      <h1 class="text-4xl font-extrabold text-secondary mb-4 animate-bounce">
        Willkommen bei Flo4Fun! 🎉
      </h1>

      <ul class="list-none text-lg space-y-2">
        <li>🕹️ Spiele <span class="font-bold text-secondary">Who is that Pokémon?</span></li>
        <li>💡 Entdecke <span class="font-bold text-secondary">Chuck Norris Witze</span></li>
        <li>
          🎮 Erstelle deine eigene
          <span class="font-bold text-secondary">Wunschliste</span> für Games
        </li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6">Have fun! 🚀</h2>
    </CustomCard>
  </div>
</template>

<style scoped>
h1 {
  /* Bounce animation for the main title */
  animation: bounce 1.5s infinite;
}
</style>
