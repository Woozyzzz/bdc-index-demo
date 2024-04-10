import Vue from "vue";
import VueRouter from "vue-router";
import LayoutBasic from "@/layouts/basic/index.vue";
import HomeView from "@/views/home-view/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: LayoutBasic,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  routes,
});

export default router;
