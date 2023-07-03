import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import TaskListPage from "@/views/TaskListPage.vue";
import FantasyPage from "@/views/FantasyPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/tasks",
    name: "TaskListPage",
    component: TaskListPage,
  },
  {
    path: "/fantasy",
    name: "EasterEggPage",
    component: FantasyPage,
  },
];

const router = createRouter({
  history: createWebHistory("/todo-vuejs/"),
  routes,
});

export default router;
