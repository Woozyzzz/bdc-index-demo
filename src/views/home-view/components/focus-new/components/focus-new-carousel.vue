<template>
  <el-carousel
    :height="height"
    :indicator-position="indicatorPosition"
    :arrow="arrow"
    :loop="true"
    class="focus-new-carousel"
  >
    <el-carousel-item
      v-for="({ text, url, backgroundImage }, index) in focusNewList"
      :key="index"
      class="focus-new-carousel__item"
    >
      <div
        class="content"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
        @click="onClickCarouselItemContent(url)"
      >
        <div class="text" :style="{ fontSize: textFontSize }" :title="text">
          {{ text }}
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "FocusNewCarousel",
  props: {
    focusNewList: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: "240px",
    },
    indicatorPosition: {
      type: String,
      default: "outside",
    },
    arrow: {
      type: String,
      default: "never",
    },
    textFontSize: {
      type: String,
      default: "14px",
    },
  },
  methods: {
    onClickCarouselItemContent(url) {
      location.href = url || "/";
    },
  },
};
</script>

<style lang="scss" scoped>
.focus-new-carousel {
  .focus-new-carousel__item {
    .content {
      position: relative;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;

      .text {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 8px;
        width: 100%;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.6);
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
      }
    }
  }
}
</style>