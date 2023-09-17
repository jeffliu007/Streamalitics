<script setup>
import streamCards from "./streamCards.vue";
import { fetchTopStreams } from "../apiUtils.mjs";
import { onMounted, ref, computed } from "vue";

const topStreamsData = ref([]);

onMounted(async () => {
	try {
		const response = await fetchTopStreams();
		topStreamsData.value = response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
});

const topStreamsDataComputed = computed(() => topStreamsData.value);
</script>

<template>
	<div>
		<h1>Dashboard here yay!</h1>
		<streamCards :data="topStreamsDataComputed" />
	</div>
</template>
