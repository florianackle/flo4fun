<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/store/theme'

// Define navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pokémon', href: '/pokemon' },
  { name: 'Chuck Norris Jokes', href: '/chuck' },
  { name: 'Wishlist', href: '/games' },
]

const route = useRoute()
const themeStore = useThemeStore()
</script>

<template>
  <Disclosure as="nav" class="bg-secondary" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-third hover:text-secondary focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <!-- Clickable logo on the far left -->
          <div class="flex shrink-0 items-center">
            <router-link to="/">
              <!-- Logo image linking to home -->
              <img class="h-8 w-auto" src="/src/assets/favicon.ico" alt="Logo" />
            </router-link>
          </div>
          <!-- Navigation buttons (visible on sm and up) -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="
                  route.path === item.href
                    ? 'bg-third text-white rounded-md px-3 py-2 text-sm font-medium'
                    : 'text-white hover:bg-third hover:text-secondary rounded-md px-3 py-2 text-sm font-medium'
                "
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- Dark/Light mode toggle button for desktop -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            @click="themeStore.toggleDarkMode"
            class="p-2 bg-primary text-theme hover:bg-third hover:text-theme rounded-md transition-all"
          >
            {{ themeStore.isDark ? '🌞 Light Mode' : '🌙 Dark Mode' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu (hidden on sm and up) -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="
            route.path === item.href
              ? 'bg-third text-white block rounded-md px-3 py-2 text-base font-medium'
              : 'text-white hover:bg-third hover:text-secondary block rounded-md px-3 py-2 text-base font-medium'
          "
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
