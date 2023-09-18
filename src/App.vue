<script setup>
import Dashboard from "./components/Dashboard.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";
import { sidebarWidth } from "./components/sidebar/state";
</script>

<template>
  <div class="app-wrapper">
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <Dashboard />
    </div>
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
