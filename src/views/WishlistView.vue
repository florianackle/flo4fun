<script setup lang="ts">
import { ref } from 'vue'
import CustomCard from '@/components/CustomCard.vue'
import AddGameModal from '@/components/AddGameModal.vue'

type Game = {
  name: string
  platform: string
}

const wishlist = ref<Game[]>([])
const showModal = ref(false)

function addGame(newGame: Game) {
  wishlist.value.push(newGame)
  showModal.value = false
}

function removeGame(index: number) {
  wishlist.value.splice(index, 1)
}
</script>

<template>
  <CustomCard>
    <div class="flex flex-col gap-6 text-theme">
      <h2 class="text-3xl font-bold text-primary">🕹️ Meine Wishlist</h2>

      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 w-full">
        <!-- Liste -->
        <ul
          v-if="wishlist.length"
          class="flex-1 space-y-2 bg-secondary dark:bg-zinc-700 p-4 rounded-xl shadow"
        >
          <li
            v-for="(game, index) in wishlist"
            :key="index"
            class="flex justify-between items-center bg-white dark:bg-zinc-800 px-4 py-2 rounded shadow-sm"
          >
            <span>
              <span class="font-medium text-primary">{{ game.name }}</span>
              <span class="text-sm text-zinc-500">({{ game.platform }})</span>
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

<style scoped>
.wishlist-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.wishlist-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

.remove-btn {
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}

.add-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
</style>
