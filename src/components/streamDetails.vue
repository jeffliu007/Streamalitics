<script>
import { onMounted, ref, computed } from "vue";
import { fetchUserVideos } from "../apiUtils.mjs";
import { useRouter, useRoute } from "vue-router";

export default {
	setup() {
		const topUserVidData = ref([]);
		const router = useRouter();
		const route = useRoute();

		onMounted(async () => {
			try {
				const response = await fetchUserVideos(route.params.user_id);
				topUserVidData.value = response.data;
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		});

		const topUserVidDataComputed = computed(() => topUserVidData.value);

		const firstVideo = computed(() => {
			const videosArray = Object.values(topUserVidDataComputed.value);
			return videosArray.length > 0 ? videosArray[0] : null;
		});

		console.log(topUserVidDataComputed);

		return {
			topUserVidDataComputed,
			router,
			route,
			firstVideo,
		};
	},
	methods: {
		generateThumbnailURL(url) {
			const width = 430;
			const height = 200;
			return url.replace("%{width}", width).replace("%{height}", height);
		},
		formatISODateToDateTime(isoDateString) {
			const date = new Date(isoDateString);
			const options = {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			};

			return date.toLocaleDateString("en-US", options);
		},
	},
};
</script>

<template>
	<div>
		<h1 class="video-title">
			<template v-if="firstVideo">
				{{ firstVideo.user_name }}
			</template>
			<template v-else>
				<p>..Loading</p>
			</template>
		</h1>
		<div v-for="(video, index) in topUserVidDataComputed" :key="index">
			<div class="video-wrapper">
				<img
					class="video-thumbnail"
					:src="generateThumbnailURL(video.thumbnail_url)"
					v-if="video.thumbnail_url"
				/>
				<a class="video-details" :href="video.url" target="_blank">
					<h3>{{ video.title }}</h3>
					<div class="video-details-inner">
						<h4>{{ video.view_count }} views</h4>
						<h4>
							Posted on: {{ formatISODateToDateTime(video.published_at) }}
						</h4>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
.video-title {
	color: #f9aa33;
	font-size: 55px;
}
.video-wrapper {
	color: white;
	opacity: 0.85;

	display: flex;
	flex-direction: row;
	width: 80em;
	gap: 30px;
	cursor: pointer;
	margin-bottom: 20px;
	border-top: 0.5px solid rgb(138, 137, 137);
}

.video-wrapper:hover {
	border: 3px solid #f9aa33;
	border-radius: 8px;
}

.video-thumbnail {
	border-radius: 8px;
}
.video-details {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.video-details-inner {
	opacity: 0.67;
}
</style>
