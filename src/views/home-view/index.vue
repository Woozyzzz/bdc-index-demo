<template>
  <div class="home">
    <PlacardCarousel />
  </div>
</template>

<script>
import PlacardCarousel from "@/views/home-view/components/placard-carousel.vue";

export default {
  name: "HomeView",
  components: { PlacardCarousel },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  .placard-carousel {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .home {
    .placard-carousel {
      margin: 16px auto;
      display: block;
      max-width: 1200px;
    }
  }
}
</style>