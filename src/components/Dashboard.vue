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
		<img src="../assets/logo.png" class="logo" />
		<div class="middle">
			<streamCards :data="topStreamsDataComputed" />

			<div class="game-leaderboard">
				<Leaderboard :data="topGamesDataComputed" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.main-wrapper {
	width: 90%;
	background-color: #344955;
	color: white;
	padding: 30px;
	border-radius: 8px;
	position: relative;
}
.middle {
	display: flex;
	flex-direction: row;
	gap: 3%;
	position: relative;
	bottom: 4em;
}
.game-leaderboard {
	color: rgb(231, 231, 231);
	width: 50%;
	display: flex;
	justify-content: center;
	background-color: #4a6572;
	border-radius: 8px;
}

.logo {
	height: 160px;
	width: 350px;
	position: relative;
	right: 30px;
	bottom: 45px;
}
</style>
