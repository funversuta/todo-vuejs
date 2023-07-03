<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { ITask } from "@/types/Task";
import TaskItem from "./TaskItem.vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);
const formData = reactive({
  name: "",
});

const addTask = () => {
  if (!formData.name) return;

  const newTask: ITask = {
    id: Date.now(),
    name: formData.name,
  };
  store.dispatch("addTask", newTask);
  formData.name = "";
};
</script>

<template>
  <div class="list-container">
    <form @submit.prevent="addTask">
      <label>
        <input class="input-create-task" v-model="formData.name" />
      </label>
      <button class="btn-create-task" type="submit">Создать задачу</button>
    </form>
    <ul>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<style scoped>
.list-container {
  margin: 0 20px;
}

.input-create-task {
  height: 30px;
  width: 50%;
}

.btn-create-task {
  height: 30px;
  background-color: #acb1d6;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
