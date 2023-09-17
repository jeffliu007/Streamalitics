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
			const width = 800;
			const height = 400;
			return url.replace("{width}", width).replace("{height}", height);
		},
	},
};
</script>

<template>
	<div>
		<h1>Top Streamers Currently Live</h1>
		<div v-for="(stream, index) in data" :key="index" class="stream-card">
			<h2>{{ stream.user_name }}</h2>
			<h3>{{ stream.title }}</h3>
			<img :src="generateThumbnailURL(stream.thumbnail_url)" />
			<p>Viewers: {{ stream.viewer_count }}</p>
		</div>
	</div>
</template>

<style scoped>
.stream-card {
	color: rgb(37, 37, 37);
	border-radius: 9px;
	border: 1px solid red;
	padding: 5px;
}
</style>
