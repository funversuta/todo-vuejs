<script setup lang="ts">
import TaskList from "@/components/TaskList.vue";
</script>

<template>
  <div class="container">
    <h2>Задачи</h2>
    <TaskList />
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
}

h2 {
  text-align: center;
}
</style>
