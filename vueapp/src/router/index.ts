import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Plan from "@/views/Plan.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Plan",
    component: Plan,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
