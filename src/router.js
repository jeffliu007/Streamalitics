import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import streamCards from "./components/streamCards.vue";

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/details",
		name: "details",
		component: streamCards,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
