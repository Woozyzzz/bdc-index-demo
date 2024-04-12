<template>
  <div class="home">
    <PlacardCarouselVue />
    <FocusNewVue />
  </div>
</template>

<script>
import PlacardCarouselVue from "@/views/home-view/components/placard-carousel.vue";
import FocusNewVue from "@/views/home-view/components/focus-new/index.vue";

export default {
  name: "HomeView",
  components: { PlacardCarouselVue, FocusNewVue },
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