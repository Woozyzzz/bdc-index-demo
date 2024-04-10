<template>
  <div class="layout-basic">
    <HeaderBasic>
      <HeaderMenu />
    </HeaderBasic>
    <router-view />
  </div>
</template>

<script>
import HeaderBasic from "@/components/header-basic/index.vue";
import HeaderMenu from "@/components/header-menu/index.vue";

export default {
  name: "LayoutBasic",
  components: { HeaderBasic, HeaderMenu },
};
</script>

<style lang="scss" scoped>
// .layout-basic {
// }
</style>