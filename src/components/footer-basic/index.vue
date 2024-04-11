<template>
  <footer class="footer-basic">
    <div class="mobile">
      <p>Copyright©2003-2012 www.bdc.org.cn All rights</p>
      <p>中国红十字会总会事业发展中心维护与管理</p>
    </div>

    <div class="computer">
      <div class="info">
        <p class="content">京ICP备12032571号-1</p>
        <p class="content">中国红十字会总会事业发展中心维护与管理</p>
        <p class="content">Copyright©2003-2012 www.bdc.org.cn All rights</p>
      </div>

      <div class="logo" @click="onClickLogoImage"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBasic",
  methods: {
    onClickLogoImage() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-basic {
  padding: 20px 24px;
  background-color: #e75153;
  font-size: 14px;
  text-align: center;
  color: #fff;

  .computer {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .footer-basic {
    background-color: #fff;
    text-align: left;
    color: #000;

    .mobile {
      display: none;
    }

    .computer {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;

      .info {
        width: 320px;

        .content {
          margin: 4px 0;
        }
      }

      .logo {
        width: 258px;
        height: 68px;
        background-image: url("~@/assets/images/bdc-logo.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
      }
    }
  }
}
</style>