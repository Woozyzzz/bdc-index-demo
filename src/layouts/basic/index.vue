<template>
  <div class="layout-basic">
    <HeaderBasicVue>
      <HeaderMenuVue />
    </HeaderBasicVue>
    <router-view />
    <FooterBasicVue />
  </div>
</template>

<script>
import HeaderBasicVue from "@/components/header-basic/index.vue";
import HeaderMenuVue from "@/components/header-menu/index.vue";
import FooterBasicVue from "@/components/footer-basic/index.vue";

export default {
  name: "LayoutBasic",
  components: { HeaderBasicVue, HeaderMenuVue, FooterBasicVue },
};
</script>

<style lang="scss" scoped>
// .layout-basic {
// }
</style>