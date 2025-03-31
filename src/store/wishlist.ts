import { defineStore } from 'pinia'

export type Game = {
  name: string
  platform: string
}

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [] as Game[],
  }),

  actions: {
    loadFromStorage() {
      const saved = localStorage.getItem('wishlist')
      if (saved) {
        try {
          this.items = JSON.parse(saved)
        } catch (e) {
          console.warn('Fehler beim Parsen der Wishlist:', e)
        }
      }
    },

    saveToStorage() {
      localStorage.setItem('wishlist', JSON.stringify(this.items))
    },

    add(game: Game) {
      this.items.push(game)
      this.saveToStorage()
    },

    remove(index: number) {
      this.items.splice(index, 1)
      this.saveToStorage()
    },
  },
})
