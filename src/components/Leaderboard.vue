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
      const width = 110;
      const height = 80;
      return url.replace("{width}", width).replace("{height}", height);
    },
  },
};
</script>

<template>
  <div class="leaderboard-wrapper">
    <h2>Popular Categories</h2>
    <div>
      <div
        v-for="(game, index) in data"
        :key="index"
        class="leaderboard-container"
      >
        <h3>{{ (index, game.name) }}</h3>
        <img :src="generateThumbnailURL(game.box_art_url)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.leaderboard-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  padding: 10px;
}

.leaderboard-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  padding-bottom: 25px;
  font-size: smaller;
}
</style>
