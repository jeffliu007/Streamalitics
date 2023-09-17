<script setup>
import streamCards from "./streamCards.vue";
import Leaderboard from "./Leaderboard.vue";
import { fetchTopStreams } from "../apiUtils.mjs";
import { fetchTopGames } from "../apiUtils.mjs";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const topStreamsData = ref([]);
const topGamesData = ref([]);

const navigateToStreamCards = () => {
	router.push({ name: "details" });
};

onMounted(async () => {
	try {
		const response = await fetchTopStreams();
		topStreamsData.value = response.data;
		const response2 = await fetchTopGames();
		topGamesData.value = response2.data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
});

const topStreamsDataComputed = computed(() => topStreamsData.value);
const topGamesDataComputed = computed(() => topGamesData.value);
</script>

<template>
	<div class="main-wrapper">
		<h1>Title logo goes here</h1>
		<div class="middle">
			<router-link :to="{ name: 'details' }">
				<streamCards :data="topStreamsDataComputed" />
			</router-link>
			<div class="game-leaderboard">
				<Leaderboard :data="topGamesDataComputed" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.main-wrapper {
	width: 90rem;
	background-color: #344955;
	color: white;
	padding: 30px;
	border-radius: 8px;
}
.middle {
	display: flex;
	flex-direction: row;
	/* Allow flex items to wrap to the next row */
}
.game-leaderboard {
	color: red;
	width: 50%;
	display: flex;
	justify-content: center;
	border: 1px solid green;
}
</style>
