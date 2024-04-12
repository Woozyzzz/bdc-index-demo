<template>
  <ul class="pane-center-news">
    <li
      v-for="({ text, url }, index) in centerNewsList"
      :key="index"
      class="list-item"
      @click="onClickListItem(url)"
    >
      {{ text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaneCenterNews",
  props: {
    centerNewsList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClickListItem(url) {
      location.href = url || "/";
    },
  },
};
</script>

<style lang="scss" scoped>
.pane-center-news {
  .list-item {
    position: relative;
    padding: 14px 16px;
    padding-left: 24px;
    border-top: 1px dashed #ddd;
    cursor: pointer;

    &:hover {
      background-color: #fef0f0;
      color: #f56c6c;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      background-color: #e92929;
    }

    &:first-child {
      border-top: none;
    }
  }
}
</style>