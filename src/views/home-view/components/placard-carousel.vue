<template>
  <el-carousel
    :interval="4000"
    :loop="true"
    height="200px"
    indicator-position="none"
    arrow="never"
    direction="vertical"
    class="placard-carousel"
  >
    <el-carousel-item
      v-for="({ text, author }, index) in placardList"
      :key="index"
      class="placard-carousel__item"
    >
      <blockquote class="content">
        <p class="text">{{ text }}</p>
        <cite class="author">{{ author }}</cite>
      </blockquote>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "PlacardCarousel",
  data() {
    return {
      placardList: [
        {
          text: "红十字不仅是一种精神，更是一面旗帜，跨越国界、种族、信仰，引领着世界范围内的人道主义运动。",
          author: "——习近平",
        },
        {
          text: "我国红十字事业是中国特色社会主义事业的重要组成部分，中国红十字会是党和政府在人道领域联系群众的桥梁和纽带。",
          author: "——习近平",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.placard-carousel {
  .placard-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("~@/assets/images/home-view/background-placard.png");
    background-position: right;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .content {
      padding: 0 48px;
      font-size: 30px;
      font-weight: bold;
      color: #fff;

      .text {
        text-indent: 2em;
      }

      .author {
        display: block;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>