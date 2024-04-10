<template>
  <header class="basic-header">
    <div class="logo-wrapper">
      <div class="logo" @click="onClickLogoImage">
        <h1 class="h1">中国红十字会总会事业发展中心</h1>
      </div>

      <div class="motto"></div>
    </div>

    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "HeaderBasic",
  methods: {
    onClickLogoImage() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-header {
  .logo-wrapper {
    margin: 0 auto;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    .logo {
      width: 258px;
      height: 100%;
      background-image: url("~@/assets/images/bdc-logo.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      .h1 {
        display: none;
      }
    }

    .motto {
      width: 96px;
      height: 30%;
      background-image: url("~@/assets/images/bdc-motto.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}

@media screen and (min-width: 768px) {
  .basic-header {
    .logo-wrapper {
      max-width: 1200px;
      height: 128px;

      .logo {
        width: 516px;
      }

      .motto {
        width: 320px;
        height: 100%;
      }
    }
  }
}
</style>