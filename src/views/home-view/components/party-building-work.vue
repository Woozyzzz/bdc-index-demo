<template>
  <div class="party-building-work">
    <h2 class="h2">党建工作</h2>
    <hr class="hr" />

    <el-carousel
      type="card"
      height="240px"
      class="party-building-work-carousel"
    >
      <el-carousel-item
        v-for="({ url, backgroundImage }, index) in partyBuildingWorkList"
        :key="index"
        class="party-building-work-carousel__item"
      >
        <div
          class="content"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
          @click="onClickCarouselItemContent(url)"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import PartyBuildingWork1Image from "@/assets/images/home-view/party-building-work-1.jpg";
import PartyBuildingWork2Image from "@/assets/images/home-view/party-building-work-2.jpg";
import PartyBuildingWork3Image from "@/assets/images/home-view/party-building-work-3.jpg";
import PartyBuildingWork4Image from "@/assets/images/home-view/party-building-work-4.jpg";
import PartyBuildingWork5Image from "@/assets/images/home-view/party-building-work-5.jpg";

export default {
  name: "PartyBuildingWork",
  data() {
    return {
      partyBuildingWorkList: [
        {
          url: "",
          backgroundImage: PartyBuildingWork1Image,
        },
        {
          url: "",
          backgroundImage: PartyBuildingWork2Image,
        },
        {
          url: "",
          backgroundImage: PartyBuildingWork3Image,
        },
        {
          url: "",
          backgroundImage: PartyBuildingWork4Image,
        },
        {
          url: "",
          backgroundImage: PartyBuildingWork5Image,
        },
      ],
    };
  },
  methods: {
    onClickCarouselItemContent(url) {
      location.href = url || "/";
    },
  },
};
</script>

<style lang="scss" scoped>
.party-building-work {
  .h2 {
    font-size: 32px;
    color: #e92929;
  }
  .hr {
    margin-top: 16px;
    margin-bottom: 24px;
    border: 2px solid #e92929;
  }

  .party-building-work-carousel {
    .party-building-work-carousel__item {
      .content {
        position: relative;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
      }
    }
  }
}
</style>