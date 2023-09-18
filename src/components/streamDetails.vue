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

    return {
      topUserVidDataComputed,
      router,
      route,
    };
  },
};
</script>

<template>
  <div>
    <div>Stream details go here</div>
    <p>User ID: {{ route.params.user_id }}</p>
    <div v-for="(video, index) in topUserVidDataComputed" :key="index">
      <div>
        <h3>{{ video.title }}</h3>
        <h3>{{ video.user_name }}</h3>
        <h3>{{ video.thumbnail_url }}</h3>
      </div>
    </div>
  </div>
</template>
