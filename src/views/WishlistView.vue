<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CustomCard from '@/components/CustomCard.vue'
import AddGameModal from '@/components/AddGameModal.vue'
import { useWishlistStore } from '@/store/wishlist'

const wishlistStore = useWishlistStore()
const showModal = ref(false)

onMounted(() => {
  wishlistStore.loadFromStorage()
})

function addGame(game: { name: string; platform: string }) {
  wishlistStore.add(game)
  showModal.value = false
}

function removeGame(index: number) {
  wishlistStore.remove(index)
}
</script>

<template>
  <CustomCard>
    <div class="flex flex-col gap-6 text-theme">
      <h2 class="text-3xl font-bold text-primary">🕹️ Meine Wishlist</h2>

      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 w-full">
        <ul
          v-if="wishlistStore.items.length"
          class="flex-1 space-y-2 bg-secondary dark:bg-zinc-700"
        >
          <li
            v-for="(game, index) in wishlistStore.items"
            :key="index"
            class="flex justify-between items-center bg-white dark:bg-zinc-800 px-4 py-2 rounded shadow-sm"
          >
            <span>
              <span class="font-medium text-white">{{ game.name }}</span>
              <span class="text-sm text-primary">({{ game.platform }})</span>
            </span>
            <button
              @click="removeGame(index)"
              class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Entfernen
            </button>
          </li>
        </ul>

        <p v-else class="italic flex-1">Du hast noch keine Spiele auf deiner Wishlist.</p>

        <div class="md:ml-4 shrink-0">
          <button
            @click="showModal = true"
            class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md w-full md:w-auto"
          >
            ➕ Spiel hinzufügen
          </button>
        </div>
      </div>

      <AddGameModal v-if="showModal" @close="showModal = false" @save="addGame" />
    </div>
  </CustomCard>
</template>

<style scoped></style>
