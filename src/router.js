import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import streamDetails from "./components/streamDetails.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/details/:user_id",
    name: "details",
    component: streamDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
