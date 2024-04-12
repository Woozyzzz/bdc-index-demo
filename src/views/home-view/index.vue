<template>
  <div class="home">
    <PlacardCarousel />
    <FocusNew />
  </div>
</template>

<script>
import PlacardCarousel from "@/views/home-view/components/placard-carousel.vue";
import FocusNew from "@/views/home-view/components/focus-new/index.vue";

export default {
  name: "HomeView",
  components: { PlacardCarousel, FocusNew },
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

    .focus-new {
      margin: 16px auto;
      max-width: 1200px;
    }
  }
}
</style>