<template>
  <v-container>
    <h1>Willkommen bei Flo4Fun!</h1>
    <v-btn color="primary" @click="startGame">Spiel starten</v-btn>
  </v-container>
</template>

<script setup lang="ts">
const startGame = () => {
  console.log("Spiel gestartet!");
};
</script>
