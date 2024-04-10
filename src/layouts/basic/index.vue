<template>
  <div class="layout-basic">
    <HeaderBasic />
    <router-view />
  </div>
</template>

<script>
import HeaderBasic from "@/components/header-basic/index.vue";

export default {
  name: "LayoutBasic",
  components: { HeaderBasic },
};
</script>

<style lang="scss" scoped>
.layout-basic {
}
</style>