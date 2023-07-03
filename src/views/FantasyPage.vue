<script setup lang="ts"></script>

<template>
  <div class="container">
    <h2>Пасхальная страница</h2>
    <button class="btn-tasks" @click="$router.go(-1)">Вернутся</button>
  </div>
</template>

<style scoped>
.container {
  background-color: #dbdfea;
  margin: 20px;
  width: 800px;
  min-height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow: scroll;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
}

.btn-tasks {
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #acb1d6;
  cursor: pointer;
  margin: 30px;
}
</style>
