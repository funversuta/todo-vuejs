import { createStore } from "vuex";
import { ITask } from "@/types/Task";
const TASK_STORAGE_KEY = "tasks";

const store = createStore({
  state: {
    tasks: [] as ITask[],
  },
  mutations: {
    addTask(state, task: ITask) {
      state.tasks.push(task);
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    deleteTask(state, taskId: number) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    updateTask(state, updatedTask: ITask) {
      const task = state.tasks.find((task) => task.id === updatedTask.id);
      if (task) {
        task.name = updatedTask.name;
      }
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(state.tasks));
    },
    setTasks(state, tasks: ITask[]) {
      state.tasks = tasks;
    },
  },
  actions: {
    addTask({ commit }, task: ITask) {
      commit("addTask", task);
    },
    deleteTask({ commit }, taskId: number) {
      commit("deleteTask", taskId);
    },
    updateTask({ commit }, updatedTask: ITask) {
      commit("updateTask", updatedTask);
    },
  },
});

const tasksData = localStorage.getItem(TASK_STORAGE_KEY);
if (tasksData != null) {
  store.commit("setTasks", JSON.parse(tasksData));
}

export default store;
