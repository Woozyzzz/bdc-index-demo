<template>
  <div class="layout-basic">
    <HeaderBasic>
      <HeaderMenu />
    </HeaderBasic>
    <router-view />
    <FooterBasic />
  </div>
</template>

<script>
import HeaderBasic from "@/components/header-basic/index.vue";
import HeaderMenu from "@/components/header-menu/index.vue";
import FooterBasic from "@/components/footer-basic/index.vue";

export default {
  name: "LayoutBasic",
  components: { HeaderBasic, HeaderMenu, FooterBasic },
};
</script>

<style lang="scss" scoped>
// .layout-basic {
// }
</style>