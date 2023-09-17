<script>
export default {
	props: {
		data: Object,
	},
	mounted() {
		// // Log the data object to the console
		// console.log(this.data);
	},
	methods: {
		generateThumbnailURL(url) {
			const width = 50;
			const height = 50;
			return url.replace("{width}", width).replace("{height}", height);
		},
	},
};
</script>

<template>
	<div>
		<h1>Popular Games</h1>
		<div class="leaderboard-container">
			<div v-for="(game, index) in data" :key="index" class="">
				<h2>{{ game.user_name }}</h2>
				<h3>{{ game.title }}</h3>
				<img :src="generateThumbnailURL(game.box_art_url)" />
				<p>Viewers: {{ game.viewer_count }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.stream-cards-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr); /* Two columns in the grid */
	grid-gap: 20px; /* Adjust the gap between cards as needed */
}
.stream-card {
	color: rgb(37, 37, 37);
	border-radius: 9px;

	padding: 5px;
}
</style>
