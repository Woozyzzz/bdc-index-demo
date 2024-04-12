<template>
  <div class="focus-new">
    <div class="mobile">
      <FocusNewCarouselVue :focusNewList="focusNewList" />
    </div>

    <div class="computer">
      <FocusNewCarouselVue
        :focusNewList="focusNewList"
        height="400px"
        arrow="hover"
        textFontSize="18px"
      />

      <FocusNewTabsVue />
    </div>
  </div>
</template>

<script>
import FocusNewCarouselVue from "./components/focus-new-carousel.vue";
import FocusNewTabsVue from "./components/focus-new-tabs/index.vue";
import focusNew1Image from "@/assets/images/home-view/focus-new-1.jpg";
import focusNew2Image from "@/assets/images/home-view/focus-new-2.jpg";
import focusNew3Image from "@/assets/images/home-view/focus-new-3.jpg";
import focusNew4Image from "@/assets/images/home-view/focus-new-4.jpg";
import focusNew5Image from "@/assets/images/home-view/focus-new-5.jpg";

export default {
  name: "FocusNew",
  components: { FocusNewCarouselVue, FocusNewTabsVue },
  data() {
    return {
      focusNewList: [
        {
          text: "中国红十字会总会事业发展中心携手中宣部电影数字节目中心和爱心企业共建 “生命教育 文化伴行”平台",
          url: "",
          backgroundImage: focusNew1Image,
        },
        {
          text: "中国红十字会总会事业发展中心联合中宣部电影数字节目中心开展党建共建活动",
          url: "",
          backgroundImage: focusNew2Image,
        },
        {
          text: "中心召开支委扩大会和全体干部大会认真学习贯彻王可书记讲话精神",
          url: "",
          backgroundImage: focusNew3Image,
        },
        {
          text: "强调安全生产：北京拔萃双语学校全体教职工大会召开",
          url: "",
          backgroundImage: focusNew4Image,
        },
        {
          text: "中国红十字会总会事业发展中心召开2024年度工作会议",
          url: "",
          backgroundImage: focusNew5Image,
        },
      ],
      activeName: "",
    };
  },
  methods: {
    onClickCarouselItemContent(url) {
      location.href = url || "/";
    },
  },
};
</script>

<style lang="scss" scoped>
.focus-new {
  // .mobile {
  // }

  .computer {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .focus-new {
    .mobile {
      display: none;
    }

    .computer {
      display: flex;
      justify-content: space-between;
      background-color: #fff;

      .focus-new-carousel {
        width: 50%;
      }

      .focus-new-tabs {
        margin-left: 32px;
        margin-right: 8px;
        width: 50%;

        ::v-deep .el-tabs__content {
          height: calc(400px - 54px);
          overflow: auto;
        }
      }
    }
  }
}
</style>