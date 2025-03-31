<script setup lang="ts">
defineProps<{
  backgroundColor?: string
  maxWidth?: string
  padding?: string
}>()
</script>

<template>
  <div
    class="rounded-lg shadow-[2px_2px_5px_rgba(0,0,0,0.4)] mx-auto w-full"
    :style="{
      backgroundColor: backgroundColor || 'var(--bg-secondary)',
      maxWidth: maxWidth || '40rem',
      padding: padding || '1.5rem',
    }"
  >
    <!-- Slot for child content -->
    <slot />
  </div>
</template>
