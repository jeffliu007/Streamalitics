<script>
export default {
	props: {
		data: Object,
	},
	mounted() {
		// Log the data object to the console
		// console.log(this.data);
	},
	methods: {
		generateThumbnailURL(url) {
			const width = 500;
			const height = 200;
			return url.replace("{width}", width).replace("{height}", height);
		},
	},
};
</script>

<template>
	<div>
		<h1>Top Streamers Currently Live</h1>
		<div class="stream-cards-container">
			<div v-for="(stream, index) in data" :key="index" class="stream-card">
				<div class="stream-cards-top">
					<h2>{{ stream.user_name }}</h2>
					<img src="../assets/live.png" />
				</div>
				<h3>{{ stream.title }}</h3>
				<img
					class="stream-thumbnail"
					:src="generateThumbnailURL(stream.thumbnail_url)"
				/>
				<p class="stream-viewers">Viewers: {{ stream.viewer_count }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.stream-cards-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
}
.stream-card {
	color: rgb(37, 37, 37);
	border-radius: 9px;
	background-color: #4a6572;
	padding: 0 20px 0 20px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.stream-card:hover {
	border: 2px solid #f9aa33;
}
.stream-thumbnail {
	border-radius: 8px;
	object-fit: cover;
}

.stream-cards-top {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
</style>
