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
		<div class="stream-cards-header">
			<h1>Top Streamers Currently Live On</h1>
			<img src="../assets/twitch.png" class="twitch-logo" />
		</div>
		<div class="stream-cards-container">
			<div v-for="(stream, index) in data" :key="index" class="stream-card">
				<router-link
					:to="{
						name: 'details',
						params: { user_id: stream.user_id },
					}"
				>
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
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.stream-cards-header {
	display: flex;
	flex-direction: row;
	gap: 10px;
	padding-bottom: 15px;
}
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

.twitch-logo {
	height: 75px;
	width: 75px;
}
</style>
