<template>
  <div class="focus-new-tabs">
    <el-button
      type="text"
      icon="el-icon-plus"
      class="more-button"
      @click="onClickMoreButton"
      >更多</el-button
    >
    <el-tabs v-model="activeName">
      <el-tab-pane label="中心要闻" name="center-news">
        <PaneCenterNewsVue
          v-if="activeName === 'center-news'"
          :centerNewsList="centerNewsList"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PaneCenterNewsVue from "./components/pane-center-news.vue";

export default {
  name: "FocusNewTabs",
  components: { PaneCenterNewsVue },
  data() {
    return {
      activeName: "center-news",
      centerNewsList: [
        {
          text: "曜阳志愿服务心行动启动仪式在津举行",
          url: "",
        },
        {
          text: "红十字参与社会治理：曜阳养老全国首家服务窗口在邯揭牌",
          url: "",
        },
        {
          text: "《曜阳养老法律指南》课题结项会在京举办",
          url: "",
        },
        {
          text: "“食力守护 医心前行”大型义诊活动在福州启动",
          url: "",
        },
        {
          text: "2023年第六期曜阳养老志愿者培训班在安徽宿松举办",
          url: "",
        },
        {
          text: "《中国养老服务发展报告2023》发布：聚焦智慧养老服务",
          url: "",
        },
        {
          text: "纪念第38个国际志愿者日：曜阳养老志愿服务现场会举办",
          url: "",
        },
      ],
    };
  },
  methods: {
    onClickMoreButton() {},
  },
};
</script>

<style lang="scss" scoped>
.focus-new-tabs {
  position: relative;

  .more-button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .el-tabs {
    ::v-deep .el-tabs__item {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>