<script setup>
import Dashboard from "./components/Dashboard.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";
</script>

<template>
	<Sidebar />
	<div class="app-wrapper">
		<Dashboard />
	</div>
</template>

<style scoped>
header {
	line-height: 1.5;
}

.app-wrapper {
	font-family: "Poppins", sans-serif;
}
</style>
