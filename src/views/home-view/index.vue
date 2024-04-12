<template>
  <div class="home">
    <PlacardCarouselVue />
    <FocusNewVue />
    <PartyBuildingWorkVue />
  </div>
</template>

<script>
import PlacardCarouselVue from "@/views/home-view/components/placard-carousel.vue";
import FocusNewVue from "@/views/home-view/components/focus-new/index.vue";
import PartyBuildingWorkVue from "@/views/home-view/components/party-building-work.vue";

export default {
  name: "HomeView",
  components: { PlacardCarouselVue, FocusNewVue, PartyBuildingWorkVue },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 8px;
  background-color: #f7f8fa;

  .placard-carousel {
    display: none;
  }

  .party-building-work {
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

    .party-building-work {
      margin: 16px auto;
      display: block;
      max-width: 1200px;
    }
  }
}
</style>