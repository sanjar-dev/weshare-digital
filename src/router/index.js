import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Checkout from "../views/Checkout.vue";
import WorkInProgress from "../views/WorkInProgress.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/wip",
    name: "Work in Progress",
    component: WorkInProgress,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
