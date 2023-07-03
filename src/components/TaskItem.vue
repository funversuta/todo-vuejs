<script setup lang="ts">
import { reactive, ref } from "vue";
import { ITask } from "@/types/Task";
import { useStore } from "vuex";

const props = defineProps({
  task: {
    type: Object as () => ITask,
    required: true,
  },
});
const store = useStore();
const editingTaskId = ref<number | null>(null);
const formData = reactive({
  name: props.task.name,
});

const deleteTask = (taskId: number) => {
  store.dispatch("deleteTask", taskId);
};

const updateTask = (task: ITask) => {
  if (editingTaskId.value === task.id) {
    const editedTask = {
      id: task.id,
      name: formData.name,
    };
    store.dispatch("updateTask", editedTask);
    editingTaskId.value = null;
  }
};

const openTaskEdit = (task: ITask) => {
  editingTaskId.value = task.id;
};
</script>

<template>
  <li class="li-task">
    <span v-if="editingTaskId !== task.id">{{ task.name }}</span>
    <form v-else @submit.prevent="updateTask(task)">
      <input v-model="formData.name" />
      <button type="submit">Сохранить</button>
    </form>
    <div v-if="editingTaskId !== task.id">
      <button @click="openTaskEdit(task)">Редактировать</button>
      <button @click="deleteTask(task.id)">Удалить</button>
    </div>
  </li>
</template>

<style scoped>
.li-task {
  background-color: #acb1d6;
  padding: 5px 10px;
  border: 1px solid #dbdfea;
  display: flex;
  justify-content: space-between;
}

button {
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

form {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
