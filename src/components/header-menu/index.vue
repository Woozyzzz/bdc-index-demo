<template>
  <header class="header-menu">
    <el-menu
      mode="horizontal"
      background-color="#e50516"
      text-color="#fff"
      class="menu"
    >
      <template v-for="menuListItem in menuList">
        <el-menu-item
          v-if="!menuListItem.children || menuListItem.children.length === 0"
          :key="menuListItem.index"
          class="menu__item"
          >{{ menuListItem.title || "" }}</el-menu-item
        >
        <el-submenu
          v-else
          :key="menuListItem.index"
          :index="menuListItem.index"
          popper-class="header-submenu-popper"
          class="menu__submenu"
        >
          <template slot="title">{{ menuListItem.title || "" }}</template>
          <el-menu-item
            v-for="child in menuListItem.children"
            :key="child.index"
            :index="child.index"
            class="header-submenu-popper__menu-item"
            >{{ child.title || "" }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      menuList: [
        {
          index: "party-building-work",
          title: "党建工作",
          children: [
            { index: "central-party-building", title: "中心党建" },
            { index: "learning-platform", title: "学习平台" },
          ],
        },
        {
          index: "news-and-updates",
          title: "新闻动态",
          children: [
            { index: "red-cross-society-news", title: "总会新闻" },
            { index: "central-news", title: "中心新闻" },
          ],
        },
        {
          index: "special-reports",
          title: "专题报道",
          children: [
            { index: "volunteer-services", title: "志愿服务" },
            { index: "yaoyang-lecture-series", title: "曜阳大讲堂" },
          ],
        },
        {
          index: "public-welfare-projects",
          title: "公益项目",
          children: [
            { index: "fund-operations", title: "基金工作" },
            { index: "public-welfare-cooperation", title: "公益合作" },
          ],
        },
        {
          index: "public-announcements",
          title: "公示公告",
          children: [
            { index: "bulletins-and-notifications", title: "公告通知" },
          ],
        },
        {
          index: "about-us",
          title: "关于我们",
          children: [
            { index: "center-introduction", title: "中心介绍" },
            { index: "organizational-structure", title: "机构设置" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header-submenu-popper {
  .el-menu--popup {
    padding: 0 8px;
    min-width: auto;

    .el-menu-item {
      text-align: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .header-submenu-popper {
    .el-menu--popup {
      padding: 8px 0;
      min-width: 200px;

      .el-menu-item {
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.header-menu {
  background-color: #e50516;
  height: 60px;
  overflow: auto;

  .menu {
    margin: 0 auto;
    display: flex;
    border: none;

    .menu__submenu {
      text-align: center;

      ::v-deep .el-submenu__title {
        font-size: 16px;

        i {
          display: none;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .header-menu {
    .menu {
      width: 1200px;
      font-weight: bolder;

      .menu__submenu {
        width: 200px;
        text-align: center;

        ::v-deep .el-submenu__title {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
