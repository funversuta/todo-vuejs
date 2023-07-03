<script setup lang="ts"></script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
:global(body) {
  color: black;
  background-color: #fff;
  min-height: 100vh;
  margin: 0;
}

:global(#app) {
  min-height: 100vh;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
