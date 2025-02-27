import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
  }),
  actions: {
    applyTheme() {
      if (this.isDark) {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        localStorage.setItem('theme', 'light')
      }
    },
    toggleDarkMode() {
      this.isDark = !this.isDark
      this.applyTheme()
    },
    initializeTheme() {
      const savedTheme = localStorage.getItem('theme')
      this.isDark = savedTheme ? savedTheme === 'dark' : true
      this.applyTheme()
    },
  },
})
