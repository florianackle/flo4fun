<script setup lang="ts">
import CustomCard from '@/components/CustomCard.vue'
import { toast } from 'vue3-toastify'

const showEasterEgg = () => {
  toast('You found the easter egg! 🥚', {})
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center p-6 bg-theme text-theme transition-colors space-y-6"
  >
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

      <h2 @click="showEasterEgg" class="text-2xl font-semibold mt-6 cursor-pointer">
        Have fun! 🚀
      </h2>
    </CustomCard>
  </div>
</template>

<style scoped>
h1 {
  animation: bounce 1.5s infinite;
}
</style>
