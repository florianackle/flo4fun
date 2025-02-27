<template>
  <!-- Card container with a constant bg-secondary, rounded corners, subtle shadow, and horizontal centering -->
  <div
    class="rounded-lg shadow-[2px_2px_5px_rgba(0,0,0,0.4)] p-6 mx-auto w-full max-w-xl"
    :style="{ backgroundColor: 'var(--bg-secondary)' }"
  >
    <!-- Slot for child content -->
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
